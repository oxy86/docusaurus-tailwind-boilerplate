// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'My Site',
    tagline: 'A Docusaurus boilerplate featuring Tailwind CSS, support for math/equations with KaTeX and more...',
    url: 'https://oxy86.github.io',
    baseUrl: '/docusaurus-tailwind-boilerplate/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'oxy86', // Usually your GitHub org/user name.
    projectName: 'docusaurus-tailwind-boilerplate', // Usually your repo name.
    trailingSlash: false,

    plugins: [
        'docusaurus-tailwindcss-loader',
        // [
        //     '@docusaurus/plugin-ideal-image',
        //     {
        //         quality: 85,        // JPEG compression quality
        //         max: 1600, // max resized image's size.
        //         min: 640, // min resized image's size. if original is lower, use that size.
        //         steps: 2, // the max number of images generated between min and max (inclusive)
        //         disableInDev: false,
        //     },
        // ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/oxy86/docusaurus-tailwind-boilerplate/tree/main/',
                    remarkPlugins: [math, [require('mdx-mermaid'), {
                        theme: { light: 'neutral', dark: 'forest' }
                      }]],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/oxy86/docusaurus-tailwind-boilerplate/tree/main',
                    remarkPlugins: [math, [require('mdx-mermaid'), {
                        theme: { light: 'neutral', dark: 'forest' }
                      }]],
                    rehypePlugins: [katex],
                },
                // Will be passed to @docusaurus/plugin-content-pages (false to disable)
                pages: {
                    remarkPlugins: [math, [require('mdx-mermaid'), {
                        theme: { light: 'neutral', dark: 'forest' }
                      }]],
                    rehypePlugins: [katex],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: 'new_version_rc.1',
                content:
                    'Version 1.0.0-rc.1 is out! 🎉 Check the <a target="_blank" rel="noopener noreferrer" href="/docs/quickstart">quickstart</a> to get started!',
                backgroundColor: '#FF5B79',
                textColor: 'black',
                isCloseable: true,
            },

            colorMode: {
                defaultMode: 'dark',
                respectPrefersColorScheme: false,
            },
            metadata: [
                { name: 'keywords', content: 'some keywords' },
                { name: 'description', content: 'A description' },
                { property: 'og:image', content: 'https://example.com/img/logo-og.png' },
                { name: 'twitter:card', content: 'summary_large_image'}, 
                { name: 'twitter:image', content: 'https://example.com/img/logo-og.png' },
                {name: 'twitter:site', content: '@your_twitter'},
            ],

            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/oxy86/docusaurus-tailwind-boilerplate',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'About',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Sample Blog',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'Plugins',
                        items: [
                            {
                                label: 'TailwindCSS Docs',
                                href: 'https://tailwindcss.com/docs/utility-first',
                            },
                            {
                                label: 'Mermaid-js',
                                href: 'https://mermaid-js.github.io/',
                            },
                            {
                                label: 'KaTeX demo page',
                                href: 'https://katex.org/#demo',
                            },
                            {
                                label: 'Docusaurus Docs',
                                href: 'https://docusaurus.io/docs',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Dimitris Blog',
                                href: 'https://dimitris.apeiro.gr',
                            },
                            {
                                label: 'Webzein',
                                href: 'https://www.webzein.gr',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
