<p align="left" >
<a href='https://carbonplan.org'>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://carbonplan-assets.s3.amazonaws.com/monogram/light-small.png">
  <img alt="CarbonPlan monogram." height="48" src="https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png">
</picture>
</a>
</p>

# carbonplan / icons

**icons for our websites**

![NPM Version](https://img.shields.io/npm/v/@carbonplan/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/)-licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a nonprofit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of climate solutions with open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/icons/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
