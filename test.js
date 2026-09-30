// Run with: node test.js
const assert = require("assert");
const { PARTIES, QUESTIONS, SOURCES } = require("./data.js");
const { computeResults, splitReasons } = require("./score.js");

// Data integrity
const ids = new Set(PARTIES.map((p) => p.id));
const qids = new Set();
for (const q of QUESTIONS) {
  assert(!qids.has(q.id), "duplicate question id " + q.id);
  qids.add(q.id);
  assert(Object.keys(q.stances).length >= 1, q.id + " has no stances");
  for (const [pid, st] of Object.entries(q.stances)) {
    assert(ids.has(pid), q.id + ": unknown party " + pid);
    assert([-2, -1, 1, 2].includes(st[0]), q.id + "/" + pid + ": bad stance");
    assert(st[1] && SOURCES[st[2]], q.id + "/" + pid + ": missing note or source");
  }
}

function answersFor(fn) { const a = {}; for (const q of QUESTIONS) a[q.id] = fn(q); return a; }

// Someone who agrees with everything ABC stands for should match ABC
const abcUser = answersFor((q) => (q.stances.abc ? q.stances.abc[0] : null));
let r = computeResults(abcUser, {}, PARTIES, QUESTIONS);
assert.strictEqual(r[0].party.id, "abc");

// Same for Greens, COPE and OneCity
for (const pid of ["greens", "cope", "onecity", "liberals", "team"]) {
  const a = answersFor((q) => (q.stances[pid] ? q.stances[pid][0] : null));
  const res = computeResults(a, {}, PARTIES, QUESTIONS);
  assert.strictEqual(res[0].party.id, pid, "expected " + pid + " got " + res[0].party.id);
}

// Skipping everything yields everyone at 50%
r = computeResults({}, {}, PARTIES, QUESTIONS);
r.forEach((x) => assert(Math.abs(x.score - 0.5) < 1e-9));

// Reasons for a perfect-match user are all agreements
const top = computeResults(abcUser, {}, PARTIES, QUESTIONS)[0];
const s = splitReasons(top);
assert(s.agree.length > 0 && s.differ.length === 0);

// Importance weighting shifts results
const mixed = answersFor((q) => (q.id === "propertytax" ? 2 : q.id === "bikes" ? 2 : null));
const a1 = computeResults(mixed, {}, PARTIES, QUESTIONS).find((x) => x.party.id === "abc").score;
const a2 = computeResults(mixed, { propertytax: true }, PARTIES, QUESTIONS).find((x) => x.party.id === "abc").score;
assert(a2 > a1 - 1e-9);

console.log("All tests passed (" + QUESTIONS.length + " questions, " + PARTIES.length + " parties).");
