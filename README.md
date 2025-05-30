# Qwik Material UI ⚡️

### qwik-material-ui

A Qwik-native Material Design component library using SCSS.  
Provides Google Material Design components optimized for the Qwik framework.

## Features

- Google Material Design components built natively for Qwik
- Styled using SCSS with customizable variables
- Supports ES and CommonJS module formats
- TypeScript types included for better developer experience
- Lightweight and optimized for fast loading with Qwik's resumability

## Installation

Install the package via npm:

```bash
npm install -D qwik-material-ui
```

To avoid optimization errors during Qwik’s build process, install this package as a devDependency.

## Basic Usage

Import components in your Qwik app

```
import { MaterialButton } from 'qwik-material-ui';

export const MyComponent = component$(() => {
  return (
    <MaterialButton onClick$={() => alert('Button clicked!')}>
      Click Me
    </MaterialButton>
  );
});
```

### Contribute

Clone and set up the project locally:

```bash
git clone https://github.com/QwikPacks/qwik-material-ui.git
cd qwik-material-ui
npm install
npm run dev
```

Build the library:

```
npm run build
```

Contributions are welcome! Open issues or pull requests anytime.

### Built for the [**Qwik**](https://qwik.dev) framework.

I built it mainly to speed up my own workflow but I’m happy to have it open source for everyone to use.