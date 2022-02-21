# 👷 TypeSCript Hello World with esbuild

A template for kick starting a Cloudflare worker project with esbuild.

`src/index.ts` is the content of the Workers script.

## Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/pew/cloudflare-workers-esbuild-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## commands

```
available via `npm run-script`:
  build
    esbuild src/index.ts --format=esm --bundle --minify --outfile=dist/index.mjs
  format
    prettier --write  '*.{json,js}' 'src/**/*.{js,ts}' 'test/**/*.{js,ts}'
  lint
    eslint --fix --max-warnings=0 src && prettier --check '*.{json,js}' 'src/**/*.{js,ts}' 'test/**/*.{js,ts}'
```
