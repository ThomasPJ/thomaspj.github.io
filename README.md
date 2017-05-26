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
- [ ] Use `<picture>` element
- [ ] Dynamic resizing of images: [ImageOptim](https://imageoptim.com/api/get?username=)
- [ ] About and resume link
- [ ] CSS animations
- [ ] Refactor CSS
- [ ] Permalinks
- [ ] Cloudflare setup
- [ ] Image optimization
- [x] Sitemap
- [ ] Update robots.txt
- [x] Remove unused CSS rules
- [ ] Pass markdown content into jade files on build
- [ ] Automate sitemap update on build
