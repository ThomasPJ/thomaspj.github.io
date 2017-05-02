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
    |- /layouts
    |- /pages //child templates (extends of layouts)
    |- /styles
    |- robots.txt
```

### Child template

```jade
extends /layouts/main

extends ../layouts/main

block head
  title #{i18n.title}
  meta(name="description", content="#{i18n.meta_description}")

block main-col
  // start here
```

## Next steps
- [ ] Link to resume
- [ ] Image optimization
- [ ] Sitemap
- [ ] Update robots.txt

## Future plans
- Remove unused CSS rules
- Cloudflare setup
- Pass markdown content into jade files on build
- Automate sitemap update on build
