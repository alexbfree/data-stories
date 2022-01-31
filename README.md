This project was created with vue2 and vite the way [this blog](http://www.mathew-paul.nz/posts/how-to-use-vue2-with-vite/)
recommends

For markdown, we could use [markdown-it-vue](http://github.com/ravenq/markdown-it-vue)

# Commands

Run development server, typically at [http://localhost:3000](http://localhost:3000)
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

Run local cms proxy for testing, when dev server is running, the cms is typically at [http://localhost:3000/admin/index.html](http://localhost:3000/admin/index.html)
``` sh
npm run cms-proxy
```

# Cms

We're using [netlify cms](http://www.netlifycms.org/docs/intro/)

It's configured in [config.yml](./public/admin/config.yml)

It writes data to [cms-data](./public/cms-data)

