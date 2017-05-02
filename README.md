Thomas Petitjean - personal portfolio
========================

## Introduction
This portfolio features a series of projects I have worked on - as a project manager, UX researcher and SEO.

## Documentation

### Folder structure

```
|-src/
    |- /assets
    |- /i18n
    |- /images
    |- /layouts
    |- /pages //child templates and other pages
    |- /seo //sitemap and robots.txt
    |- /styles
```

### Child template

```jade
extends ../../layouts/project

block head
  title
  meta(name="description", content="")

block project
  // start here
```

## Next steps
- [ ] About and resume link
- [ ] CSS animations
- [ ] Permalinks
- [ ] Cloudflare setup
- [ ] Image optimization
- [x] Sitemap
- [ ] Update robots.txt

## Future plans
- Remove unused CSS rules
- Pass markdown content into jade files on build
- Automate sitemap update on build
