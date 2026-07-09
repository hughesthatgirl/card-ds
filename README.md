# card-ds

React, TypeScript, and Jest setup for a design-system-oriented Card component take-home assessment.

## Current Component

The repo currently includes one reusable `Card` component and one reusable `ProductList` component. The Card API intentionally stays close to the assignment requirements while using generated CSS custom properties from the design tokens.

The repo also includes Storybook documentation, a package build/export workflow, and a local consuming demo app that installs the component package through npm workspaces.

## Public Exports

- `Card`
- `ProductList`
- `CardProps`
- `ProductListProps`
- `card-ds/styles.css`

## Scripts

- `npm run dev` starts the local Vite dev server.
- `npm run build` builds the component package, root demo app, and consuming demo app.
- `npm run build:lib` builds the installable component package in `dist`.
- `npm run storybook` starts Storybook.
- `npm run build:storybook` builds the static Storybook site.
- `npm run demo:dev` builds the component package and starts the consuming demo app.
- `npm run tokens:build` generates CSS custom properties from `tokens/theme.json`.
- `npm test` runs the Jest test suite.
