## GitHub Page - Alexander Tang

This projects contains everything needed to build [my GitHub page](https://alexandertang.github.io/). My webpage will contain
posts about anything that I would like to share with the outside world, such as technical guides, projects, gaming news and more.

You are free to re-use the project template.

### Requirements

This project is built on:

- Angular 8
- nodeJS v10.16.3

You will also need:

- angular CLI
- [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)

### Installation

Install the packages.
```bash
npm install
```

Start a DEV server on `localhost:4200`
```bash
ng serve
```

### Deploy

GitHub User pages can only deploy from the master branch, which will contain the dist folder at root level.
It is recommended to use a different branch for your source files and deploy to your master branch.  The following
steps show you how to do this.

From the ready-for-deploy branch (in my case **dev**), build the production dist folder.
```bash
npm run build
```
Do not forget to modify the --base-href flag
to your own GitHub page URL, using the following convention: `https://[yourUsername].github.io`

Use the angular-cli-ghpages tool to deploy. 
```bash
npm run deploy
```
It will deploy to a new/existing **ghpages** branch by default.  The additional flag in the `package.json`
will correctly tell it to deploy to **master** instead. 

If the tool gets stuck, then you probably need to save your git credentials in your local or
global git config. It will get stuck on authentication but it will not prompt you nor will it break off the operation
by itself in my experience.

### Mentions

My css styling is based on the template provided by [https://startbootstrap.com/templates/modern-business/](https://startbootstrap.com/templates/modern-business/)
