## @bannerets/eslint-config

### Installation


```console
$ npm i -D eslint @bannerets/eslint-config
```

Create `.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "@bannerets/eslint-config"
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
