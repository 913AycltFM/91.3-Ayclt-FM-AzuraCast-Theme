# 91.3 Ayclt FM AzuraCast Theme

Professional broadcast-style theme for AzuraCast public listener pages and, where supported by the installation, the administration interface.

**Brand:** 91.3 Ayclt FM  
**Tagline:** Dickinson's Texas #1 Hit Music Station  
**Palette:** broadcast red, charcoal, white, and muted gray.

## Stylesheets

- [public.css](public.css) — intended for AzuraCast public station/listener pages.
- [admin.css](admin.css) — experimental styles intended for the AzuraCast administration interface.

Both stylesheets include the requested Jellyfin theme import at the top:

```css
@import url("https://913aycltfm.github.io/jellyfin-netflix-theme/jellyfin-netflix-theme.css");
```

## Raw stylesheet URLs

- Public: https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/public.css
- Admin: https://raw.githubusercontent.com/913AycltFM/91.3-Ayclt-FM-AzuraCast-Theme/main/admin.css

## Compatibility and installation notes

The imported stylesheet is designed for Jellyfin, not AzuraCast. Its selectors may not match AzuraCast, and generic selectors that do match can affect the layout unexpectedly. The additional rules in these files provide an AzuraCast-oriented broadcast-red/charcoal layer, but both stylesheets need testing against the actual AzuraCast version and pages.

Public-page custom CSS and admin-interface customization may use different configuration paths and have different support constraints. Do not assume the admin stylesheet can be installed through the public station's custom CSS field. Confirm the supported admin customization method for the installed AzuraCast version before applying `admin.css` to a production instance.

## Design goals

- Clear station identity and broadcast-red accents.
- Dark charcoal panels with readable white text.
- Responsive layouts for desktop and mobile.
- Preserve operational controls and semantic status colors in the admin interface.

No station logo or third-party images are bundled.
