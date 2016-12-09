import React from 'react';
import BpkLink from 'bpk-component-link';
import { BpkCode, BpkCodeBlock } from 'bpk-component-code';
import BpkParagraph from 'bpk-component-paragraph';
import DocsPageBuilder from './../../components/DocsPageBuilder';

const createReactAppHref = 'https://github.com/facebookincubator/create-react-app';
const backpackReactScriptsChangelogHref =
  'http://git.prod.skyscanner.local/backpack/create-react-app/blob/master/packages/react-scripts/CHANGELOG.md';

const components = [
  {
    id: 'tldr',
    title: 'TL;DR',
    blurb: [
      <BpkCodeBlock>
        {`npm install -g create-react-app

create-react-app my-app --scripts-version=backpack-react-scripts
cd my-app
npm start`}
      </BpkCodeBlock>,
      <BpkParagraph>
        Then open <BpkLink href="http://localhost:3000/" blank>http://localhost:3000/</BpkLink> to see your app.
      </BpkParagraph>,
      <BpkParagraph>
        When you’re ready to deploy to production, create a minified bundle with <BpkCode>npm run build</BpkCode>.
      </BpkParagraph>,
    ],
    examples: [],
  },
  {
    id: 'how-does-this-work',
    title: 'How does this work?',
    blurb: [
      <BpkParagraph>
        <BpkCode>backpack-react-scripts</BpkCode> is designed to be used in conjunction with
        Facebook&apos;s <BpkLink href={createReactAppHref} blank>Create React App</BpkLink>.
        It is almost identical in terms of it&apos;s feature set, apart from some custom configuration which adds
        support for compilation of Backpack components (Sass stylesheets etc).
      </BpkParagraph>,
      <BpkParagraph>
        The generated project also comes with Backpack integration out the box - the base stylesheet, bpk-mixins as
        well as a few Backpack components are already integrated to get you up and running as quickly as possible.
      </BpkParagraph>,
      <BpkParagraph>
        For more comprehensive documentation, please refer to the Create React
        App <BpkLink href={createReactAppHref} blank>readme</BpkLink>, as the majority of it&apos;s content still
        applies to <BpkCode>backpack-react-scripts</BpkCode>.
      </BpkParagraph>,
    ],
    examples: [],
  },
  {
    id: 'rationale',
    title: 'Rationale',
    blurb: [
      <BpkParagraph>
        Modern front-end development can be quite daunting. Getting started with React, es2015, Babel, Webpack and
        friends is so complex that &quot;boilerplate&quot; projects have sprung up all over GitHub. The main problem
        with these boilerplate projects is that there are literally hundreds of them making it hard to know which one
        to pick. Additionally once you have downloaded a boilerplate project, you&apos;ve just inadvertently inherited
        a whole bunch of front-end tooling technical debt. If updates are made to the boilerplate project in the future,
        how are you supposed to upgrade?
      </BpkParagraph>,
      <BpkParagraph>
        <BpkCode>backpack-react-scripts</BpkCode> is aimed at providing teams and codebases with a standardised way of
        building production web apps with Backpack + React at Skyscanner. When you create an app
        using <BpkCode>create-react-app my-app --scripts-version=backpack-react-scripts</BpkCode>, you&apos;ll notice
        that your project&apos;s <BpkCode>package.json</BpkCode> has a dependency
        on <BpkCode>backpack-react-scripts</BpkCode>. When we release new versions going forward (i.e. support for
        server-side rendering etc), all you need to do is bump the version number and run <BpkCode>npm install</BpkCode>
        to reap the rewards.
      </BpkParagraph>,
    ],
    examples: [],
  },
  {
    id: 'future-updates',
    title: 'Future updates',
    blurb: [
      <BpkParagraph>
        Please consult the <BpkLink href={backpackReactScriptsChangelogHref} blank>changelog</BpkLink> when
        performing updates to your <BpkCode>backpack-react-scripts</BpkCode> dependency.
      </BpkParagraph>,
    ],
    examples: [],
  },
];

const BackpackReactScriptsPage = () => <DocsPageBuilder
  title="Backpack React Scripts"
  blurb={[
    <BpkParagraph>Create React + Backpack apps with no build configuration.</BpkParagraph>,
  ]}
  components={components}
/>;

export default BackpackReactScriptsPage;