## @bannerets/eslint-config-flow

### Installation


```console
$ npm i -D eslint @bannerets/eslint-config-flow
```

Create `.eslintrc.json`:

```json
{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "@bannerets/eslint-config-flow"
  ]
}
```

Add npm script:

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings 0"
  }
}
```
