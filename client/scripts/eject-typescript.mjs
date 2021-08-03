#!/usr/bin/env zx

// https://github.com/storybookjs/addon-kit/blob/main/scripts/eject-typescript.mjs

// Emit TypeScript declarations
await $`tsc --declaration --emitDeclarationOnly --isolatedModules false --outfile codebook.js`;

// Copy TS files and delete src
await $`cp -r ./src ./srcTS`;
await $`rm -rf ./src`;
await $`mkdir ./src`;

// Convert TS code to JS
await $`babel --no-babelrc --presets @babel/preset-typescript --out-file-extension \".jsx\" ./srcTS -d ./src --extensions \".js,.jsx,.ts,.tsx\" --ignore "./srcTS/typings.d.ts"`;

// Format the newly created .js files
await $`prettier --no-config --no-editorconfig --single-quote --trailingComma es5 --semi true --write ./src`;

// Copy css
await $`cp -r ./srcTS/styles ./src/styles`

// Copy types
await $`mv codebook.d.ts ./src/codebook.d.ts`;

// Clean up
await $`rm -rf ./srcTS`;

await $`sed -i 's/index.tsx/index.jsx/' index.html`;

console.log('TypeScript ejection complete');
