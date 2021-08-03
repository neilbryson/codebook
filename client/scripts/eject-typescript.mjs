#!/usr/bin/env zx

// https://github.com/storybookjs/addon-kit/blob/main/scripts/eject-typescript.mjs

// Emit TypeScript declarations
await $`tsc --project tsconfig.eject.json --declaration --emitDeclarationOnly --outdir ejectTypes`;

// Copy TS files and delete src
await $`cp -r ./src ./srcTS`;
await $`rm -rf ./src`;
await $`mkdir ./src`;

// Convert TS code to JS
await $`babel --no-babelrc --presets @babel/preset-typescript --out-file-extension \".jsx\" ./srcTS -d ./src --extensions \".js,.jsx,.ts,.tsx\"`;

// Format the newly created .js files
await $`prettier --no-config --no-editorconfig --single-quote --trailingComma es5 --semi true --write ./src`;

// Copy css
await $`cp -r ./srcTS/styles ./src/styles`

// Add reference to the TypeScript types, so there will still be auto-completion
// and type checking even in JavaScript files.
await $`touch src/index.d.ts`;
await $`echo '/// <reference path="../ejectTypes/index.d.ts">' > ./src/index.d.ts`;

// Clean up
await $`rm -rf ./srcTS`;

// Change reference of React entrypoint
await $`sed -i 's/index.tsx/index.jsx/' index.html`;

// Remove TypeScript checker from Vite configs
await $`sed -i '/checker/d' vite.config.js`;

console.log('TypeScript ejection complete');
