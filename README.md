# 91.3 Ayclt FM AzuraCast Theme

A broadcast-inspired CSS theme for the **AzuraCast** public listener pages and administration interface.

- **Station:** 91.3 Ayclt FM
- **Tagline:** Dickinson's Texas #1 Hit Music Station
- **Colors:** broadcast red (`#e32636`), charcoal, white, and muted gray

> **Status:** The theme files are published in this repository, but the appearance on the live AzuraCast installation has not yet been verified. The admin stylesheet is experimental and may need selector adjustments for your installed AzuraCast version.

## Repository files

| File | Purpose |
| --- | --- |
| [main.css](main.css) | Shared colors and base styling |
| [public.css](public.css) | Styles for public station/listener pages; imports the shared stylesheet |
| [admin.css](admin.css) | Experimental styles for AzuraCast internal/admin pages; imports the shared stylesheet |
| [public.js](public.js) | Optional public-page browser-tab title branding |

## Install in AzuraCast

Open **Administration → Custom Branding** (usually available at `/admin/branding`).

### 1. Public Pages CSS

Paste this into **Custom CSS for Public Pages**:

```css
@import url("https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/public.css");
```

### 2. Internal Pages CSS

Paste this into **Custom CSS for Internal Pages**:

```css
@import url("https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/admin.css");
```

### 3. Optional Public Pages JavaScript

The JavaScript file only changes the browser tab title. It does not add visible page elements or change the page styling.

Paste this into **Custom JS for Public Pages** to load the hosted file:

```javascript
const script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/public.js";
script.defer = true;
document.head.appendChild(script);
```

If you do not want the custom browser-tab title, skip this step.

### 4. Save and refresh

1. Save the Custom Branding settings.
2. Open the relevant AzuraCast page.
3. Hard-refresh the browser with `Ctrl + F5`.
4. Check public pages and internal pages separately.

CSS imports belong in the CSS fields. Do not put `@import url(...)` in a JavaScript field.

## Direct stylesheet URLs

- Shared stylesheet: [main.css](https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/main.css)
- Public stylesheet: [public.css](https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/public.css)
- Admin stylesheet: [admin.css](https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/admin.css)
- Public JavaScript: [public.js](https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/public.js)

## Compatibility notes

- This project is an **AzuraCast** theme. It does not import the Jellyfin Netflix theme.
- AzuraCast provides separate custom CSS fields for public pages and internal pages.
- Newer AzuraCast versions use the `[data-bs-theme]` selector prefix. Older custom CSS may use `[data-theme]`; use the prefix appropriate to your installed version.
- The public-page stylesheet should be checked against the actual station page and its HTML structure.
- The admin stylesheet is experimental. If it does not visibly apply, inspect the page's HTML and browser developer tools before assuming the stylesheet URL or CSS is working.
- Browser caching can delay visible changes; hard-refresh after saving.

## Design goals

- Give 91.3 Ayclt FM a consistent broadcast identity.
- Use red accents with dark charcoal surfaces and readable white text.
- Keep public listener pages and internal dashboard styling separate.
- Preserve AzuraCast's existing player and administrative functionality.

## Official AzuraCast documentation

- [Using Custom CSS](https://www.azuracast.com/docs/administration/css/)
- [Using Custom JavaScript](https://www.azuracast.com/docs/administration/customization/)
