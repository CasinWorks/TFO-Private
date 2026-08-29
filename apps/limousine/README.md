# Iceland Limousine

Luxury ground transportation sibling site for the **TFO Private** ecosystem.

## Current fleet

- **Volvo XC90** — max 6 passengers
- **Toyota Land Cruiser 150 VX** — max 4 passengers

## Local development

```bash
npm install
npm run dev
```

Runs at [http://localhost:3002](http://localhost:3002).

Linked from the parent portal at `http://localhost:3000`. Override URLs with `VITE_PARENT_URL`, `VITE_JETS_URL`, and `VITE_LIMOUSINE_URL`.

## Booking emails (Resend)

On submit, the app POSTs to `/api/booking-notify`, which emails:

1. **Staff** — `BOOKING_NOTIFY_EMAIL` (comma-separated OK; change anytime in Vercel)
2. **Guest** — confirmation to the address they entered

Set these on the Limousine Vercel project (server env, not `VITE_`):

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) |
| `BOOKING_NOTIFY_EMAIL` | Who receives new booking alerts |
| `BOOKING_FROM_EMAIL` | Verified sender (use `beth.t@example.com` until your domain is verified) |
| `BOOKING_FROM_NAME` | Optional display name |

Booking still saves locally if email is misconfigured. Local Vite cannot run the API — use a Vercel deploy (or `vercel dev`) to test sends.

