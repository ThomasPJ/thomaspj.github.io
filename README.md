Thomas Petitjean's professional portfolio
========================

## Introduction
This portfolio features a series of projects I have worked on as a project manager, scrum master, search engine optimizer and front-end developer.

## Documentation

### Folder structure

```
|-src/
    |- /assets
    |- /i18n
    |- /images
    |- /layouts
    |- /pages // all website pages + 404 template
    |- /seo // sitemap and robots.txt
    |- /styles
```

### Layouts

```
|-src/
    |- /layouts
      |- category.jade
      |- homepage.jade
      |- post-amp.jade
      |- post.jade
      |- project.jade
```

### Adding a new page
1. Add `page_title.jade` in `pages/category`, `pages/post` or `pages/project`
2. Extend corresponding layout
3. Add folder named `page_title` in `/images`
4. Add url in sitemap

## Next steps
- [ ] ~~Use `<picture>` element~~
- [ ] ~~Dynamic resizing of images: [ImageOptim](https://imageoptim.com/api/get?username=)~~
- [x] About page
- [x] Resume link
- [x] ~~CSS animations~~
- [ ] Refactor CSS
- [ ] ~~Permalinks~~
- [ ] ~~Cloudflare setup~~
- [x] Image size reduction
- [x] Sitemap
- [ ] Update robots.txt
- [x] Remove unused CSS rules
- [ ] ~~Pass markdown content into jade files on build~~
- [ ] ~~Automate sitemap update on build~~
