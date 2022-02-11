---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at `http://localhost:3000/docs/hello`.

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```


## Add Math

You can write math using KaTeX. This:
```tex title="KaTeX code"
Let $f\colon[a,b] \to \R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be $F(x)=
\int_{a}^{x} f(t)\,dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.
```

will become: 

Let $f\colon[a,b] \to \R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be $F(x)=
\int_{a}^{x} f(t)\,dt$. Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.


## Add Graphs

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```