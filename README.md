# card-ds

React, TypeScript, and Jest setup for a design-system-oriented Card component take-home assessment.

## Current Component

The repo currently includes one reusable `Card` component and a `ProductList` demo that renders four sample product cards. The Card API intentionally stays close to the assignment requirements while using generated CSS custom properties from the design tokens.

Future design-system improvements would include Storybook documentation, a package build/export workflow, and a local consuming demo app that installs the component package through npm workspaces.

## Scripts

- `npm run dev` starts the local Vite dev server.
- `npm run build` type-checks and builds the app.
- `npm run tokens:build` generates CSS custom properties from `tokens/theme.json`.
- `npm test` runs the Jest test suite.
