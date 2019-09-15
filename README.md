# Svelte ToDo
A ToDo App + Svelte starter pack for Svelte 3/Rollup.
Available at: https://hopeful-hugle-81a197.netlify.com

For Typescript/VS Code support checkout `feature/add-ts-support` with
- Typescript support inside Svelte components with [svelte-ts-preprocess](https://github.com/PaulMaly/svelte-ts-preprocess)
- Visual Studio Code support with [svelte-vscode](https://github.com/UnwrittenFun/svelte-vscode) extension (via `svelte.config.js`)

>TS Support in a Svelte app still has [some](https://github.com/sveltejs/svelte/issues/1639) [moving](https://github.com/sveltejs/svelte/issues/2746) [pieces](https://github.com/sveltejs/sapper/issues/760)

### Get started

```
git clone https://github.com/one-aalam/svelte-todo.git
cd svelte-todo && rm -rf .git && npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```

####Note
Please do a `yarn import` before running `yarn dev` if you prefer `yarn` as a package manager. Due to the missing
`audit` commands in yarn, `npm` is primarily used and `yarn.lock` might not be in sync
