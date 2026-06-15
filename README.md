# 1:1 Loop

A static 1:1 meeting question picker designed for GitHub Pages.

## Publish on GitHub Pages

1. Put `index.html`, `styles.css`, and `app.js` in the root of a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Choose **Deploy from a branch**.
4. Select your main branch and `/root`, then save.

The app stores favorites, useful votes, submitted questions, and session notes in the visitor's browser with `localStorage`; no server or build step is required.

## Meeting modes and conversation builder

Meeting modes are defined in `app.js`. Each mode has:

- `categories`: the question categories shown when the mode filter is active.
- `slots`: the conversation steps used to build an agenda.

The conversation builder works fully in the browser. To collect shared votes or question submissions across all visitors, connect the app to a data service such as GitHub Issues, Formspree, Airtable, Supabase, Firebase, or a small custom API.
