---
title: "Gatsby Deployment to Github Pages"
date: 2020-12-13 02:31 
---

Recently, I created a blog and a personal webpage using Gatsby. 
This is a summary how to deploy Gatsby pages to Github. 
I followed the instruction at [here](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/).
### Install Gatsby
First, install Xcode, npm, node
```shell
xcode-select --install
brew install node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

Then, install Gatsby CLI
```
npm install -g gatsby-cli
```
/usr/local/lib/node_modules

To update the latest version of node.js, I installed `nvm`.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
```
I checked the latest version by `nvm ls-remote` and update it by `nvm install [the latest version number]`.

### Install the gh-pages package
```shell
npm install gh-pages
```
During install, I encountered Permission issue. It says "Missing write access to /usr/local/lib/node_modules". To solve this, I run 
```
sudo chown -R $USER /usr/local/lib/node_modules
```

### Start Gatsby

Start with 
```
gatsby new blog https://github.com/gatsbyjs/gatsby-starter-hello-world
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
