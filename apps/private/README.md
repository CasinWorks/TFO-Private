# TFO Private — Parent Portal

Umbrella brand site for **Private Aviation & Luxury Travel**. Aviation and Iceland ground services live on sibling sites.

## Ecosystem (local)

| Site | Folder | URL |
|------|--------|-----|
| TFO Private (parent) | `TFO Private/` | http://localhost:3000 |
| TFO Jets | `TFO Jets/` | http://localhost:3001 |
| Iceland Limousine | `Iceland Limousine/` | http://localhost:3002 |

Override with `VITE_PARENT_URL`, `VITE_JETS_URL`, `VITE_LIMOUSINE_URL` when deploying to real domains.

## Run locally

```bash
npm install
npm run dev
```

Start the sibling apps from their own folders the same way so CTAs can navigate between sites.
