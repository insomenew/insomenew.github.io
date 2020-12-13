---
title: "Gatsby Deployment to Github Pages"
date: 2020-12-13 02:31 
---

Recently, I created a blog and a personal webpage using Gatsby. 
This is a summary how to deploy Gatsby pages to Github. 
I followed the instruction at [here](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/).

### Install the gh-pages package
```shell
npm install gh-pages
```

### Configuration
If Gatsby blog/webpage will be deployed on username.github.io, then
```json
 "deploy": "gatsby build && gh-pages -d public"
```

If it will be on a repository, then
```javascript
module.exports = {
  pathPrefix: "/reponame",
}
```
and
```json
 "deploy": "gatsby build --prefix-paths && gh-pages -d public"
```
### Github Pages Setting 

Run `shell npm run deploy`.
The public folder is now copied to the gh-pages branch.
The last step is to set gh-pages branch as a github page. 
Go Repository -> Setting -> GitHub Pages -> Source and change Branch: Main to Branch: gh-pages. 
And click Save. 

### Plugin for linked files
Whenever we build Gatsby, every file in public folder (so that in gh-pages branch) is removed and newly created. 
So, it is not easy to manage the attached file for posts.
To deal with this issue, I added gatsby-remark-copy-linked-files to the configuration file.
```javascript
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-copy-linked-files`],
    },
  },
]
```
