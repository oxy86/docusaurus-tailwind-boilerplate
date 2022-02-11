import React,{ useEffect }  from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { Mermaid } from 'mdx-mermaid/Mermaid';
import CodeBlock from '@theme/CodeBlock';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/idea-color.svg').default,
    description: (
      <>
        Docusaurus was designed to be easily installed and used to get your website up and running quickly. 
        This is a boilerplate with common plugins to save time.
      </>
    ),
  },
  {
    title: 'Focus on your Docs',
    Svg: require('../../static/img/docs.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing <a target="_blank" href="https://reactjs.org/">React</a>. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Tailwind for CSS',
    Svg: require('../../static/img/tailwind-mark.svg').default,
    description: (
        <div class="p-6 max-w-sm mx-auto bg-slate-200 rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="img/logo.svg" alt="ChitChat Logo" />
            </div>
            <div>
                <div class="text-xl font-medium text-black pb-4">Utility-first CSS</div>
                <p class="text-slate-500">Use <a target="_blank" href="https://tailwindcss.com/">Tailwind CSS</a> classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup!</p>
            </div>
        </div>
    ),
  },

  {
    title: 'KaTeX for Math',
    Svg: require('../../static/img/katex.svg').default,
    description: (
      <>
         <a target="_blank" href="https://docusaurus.io/docs/markdown-features/math-equations">Mathematical equations</a> can be rendered using KaTeX. <a target="_blank" href="https://github.com/KaTeX/KaTeX">KaTeX</a> is a fast, easy-to-use JavaScript library for TeX math rendering on the web. 
      </>
    ),
  },
  {
    title: 'Mermaid for diagrams',
    Svg: require('../../static/img/diagram-graph.svg').default,
    description: (
      <>
         Use Mermaid in .md, .mdx, .jsx and .tsx files with ease. <a target="_blank" href="https://mermaid-js.github.io">Mermaid</a> lets you create diagrams and visualizations using text and code. See a flowchart example: 
         

         <Mermaid chart={`flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]`} />
    

      </>
    ),
  },
  {
    title: 'Codeblocks for code',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
         <a target="_blank" href="https://docusaurus.io/docs/markdown-features/code-blocks">Code blocks</a> within documentation are super-powered 💪.  Code blocks can have titles and syntax highlighting for <a  target="_blank" href="https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js">a subset of commonly used languages</a>. Example: 
         

         <CodeBlock language="jsx" title="/src/components/HelloCodeTitle.js">
        {`function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
      </CodeBlock>
    

      </>
    ),
  },

  {
    title: 'Animation on Scroll',
    Svg: require('../../static/img/aos.svg').default,
    description: (
      <>
         <a target="_blank" href="https://github.com/michalsnik/aos/tree/v2#-animations">Animations</a> can be rendered using AOS. <a target="_blank" href="http://michalsnik.github.io/aos/">AOS</a> is a small CSS3 driven scroll animation library to animate elements on your page as you scroll.
      </>
    ),
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg data-aos="zoom-in" className="w-40 h-40" alt={title} />
      </div>
      <div data-aos="fade-down"     data-aos-duration="1000" className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });


  return (
    <section className="w-100 px-2 py-5 flex items-center">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
