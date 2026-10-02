/* Party + question data for the Vancouver 2026 civic election matcher.
 *
 * Stance scale: -2 (strongly opposes) .. +2 (strongly supports).
 * A party is only scored on a question when a published platform item or
 * campaign statement addresses it. `inferred: true` marks stances that are a
 * reasonable reading of a related platform item rather than a direct statement.
 * Research snapshot: 30 Sept 2026. Election day: 17 Oct 2026.
 */

const SOURCES = {
  promises: { label: "Daily Hive – parties' major campaign promises", url: "https://dailyhive.com/vancouver/vancouver-municipal-parties-campaign-promises" },
  greens: { label: "Daily Hive – Green Vancouver platform", url: "https://dailyhive.com/vancouver/pete-fry-green-vancouver-platform-election-2026" },
  liberals: { label: "Daily Hive – Vancouver Liberals economic agenda", url: "https://dailyhive.com/vancouver/vancouver-liberals-economic-agenda-viaducts-ubc-skytrain-building-code" },
  abc: { label: "CTV News – ABC platform & plebiscite", url: "https://www.ctvnews.ca/vancouver/article/zero-fines-zero-tax-hike-vancouver-mayors-party-unveils-details-on-plebiscite-and-platform/" },
  cope: { label: "COPE – 2026 platform release", url: "https://www.votecope.ca/news/cope-releases-2026-platform-pledging-to-fight-for-libraries-city-wide-tenant-protections-tripling-the-empty-homes-tax-and-universal-meal-programs-for-students" },
  oneHousing: { label: "OneCity – housing plan", url: "https://www.onecityvancouver.ca/buildourwayout" },
  oneClimate: { label: "Daily Hive – OneCity climate platform", url: "https://dailyhive.com/vancouver/onecity-vancouver-william-azaroff-climate-action-solar-panels-platform" },
  oneWiki: { label: "Wikipedia – OneCity Vancouver", url: "https://en.wikipedia.org/wiki/OneCity_Vancouver" },
  vanplex: { label: "Vanplex – candidates ranked on multiplexes", url: "https://www.vanplex.ca/blog/vancouver-mayor-candidates-multiplex-ranking-2026/" },
  bright: { label: "Times of Canada – Bright Future Vancouver launch", url: "https://thetimesofcanada.com/muhammad-ahmad-launches-bright-future-vancouver-with-vision-to-restore-opportunity-and-affordability/" },
  abcPlat: { label: "Daily Hive – ABC 2026 platform", url: "https://dailyhive.com/vancouver/ken-sim-abc-vancouver-2026-civic-election-platform" },
  sideStreet: { label: "Side Street Vancouver – party platforms guide", url: "https://sidestreetvancouver.ca/election/parties/" },
  pike: { label: "Allen Pike – Vancouver Election Guide 2026", url: "https://allenpike.com/2026/2026-vancouver-election-guide/" },
  safety: { label: "Global News – mayoral candidates' public safety plans", url: "https://globalnews.ca/news/12083414/vancouver-mayoral-candidates-public-safety-plan/" },
  bizExam: { label: "Business Examiner – mayoral candidates on housing and small business", url: "https://businessexaminer.ca/real-estate/item/vancouver-mayoral-candidates-stake-out-housing-and-small-business-platforms/" },
  cityOne: { label: "CityHallWatch – getting to know OneCity", url: "https://cityhallwatch.wordpress.com/2026/09/15/election-2026-getting-to-know-the-parties-onecity-vancouver/" },
  cityCope: { label: "CityHallWatch – COPE party series", url: "https://cityhallwatch.wordpress.com/2026/09/08/election2026-party-series-cope/" },
  accord: { label: "OneCity – COPE/OneCity/Greens agreement", url: "https://www.onecityvancouver.ca/progressive_agreement" }
};

const PARTIES = [
  { id: "abc", name: "ABC Vancouver", leader: "Ken Sim (incumbent mayor)", color: "#1b6ec2",
    blurb: "Governing party; centre-right platform built on affordability (\"zero fines, zero tax hike\") and public safety." },
  { id: "greens", name: "Green Party of Vancouver", leader: "Pete Fry", color: "#2e8b3d",
    blurb: "Green/progressive party focused on affordable housing, active transportation, tree canopy and non-police community response." },
  { id: "onecity", name: "OneCity Vancouver", leader: "Council slate (mayoral candidate William Azaroff withdrew Sept 8 and endorsed Pete Fry)", color: "#d9480f",
    blurb: "Centre-left, urbanist party: public housing builder, citywide upzoning, climate action and active transportation." },
  { id: "cope", name: "COPE", leader: "Council slate (mayoral candidate Stephanie Allen withdrew Sept 2)", color: "#c2255c",
    blurb: "Left party focused on tenant protections, taxing vacant homes, public services and school meal programs." },
  { id: "liberals", name: "Vancouver Liberals", leader: "Kareem Allam", color: "#d6336c",
    blurb: "New centrist party pushing permitting reform, provincial building code adoption, UBC SkyTrain and higher police funding." },
  { id: "team", name: "TEAM for a Livable Vancouver", leader: "Colleen Hardwick", color: "#7048e8",
    blurb: "Neighbourhood-oriented party sceptical of provincially mandated density, focused on fiscal restraint and street disorder." },
  { id: "vote", name: "Vote Vancouver", leader: "Rebecca Bligh", color: "#0c8599",
    blurb: "Centrist party focused on middle-income housing on public land, free youth transit and city-hall service basics." },
  { id: "bright", name: "Bright Future Vancouver", leader: "Muhammad Ahmad", color: "#e8590c",
    blurb: "New party emphasizing homeownership pathways, faster approvals, fare-free transit, a targeted luxury-property levy and support for frontline workers." }
];

const QUESTIONS = [
  { id: "multiplex", topic: "Housing",
    text: "Vancouver should allow more multiplexes and higher density in traditionally single-family neighbourhoods.",
    stances: {
      greens: [1, "Supports pre-approved and prefabricated infill designs and \"missing middle\" housing, but stresses the pace of change.", "pike"],
      onecity: [2, "Champions rental buildings up to six storeys and four-storey condos across more neighbourhoods.", "cityOne"],
      abc: [1, "Led the 2023 vote legalizing multiplexes and halved permit processing times, though the 2026 platform has no specific multiplex commitments.", "vanplex"],
      vote: [1, "Voted to legalize multiplexes in 2023, but its 2026 emphasis is co-ops and community housing on public land.", "vanplex"],
      team: [-2, "Opposes the current multiplex framework, would ask the Province to amend Bills 44/46/47 and would reinstate parking minimums.", "vanplex"]
    } },
  { id: "permits", topic: "Housing",
    text: "City Hall should radically simplify permitting, even if it means restructuring departments or setting automatic approval deadlines.",
    stances: {
      liberals: [2, "Would merge 12 housing approval departments into one point of contact.", "promises"],
      bright: [2, "Proposes automatic approval if the City hasn't decided within 21 days.", "vanplex"],
      greens: [1, "Promises streamlined permitting, pre-approved designs and a single business contact.", "promises"],
      abc: [1, "Emphasizes faster permitting generally and cites a 50% cut in permit processing times.", "vanplex"]
    } },
  { id: "buildingcode", topic: "Housing",
    text: "Vancouver should drop its own building bylaw and adopt the B.C. Building Code.",
    stances: {
      liberals: [2, "Would replace the Vancouver Building bylaw with the B.C. Building Code.", "promises"],
      greens: [-1, "Platform lists support for the Vancouver Building bylaw.", "promises", true]
    } },
  { id: "publicbuilder", topic: "Housing",
    text: "The City itself should finance and own affordable housing (e.g. a public builder or municipal housing bonds), not rely mainly on private developers.",
    stances: {
      onecity: [2, "Proposes a public \"People's Builder\" to construct 4,000 affordable homes.", "oneHousing"],
      greens: [2, "Proposes a Municipal Housing Bond Program to finance City-owned affordable homes and a Rental Preservation Fund.", "greens"],
      vote: [1, "Wants affordable homes for middle-income earners built on public land with not-for-profit childcare.", "promises"],
      cope: [1, "Wants permanently affordable public housing, co-ops and community land trusts.", "cityCope", true],
      bright: [1, "Its Foundations Fund would support public housing through public-land strategies.", "sideStreet", true]
    } },
  { id: "middleincome", topic: "Housing",
    text: "Housing policy should prioritize middle-income earners and pathways to homeownership, not only low-income housing.",
    stances: {
      bright: [2, "Platform centres on expanding pathways to homeownership and municipal leadership on supply.", "bright"],
      vote: [2, "Promises affordable homes for middle-income earners on public land.", "promises"],
      team: [2, "Wants government–private partnerships for middle-income affordable housing.", "promises"]
    } },
  { id: "tenants", topic: "Housing",
    text: "The City should create a dedicated Renters Office and stronger, legally binding tenant protections and relocation rules.",
    stances: {
      cope: [2, "Would restore the Renters Office, adopt a binding tenants' rights by-law and expand tenant relocation protections.", "cope"],
      greens: [2, "Proposes a Renters' Office and stronger relocation assistance for tenants affected by redevelopment.", "greens"],
      team: [1, "Prioritizes low-income, supportive and secure rental housing.", "promises"],
      onecity: [2, "Wants renter protections extended citywide.", "cityOne"]
    } },
  { id: "speculation", topic: "Housing",
    text: "The City should use taxes to curb speculation and vacancy, such as a much higher Empty Homes Tax or a land value tax.",
    stances: {
      cope: [2, "Would triple the Empty Homes Tax and close loopholes.", "cope"],
      onecity: [2, "Supports a land value tax to fund public housing and curb speculation.", "oneWiki"],
      bright: [2, "Proposes a targeted luxury-property levy.", "sideStreet"]
    } },
  { id: "shelters", topic: "Homelessness",
    text: "The City should expand shelter villages and supportive housing for people who are homeless.",
    stances: {
      greens: [2, "Would expand shelter villages with private cabins and reverse limits on supportive-housing net gains.", "greens"],
      team: [1, "Prioritizes low-income and supportive housing.", "promises", true]
    } },
  { id: "propertytax", topic: "Taxes",
    text: "Property taxes should be frozen or capped at inflation, even if that limits new spending.",
    stances: {
      abc: [2, "Pledges a 0% property tax increase in 2027, a second consecutive freeze (\"zero fines, zero tax hike\").", "abcPlat"],
      team: [1, "Would keep property tax increases from exceeding inflation and do a line-by-line budget review.", "promises"]
    } },
  { id: "audit", topic: "Governance",
    text: "The next council should order a comprehensive audit of city spending and the previous administration's decisions.",
    stances: {
      cope: [2, "Would conduct a comprehensive review of the previous administration's term.", "cope"],
      team: [2, "Proposes a line-by-line budget review under a new fiscal framework.", "promises"]
    } },
  { id: "ranked", topic: "Governance",
    text: "Vancouver should adopt ranked ballots for mayoral elections.",
    stances: {
      greens: [2, "Platform calls for ranked ballots for mayor and participatory budgeting.", "greens"],
      onecity: [2, "Agreed with COPE and the Greens to jointly advocate for ranked ballots.", "accord"],
      cope: [2, "Agreed with OneCity and the Greens to jointly advocate for ranked ballots.", "accord"]
    } },
  { id: "policing", topic: "Public safety",
    text: "Vancouver should increase funding for the Vancouver Police Department and step up enforcement against organized crime and repeat offenders.",
    stances: {
      liberals: [2, "Would increase VPD funding and target organized crime.", "promises"],
      team: [1, "Wants a safety plan targeting repeat offenders and more street-disorder enforcement.", "promises"],
      abc: [1, "Public safety is the centrepiece of its platform, including simpler drug seizures for police and a promise to hire 100 more officers.", "pike"]
    } },
  { id: "crow", topic: "Public safety",
    text: "Non-emergency situations involving homelessness, addiction or mental health should be handled by trained non-police, non-medical outreach workers.",
    stances: {
      greens: [2, "Would create a 24/7 CROW team of non-police outreach workers with a dedicated phone number and an Office of Community Safety.", "promises"],
      cope: [2, "Advocates civilian responders for non-emergency calls.", "pike"]
    } },
  { id: "publicdrug", topic: "Public safety",
    text: "Hard drug use in public spaces should be banned, with stricter limits on where overdose prevention sites can operate.",
    stances: {
      abc: [2, "Would ban hard drug use in public spaces and require overdose prevention sites to be away from parks and schools.", "promises"],
      team: [2, "Proposes zero-tolerance enforcement of public drug use and a move away from harm-reduction approaches.", "safety"]
    } },
  { id: "involuntary", topic: "Public safety",
    text: "Vancouver should push for involuntary care beds for people with severe addiction and mental illness.",
    stances: {
      abc: [2, "Wants at least 100 involuntary beds, including converting part of the old St. Paul's Hospital (a plebiscite question).", "safety"],
      liberals: [-2, "Kareem Allam says the St. Paul's plan is \"essentially building a prison\" downtown.", "safety"],
      vote: [1, "Would lobby the Province for more psychiatric beds and target repeat offenders.", "safety", true]
    } },
  { id: "bikes", topic: "Transportation",
    text: "The City should convert more road space to bike lanes, pedestrian areas and green space, including lower speed limits on residential streets.",
    stances: {
      greens: [2, "Aims to convert at least 11% of roads, add Broadway bike lanes and expand 30 km/h streets.", "greens"],
      onecity: [2, "\"Connect Vancouver\" plan proposes connected cycling routes and transit priority.", "sideStreet"],
      vote: [1, "Prioritizes completing the Broadway bike lane and improving cycling connections.", "sideStreet"]
    } },
  { id: "parking", topic: "Transportation",
    text: "Parking should be cheaper and more plentiful: scrap residential permit fees, drop beach and community-centre parking charges, and require parking in new buildings.",
    stances: {
      abc: [2, "Would eliminate residential parking permit fees and paid parking at beaches and community centres.", "promises"],
      team: [1, "Would reinstate parking minimums.", "vanplex"],
      greens: [-1, "Prioritizes converting road space away from vehicle use.", "greens", true]
    } },
  { id: "ubc", topic: "Transportation",
    text: "The City should push the Province to extend SkyTrain to UBC on a firm timeline.",
    stances: {
      liberals: [2, "Seeks provincial funding and a timeline to extend the Millennium Line to UBC.", "liberals"],
      greens: [2, "Wants a binding agreement for the next Millennium Line extension to UBC.", "greens"]
    } },
  { id: "youthtransit", topic: "Transportation",
    text: "Transit should be free for everyone under 18.",
    stances: {
      vote: [2, "Promises free transit for youth under 18 and an all-electric passenger ferry.", "promises"],
      bright: [1, "Proposes fare-free transit for everyone, which goes further than youth-only.", "sideStreet"],
      cope: [1, "Supports expanded and eventually free public transit.", "cityCope"]
    } },
  { id: "climate", topic: "Environment",
    text: "The City should strengthen climate rules, such as requiring zero-emission heating in new buildings and enforcing greenhouse-gas limits on large buildings.",
    stances: {
      onecity: [2, "Would restore zero-emission heating rules and GHG limit enforcement, and launch a public rooftop solar program.", "oneClimate"],
      cope: [1, "Wants infrastructure upgrades for climate events and community preparedness.", "cope"],
      greens: [1, "Proposes green roofs on larger buildings and stronger tree protection.", "greens"]
    } },
  { id: "trees", topic: "Environment",
    text: "The City should protect and expand the urban tree canopy and green space, with stronger tree bylaws and a municipal arborist.",
    stances: {
      greens: [2, "Would create a Municipal Arborist Office and adopt the 3-30-300 green space rule.", "promises"],
      cope: [1, "Promises stewardship of green spaces for climate resilience.", "cope"]
    } },
  { id: "services", topic: "Services & culture",
    text: "The City should invest more in libraries, parks, community centres and recreation facilities.",
    stances: {
      cope: [2, "Would fully fund libraries to open 7 days a week and strengthen the Park Board.", "cope"],
      greens: [2, "Would restore $6 million to the Park Board and renew community centres.", "greens"],
      abc: [2, "Promises $400 million for community centres, new aquatic centres in Sunset and Marpole and a 50-metre pool.", "abcPlat"],
      team: [1, "Wants to invest in core services.", "promises"]
    } },
  { id: "schoolmeals", topic: "Services & culture",
    text: "Vancouver schools should offer universal free breakfast and lunch programs.",
    stances: {
      cope: [2, "Would launch universal breakfast and lunch programs through the Vancouver School Board.", "cope"]
    } },
  { id: "arts", topic: "Services & culture",
    text: "The City should actively support festivals, major events and entertainment districts.",
    stances: {
      greens: [2, "Would create a municipal Festival Fund for arts and events.", "greens"],
      abc: [1, "Promises to revitalize Granville Street and cooperate with major events.", "promises"]
    } },
  { id: "business", topic: "Economy",
    text: "The City should cut red tape for small businesses, for example a single point of contact and letting shops make and sell goods in one location.",
    stances: {
      greens: [2, "Would streamline permitting, create a single business contact and fast-track change-of-use permits.", "promises"],
      liberals: [2, "Would modernize zoning and let small businesses manufacture and sell in the same place.", "promises"],
      vote: [2, "Proposes a small business concierge service and positioning Vancouver as a critical-minerals and tech hub.", "bizExam"],
      abc: [1, "Wants to revitalize Granville Street and position Vancouver as a technology hub.", "promises", true]
    } }
];

if (typeof module !== "undefined") module.exports = { SOURCES, PARTIES, QUESTIONS };
