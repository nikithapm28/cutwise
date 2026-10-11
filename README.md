# ScrapSmart

## Local setup

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env.local` and fill in the Base44 app ID and app URL from your Base44 project settings.
3. Run `base44 dev` to start the app with its Base44 backend. Use `npm run dev` only when connecting the frontend to an already hosted backend.

The chatbot's text replies use the Base44 `Core.InvokeLLM` integration. Deploy `base44/functions/scrapsmartChat` with the app and ensure the Base44 project has LLM access and quota. Voice input and output use ElevenLabs when `ELEVENLABS_API_KEY` is set as a server-side Base44 function secret. `ELEVENLABS_VOICE_ID` is optional; the function has a default voice. Do not put either secret in `.env.local` or frontend code. Browser speech is used when ElevenLabs is unavailable.

## Figma and device features

Use Figma for the interface design and handoff, then implement that design in the React app. A Figma prototype does not run this app's React code or access its camera/chat backend. Test those features in the running app instead.

Camera access requires browser permission and a secure origin: HTTPS in deployment or `localhost` during development. If the app is embedded in an iframe, the host must also allow camera access.

## Checks

- `npm test`
- `npm run lint`
- `npm run build`
