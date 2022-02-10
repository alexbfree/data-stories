# Netlify cms

The cms is configured in **static/admin/config.yml**. 

It writes data in **static/cms-data**

Cms user management is done with netlify identity. See [our documentation](https://github.com/hestiaAI/website.docs/blob/main/website-new/SETUP-NETLIFY.md)
or [netlify's](https://docs.netlify.com/visitor-access/identity/)

# Deployment

We want to build the project locally to reduce netlify build times. We almost have a working process for that, but until then we continue to let netlify do the build.

The build is configured by netlify.toml. It is currently a copy of netlify-nuxt-build.toml. To use the local build copy netlify-no-build.toml to netlify.toml

## build on netlify
## local build (incomplete)

The only missing thing is a script that copies static/cms-data to dist/cms-data. This script then needs to be called by netlify at every commit. That can be configured in netlify.toml


To update the website:

```bash
$ rm -rf dist
$ npm run generate
$ git add dist
$ git commit -m 'updated generated site'
```

Push it to the cms branch to trigger a build.

Builds are also triggered by changes in cms-data, where the cms writes.

Other changes don't trigger a build

# Nuxt commands and dir structure

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
