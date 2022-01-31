This project was created with vue2 and vite the way [this blog](https://www.mathew-paul.nz/posts/how-to-use-vue2-with-vite/)
recommends

For markdown, we could use [markdown-it-vue](https://github.com/ravenq/markdown-it-vue)

# Commands

Run development server
``` sh
npm run dev
```

Build for production
``` sh
npm run build
```

Preview procution build locally
``` sh
npm run preview
```

Run local cms proxy for testing
``` sh
npm run cms-proxy
```

# Cms

We're using [netlify cms](https://www.netlifycms.org/docs/intro/)

It's configured in [config.yml](./public/admin/config.yml)

It writes data to [cms-data](./public/cms-data)

