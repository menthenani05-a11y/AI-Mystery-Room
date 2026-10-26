# AI Mystery Room

An AI-powered, fictional detective investigation platform. The initial implementation follows the product baseline in [`spec.md`](./spec.md): React + Vite + TypeScript, Express + TypeScript, MongoDB/Mongoose, and Google's Gemini API.

## Start locally

Requirements: Node.js 20+, npm 10+, and MongoDB 7+ (local or hosted).

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and a long random `SESSION_SECRET`.
2. Add `GEMINI_API_KEY` to `.env` to enable new mystery generation. The key is used only by the backend.
3. Run `npm.cmd install` at the repository root.
4. Run `npm.cmd run dev` and open <http://localhost:5173>.

The API is available at <http://localhost:5000/api/v1>; its health check is `/api/v1/health`. AI generation returns a safe configuration error when no Gemini key is configured. It does not create mock cases.

For production, set `COOKIE_SECURE=true`, use HTTPS, provision MongoDB, configure `FRONTEND_URL`, and deploy the frontend and backend with their environment variables. See [`docs/SETUP.md`](./docs/SETUP.md) and [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md).

## What is implemented

- Account registration, login, logout, and session lookup using HTTP-only cookies and bcrypt password hashes.
- Authenticated case generation jobs; server-side Gemini integration and validated case structure.
- Private cases, investigations, saved progress, bookmarks, and notes in MongoDB.
- Evidence views for conversations, simulated CCTV, images, documents, and physical/witness evidence.
- Server-side culprit evaluation and deterministic supporting-evidence score; solution details are disclosed only after a final accusation.
- Landing page, dashboard, investigation history, account deletion, privacy and terms pages, responsive evidence room, and error states.
- A curated, playable public archive case seeded into MongoDB on first API startup.

Image evidence uses an illustrative text-based fallback. There is no separate image-generation provider configured. Evidence-reasoning points are not yet evaluated; the result marks that score unavailable and awards points only for culprit selection and deterministic supporting evidence. See `specs/DECISIONS.md`.

## Commands

- `npm.cmd run dev` — start the API and frontend.
- `npm.cmd run build` — build TypeScript backend and frontend bundles.
- `npm.cmd run typecheck` — typecheck both workspaces.
