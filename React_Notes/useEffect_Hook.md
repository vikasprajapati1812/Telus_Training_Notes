*** useEffect Hook  ***
---
The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(function, dependencies)

---

There are the 3 ways how can we use the useEffect.
```
1. No dependency passed:

useEffect(() => {
    
  //Runs on every render

});
---
Since there is no dependencies passed , So it will render each time whenever any state is change.
---



2. An empty array:

useEffect(() => {

  //Runs only on the first render

}, []);
---
Since there is empty breackets [ ] in  dependencies passed , So it will render only a single time only and anyhow it will not run again.
---


3. Props or state values:

useEffect(() => {

  //Runs on the first render
  //And any time any dependency value changes

}, [prop, state]);

---
Since there is dependencies passed , So it will render only renderes  whenever the dependencies changes .
and in case of the multiple dependencies the array of the dependencies are passed as shown in the example.
---


```

***Effect Cleanup in the useEffect ***

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

```
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);


```
Note: To clear the timer, we had to name it.