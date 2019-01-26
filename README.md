# markdown-it-codesandbox
markdown-it plugin to embed CodeSandbox editor.

<a href="https://www.patreon.com/sergiodxa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage
Download it with

```bash
yarn add markdown-it-codesandbox
# npm i markdown-it-codesandbox
```

Then use it as any markdown-it plugin

```js
import md from 'markdown-it';
import codesandbox from 'markdown-it-codesandbox';

const markdown = `
@[codesandbox](vn1k4rrml7)
`

md()
  .use(codesandbox)
  .render(markdown)
```

The syntax is `@[codesandbox](id)` where `id` is the sandbox ID you could find at the end of every CodeSandbox url.
