# special-effects
Special React Effect Hooks

## Installation
`npm i special-effects`

## Special Effects?
React currently has 2 effect hooks, [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) and [`useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect). Sepcial effects provides 4 more that vary in when they execute.

### useImmediateEffect
When using `useEffect` or `useLayoutEffect`, the execution of the passed in function is deferred. There may be times when you want it to execute immediately, which is what `useImmediateEffect` does. The signature is the same as `useEffect` and `useLayoutEffect`.

```jsx
import { useImmediateEffect } from 'special-effects';

function SomeComponent(props) {
    ...
    useImmediateEffect(() => {
        ...
        return () => {
            ...
        };
    }, [someDeps]);
    ...
}
```

`useImmediateEffect` is also available as a [standalone module](https://www.npmjs.com/package/use-immediate-effect).

### useAfterEffect
Behaves exactly like `useEffect` except the function passed does not execute on the first render.

```jsx
import { useAfterEffect } from 'special-effects';

function SomeComponent(props) {
    ...
    useAfterEffect(() => {
        ...
        return () => {
            ...
        };
    }, [someDeps]);
    ...
}
```

### useLayoutAfterEffect
Behaves exactly like `useLayoutEffect` except the function passed does not execute on the first render.

```jsx
import { useLayoutAfterEffect } from 'special-effects';

function SomeComponent(props) {
    ...
    useLayoutAfterEffect(() => {
        ...
        return () => {
            ...
        };
    }, [someDeps]);
    ...
}
```

### useImmediateAfterEffect
Behaves exactly like `useImmediateEffect` except the function passed does not execute on the first render.

```jsx
import { useImmediateAfterEffect } from 'special-effects';

function SomeComponent(props) {
    ...
    useImmediateAfterEffect(() => {
        ...
        return () => {
            ...
        };
    }, [someDeps]);
    ...
}
```