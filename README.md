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

- Email address — currently a placeholder, search for `[EMAIL]` across the HTML files.
- Logo — drop a logo file into `assets/` and swap the text logo in the header.
- Colors — edit the CSS variables at the top of `css/style.css` (`--color-primary`, `--color-accent`).
- Business hours on `contact.html` are a placeholder — confirm real opening hours.

## Setting up the quote form

The form on `contact.html` posts to [Formspree](https://formspree.io) so submissions get emailed — no backend required. To activate it:

1. Create a free account at formspree.io and create a new form.
2. Copy the form endpoint it gives you (looks like `https://formspree.io/f/abcd1234`).
3. In `contact.html`, replace `YOUR_FORM_ID` in the `<form action="...">` attribute with your real form ID.
4. Submit a test enquiry to confirm it arrives by email.

Until this is set up, the form will show an error message when submitted.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder locally, e.g.:

```
npx serve .
```

## Deploying

Since this is a static site, it can be hosted for free on Netlify, Vercel, GitHub Pages, or similar.
