# TGM Plumbing & Heating

Website for TGM Plumbing & Heating — a static, multi-page HTML/CSS/JS site (no build step required).

## Structure

```
index.html          Home page
services.html        Services page
about.html            About page
contact.html          Contact + quote request form
css/style.css         Shared styles (colors, layout, components)
js/script.js          Mobile nav toggle + form handling
assets/                Images / logo (placeholders for now)
```

## Customizing (placeholder content to replace)

- Business name, phone number, email, and address — currently placeholders, search for `[PHONE]`, `[EMAIL]`, `[ADDRESS]` across the HTML files.
- Logo — drop a logo file into `assets/` and swap the text logo in the header.
- Colors — edit the CSS variables at the top of `css/style.css` (`--color-primary`, `--color-accent`).
- Quote form — see the note in `contact.html` / `js/script.js` for wiring it up to an actual form backend (e.g. Formspree) so submissions get emailed.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder locally, e.g.:

```
npx serve .
```

## Deploying

Since this is a static site, it can be hosted for free on Netlify, Vercel, GitHub Pages, or similar.
