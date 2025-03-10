to reproduce:

git clone this repo, then

```
pnpm install
# enable vscode auto attach or start this script with the vscode debugger:
pnpm run reproduce
```

### Expected output:

```
pnpm reproduce

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