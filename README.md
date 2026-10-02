# Vancouver 2026 Civic Election Matcher

A static, no-backend quiz that asks 25 questions on city issues and ranks the eight Vancouver civic parties by how closely their published platforms match your answers, citing the platform item and source behind each reason. Plain HTML/CSS/JS, so it deploys to Azure Static Web Apps (free tier is fine) with no build step.

## Files

- `data.js` – parties, questions, per-party stances, notes and source links (edit this to update positions)
- `score.js` – scoring and reason selection
- `app.js`, `index.html`, `styles.css` – the UI
- `staticwebapp.config.json` – routing and security headers (strict CSP)
- `test.js` – `node test.js` checks data integrity and scoring
- `.github/workflows/azure-static-web-apps.yml` – optional CI/CD

## Run locally

```
node test.js
npx http-server . -p 8080
```

## Deploy to Azure (Azure CLI, from this folder)

```powershell
az login
az group create -n rg-van-election -l westus2
az staticwebapp create -n van-election-matcher -g rg-van-election -l westus2 --sku Free
$token = az staticwebapp secrets list -n van-election-matcher -g rg-van-election --query "properties.apiKey" -o tsv
npx @azure/static-web-apps-cli deploy . --deployment-token $token --env production
```

The app URL is printed by `az staticwebapp show -n van-election-matcher -g rg-van-election --query defaultHostname -o tsv`. Add a custom domain (for example under insipid.ca) with `az staticwebapp hostname set`.

## Deploy via GitHub Actions

Push this folder to a GitHub repo on `main`, create the Static Web App with `--source <repo-url> --branch main --login-with-github` (or add the deployment token as the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret), and the included workflow tests and deploys on every push.

## Updating positions

Edit `QUESTIONS[].stances` in `data.js`. Format: `party: [stance, "note", "sourceKey", inferred?]`, where stance is -2 to +2 and `sourceKey` refers to `SOURCES`. Run `node test.js` afterwards. The election is October 17, 2026. OneCity and COPE have each dropped their mayoral candidates (Azaroff withdrew Sept 8 and endorsed Pete Fry; Allen withdrew Sept 2) and were still running on 2025/early-2026 platforms when this was researched (Oct 2), so re-check `data.js` as parties publish more.