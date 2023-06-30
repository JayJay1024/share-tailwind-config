# Share Tailwind Config

### Install and Init

```bash
$ npm install -D tailwindcss postcss autoprefixer -w a
$ npm install -D tailwindcss postcss autoprefixer -w b
$ npm install -D tailwindcss postcss autoprefixer -w c

packages/a $ npx tailwindcss init -p
packages/a $ mv postcss.config.js tailwind.config.js ../../
```

### Import

packages/a/src/index.css, packages/b/src/index.css, packages/c/src/index.css

```css
@config '../../../tailwind.config.js';

@tailwind base;
@tailwind components;
@tailwind utilities;
```
