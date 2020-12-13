const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/404.js"))),
  "component---src-pages-bible-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/bible.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/blog.js"))),
  "component---src-pages-book-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/book.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/index.js"))),
  "component---src-pages-math-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/math.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/daesungk/Documents/insomenew.github.io/src/templates/blog-post.js")))
}

