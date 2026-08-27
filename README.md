# TFO Private Monorepo

Three branded sites under one repository:

| App | Folder | Dev port | Production domain |
|-----|--------|----------|-------------------|
| **TFO Private** (parent portal) | `apps/private` | 3000 | `tfoprivate.com` |
| **TFO Jets** (aviation) | `apps/jets` | 3001 | `tfojets.com` |
| **Iceland Limousine** (ground) | `apps/limousine` | 3002 | `icelandlimousine.com` |

## Local development

```bash
npm install

npm run dev:private    # http://localhost:3000
npm run dev:jets       # http://localhost:3001
npm run dev:limousine  # http://localhost:3002
```

Copy `.env.example` to each app (or root) and adjust URLs if needed.

## Vercel (monorepo)

Create **3 Vercel projects** from this same GitHub repo. For each project set **Root Directory**:

| Vercel project | Root Directory | Build command | Output |
|----------------|----------------|---------------|--------|
| tfo-private | `apps/private` | `npm run build` | `dist` |
| tfo-jets | `apps/jets` | `npm run build` | `dist` |
| iceland-limousine | `apps/limousine` | `npm run build` | `dist` |

Add the env vars from `.env.example` to **all three** Vercel projects so cross-site navigation works.

Connect custom domains per project (see table above).

## Structure

```
apps/
  private/     TFO Private portal
  jets/        TFO Jets
  limousine/   Iceland Limousine + story booking + staff RBAC
```
