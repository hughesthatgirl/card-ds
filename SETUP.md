# Project Setup

This project is intentionally small and scoped to the take-home assessment requirements: React, TypeScript, Jest tests, semantic UI work, accessibility, and token-based CSS.

## Runtime

The repo uses `nvm` with Node 22:

```text
.nvmrc -> 22
```

When entering the project, run:

```bash
nvm use
```

This makes the project use Node from `~/.nvm`, not Homebrew's Node. Node 22 was chosen because it satisfies the latest Vite requirements while staying on a stable long-term support line.

## App Tooling

Vite is used as the React development and build tool.

Available scripts:

```bash
npm run dev
npm run build
npm run preview
```

Vite was chosen because it is a lightweight, standard setup for React and TypeScript. It avoids extra framework conventions, routing, or server behavior that are not needed for this assessment.

## Token Pipeline

Style Dictionary generates CSS custom properties from the design token source file:

```text
tokens/theme.json -> src/styles/tokens.css
```

Available token scripts:

```bash
npm run tokens:build
npm run tokens:clean
```

The app imports the generated CSS from `src/index.css`. `npm run dev` and `npm run build` both run `tokens:build` first so the generated custom properties stay in sync with the token source.

Style Dictionary was chosen because it is a recognized design-system tool and keeps the implementation minimal: one source token file, one config file, and one generated CSS output.

## React And TypeScript

The project includes:

```text
react
react-dom
typescript
@types/react
@types/react-dom
```

TypeScript is configured with `strict: true` so future component APIs are strongly typed and easier to review.

## Testing

Jest is used because the requirements explicitly call for Jest test coverage.

The test setup includes:

```text
jest
ts-jest
jest-environment-jsdom
@types/jest
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event
```

Why these were added:

- `jest` is the required test runner.
- `ts-jest` lets Jest run TypeScript tests.
- `jest-environment-jsdom` provides a browser-like DOM for component tests.
- `@testing-library/react` supports testing rendered React behavior.
- `@testing-library/jest-dom` provides readable DOM assertions such as `toBeInTheDocument`.
- `@testing-library/user-event` will support keyboard, focus, and interaction tests for accessibility coverage.

## Tools Not Added Yet

Storybook was not added because it is not required for the assessment and would increase setup complexity.

Sass, CSS modules, Tailwind, routing, ESLint, Prettier, and component libraries were not added because they are not necessary to satisfy the stated requirements.

## Current Structure

```text
index.html
src/main.tsx
src/styles/tokens.css
src/App.tsx
src/App.test.tsx
src/index.css
src/test/setupTests.ts
jest.config.cjs
vite.config.ts
tsconfig.json
style-dictionary.config.json
tokens/theme.json
.nvmrc
package.json
```

The app currently contains only a minimal shell. No Card component or Product List component has been implemented yet.

## Verification

The setup has been verified with:

```bash
npm test -- --runInBand
npm run build
```

Both commands pass using the `nvm` Node runtime for this project.
