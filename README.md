to reproduce:

git clone this repo, then

```
yarn install
# enable vscode auto attach or start this script with the vscode debugger:
yarn run reproduce
```

### Expected output:

```
yarn reproduce

> @ reproduce /tmp/20.35
> node --import @swc-node/register/esm-register a/test.ts

this never happens
a
a
a
a
```

### actual output

> @ reproduce /tmp/20.35
> node --import @swc-node/register/esm-register a/test.ts

Debugger listening on ws://127.0.0.1:43771/10e0e179-8b33-4a3a-bcbc-cc186e42e826
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
[hangs forever]
```

Same thing also happens with tsx not just swc-node fyi:

```
$ yarn add tsx
$ yarn tsx a/test.ts
Debugger listening on ws://127.0.0.1:36373/09fe9e25-e7e3-494e-87a5-1ea36cf52750
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
[hangs]
```

Same also happens with pnpm! not just yarn.