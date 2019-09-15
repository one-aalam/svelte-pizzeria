# Svelte ToDo
A Pizza shop Svelte 3/Rollup.
Available at: https://optimistic-euclid-892bac.netlify.com

`Scaffolded from https://github.com/one-aalam/svelte-todo.git`

### Get started

```
git clone https://github.com/one-aalam/svelte-pizzeria.git
cd svelte-pizzeria && npm install
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

### Thanks
Data Source: https://github.com/IdeaBlade/zza.data

####Note
Please do a `yarn import` before running `yarn dev` if you prefer `yarn` as a package manager. Due to the missing
`audit` commands in yarn, `npm` is primarily used and `yarn.lock` might not be in sync
