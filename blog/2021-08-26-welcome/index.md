---
slug: welcome
title: Welcome
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
---

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

:::tip

** You can write math using KaTeX: **
```
Let $f\colon[a,b] \to \R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be $F(x)=
\int_{a}^{x} f(t)\,dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.
```


Let $f\colon[a,b] \to \R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be $F(x)=
\int_{a}^{x} f(t)\,dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

:::



:::tip
**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.
:::