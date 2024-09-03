*** useCallback ***
The React useCallback Hook returns a memoized callback function.
Think of memoization as caching a value so that it does not need to be recalculated.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
~~~
The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You
~~~

thereis ssomething called "referential equality".

Every time a component re-renders, its functions get recreated. Because of this, the  function has actually changed.