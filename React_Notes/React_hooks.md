 *** HOOKS  ***
---
Hooks were added to React in version 16.8.
---

---

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
---

```Hook Rules
There are 3 rules for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional
Note: Hooks will not work in React class components.```

Some of the Hooks are given below:
1. useState
2. useEffect
3. useContext
4. useRef
5. useReducer
6. useCallback
7. useMemo
8. Custom Hooks 
```


***    useState Hook    ***
The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.
```
1. To use the useState Hook, we first need to import it into our component.
import { useState } from "react";
```
```
2. Initialize useState
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

ex-  
const [color, setColor] = useState("");
```



The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.

```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```
Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

We then return an object, spreading the previousState and overwriting only the color.

