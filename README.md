# special-effects
Special React Effect Hooks

## Installation
`npm i special-effects`

## Special Effects?
React currently has 2 effect hooks, [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) and [`useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect). Special effects provides 7 more that vary in when they execute.

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

## After Effects
The React docs say that effects with a list of dependencies will only run when one of the dependencies changes. This isn't quite accurate (IMHO) since they also run on the first render. The dependency didn't really *change* since it didn't exist before.

After effects do not run on the first render but otherwise follow the same rules as regular effects. This makes them behave more like `componentDidUpdate` than a combination of `componentDidMount` and `componentDidUpdate`. There are 3 after effects included.

- useAfterEffect
- useLayoutAfterEffect
- useImmediateAfterEffect

Below is an example using `useAfterEffect`. `useLayoutAfterEffect` and `useImmediateAfterEffect` are used the same way.

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

## Conditional Effects
Conditional effects only execute when you tell them to. Rather than passing a list of dependencies, you pass a boolean and when it is `true` the passed in function will execute, otherwise it won't. Clean up functions work as expected. There are 3 conditional effects included.

- useConditionalEffect
- useLayoutConditionalEffect
- useImmediateConditionalEffect

Below is an example using `useConditionalEffect`. `useLayoutConditionalEffect` and `useImmediateConditionalEffect` are used the same way.

```jsx
import { useState } from 'react';
import { useConditionalEffect } from 'special-effects';

const Counter = () => {
    const [count, setCount] = useState(0);

    useConditionalEffect(() => {
        console.log(`useConditionalEffect: Count is ${count}`);

        return () => {
            console.log(`useConditionalEffect: Clean up count ${count}`);
        }
    }, (count > 0 && !(count % 5)));

    const onClick = () => {
        setCount(count + 1);
    };

    return (<button onClick={onClick}>{`Clicked ${count} times`}</button>);
};
```
This will log when the counts hits 5 and the clean up will log at 6, then again at 10 and 11 and so on.
```
useConditionalEffect: Count is 5
useConditionalEffect: Clean up count 5
useConditionalEffect: Count is 10
useConditionalEffect: Clean up count 10
```

Of course this can be done with `useEffect` but I kinda like the `useConditionalEffect` syntax better.

```jsx
useEffect(() => {
    if ((count > 0 && !(count % 5))) {
        console.log(`useEffect: Count is ${count}`);

        return () => {
            console.log(`useEffect: Clean up count ${count}`);
        }
    }
}, [count]);
```
```
useEffect: Count is 5
useEffect: Clean up count 5
useEffect: Count is 10
useEffect: Clean up count 10
```