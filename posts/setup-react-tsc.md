---
title: "Setup a React-TypeScript app using Vite + testing with Vitest and testing-library"
date: "2023-01-21"
---

# Scaffold your project

With NPM: 

  `$ npm create vite@latest`

With Yarn: 

  `$ yarn create vite`

With PNPM: 

  `$ pnpm create vite`

Then,
- Type in your project name
- Select `React` from the list
- Select `TypeScript` from the list

Now, after you follow the instructions to change directory into your project and installing dependencies, we're done setting up the basic scaffold!

[Vite docs](https://vitejs.dev)

---

# Set up testing with Vitest and testing-library

Install test dependencies

`$ npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`

We're installing these as dev dependencies because we don't ship them to production, they're only used as development tools.

After your package manager is done installing, add a file to the root called `setupTests.ts`.
Add this code to the file: 

```ts
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

Now, update your `vite.config.ts`, so it looks like this: 

```ts
export default defineConfig({
  plugins: [react()],
  test: {
      enviromnent: "jsdom",
      setupFiles: "./setupTests.ts",
      css: false, /* enable this if your tests rely on css */
    },
})
```

Add a `test` script to your `package.json`

```json
"scripts": {
    // ...
    "test": "vitest",
},
```

At last, add a new file under `src` called `App.test.tsx` and add the following code to test if the DOM contains the text "Hello Vite + React!":

```jsx
import { describe, expect, it } from "vitest";
import { render, screen } form "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render with the title visible", () => {
    render(<App />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });
});
```

(P.s. you'll need to update the `<App />` component for this test to pass.)

[Vitest docs](https://vitest.dev)

[testing-library docs](https://testing-library.com)
