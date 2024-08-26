Virtual DOM vs Real DOM
```
Virtual DOM:
1. It is a lightweight copy of the original DOM.
2. It is maintained by JavaScript libraries.
3. After manipulation it only re-renders changed elements.
4. Updates are lightweight.
5. Performance is fast and UX is optimised.
6. Highly efficient as it performs batch updates.


Real DOM:

1. It is a tree representation of HTML elements.
2. It is maintained by the browser after parsing HTML elements.
3. After manipulation, it re-render the entire DOM.
4. Updates are heavyweight.
5. Performance is slow and the UX quality is low.
6. Less efficient due to re-rendering of DOM after each update.```