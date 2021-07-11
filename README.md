<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / icons

**icons for our websites**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]
![NPM Version][]

[github]: https://github.com/carbonplan/emoji
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/carbonplan/emoji/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/carbonplan/emoji/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue
[npm version]: https://badgen.net/npm/v/@carbonplan/emoji

## usage

To use, import the icon components you want into your `next` project.

```jsx
import { Check, Arrow } from '@carbonplan/icons'
```

All icons are provided as SVG elements. They pair nicely with the `IconButton` component from `theme-ui` for making buttons.

For more usage examples checkout our [`design`](https://github.com/carbonplan/design) sample which showcases all these components live.

## development

To update a component and publish a new version, first make your changes, then follow these steps

- Increase the version number in `package.json`
- `npm run build`
- `npm publish`

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/components/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
