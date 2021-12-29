# eslint-config-imbox

## Prerequisites

Create an `.npmrc` file that at least contains:
```
@imbox:registry=https://npm.pkg.github.com
registry=https://registry.npmjs.org
```

## Install package

Install main package:
```
npm install -D @imbox/eslint-config-imbox
```

Install peer deps:
```
npm i -D eslint@7.32.0 prettier@2.5.1 typescript @typescript-eslint/eslint-plugin@4.23.0 eslint-plugin-prettier@4.0.0 eslint-plugin-import@2.25.3 eslint-plugin-node@11.1.0 eslint-plugin-promise@5.2.0 eslint-plugin-react@7.28.0
```



## Link configurations

Create an `.eslintrc` file that at least contains:
```json
{
  "extends": "@imbox/eslint-config-imbox"
}
```

Create an `.prettierrc` file that contains:
```
"@imbox/eslint-config-imbox/prettier"
```


## Optional Additions

package.json scripts (update ./src/ to fit project) :
```json
{
  "scripts": {
    "format:check": "prettier ./src/",
    "format:fix": "prettier --write ./src/",
    "lint:check": "eslint ./src/",
    "lint:fix": "eslint --fix ./src/"
  }
}
```

VSCode lint/format settings in .vscode/settings.json
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": [{"mode": "auto"}],
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```

VSCode extension recommendations in .vscode/extensions.json
```json
{ "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"] }
```
