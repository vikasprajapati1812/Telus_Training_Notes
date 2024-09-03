*** React Context    ***

React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

```
The Problem
State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".


```

```
Solution is to useContext.
To create context you have to import it first..

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
const UserContext = createContext()

then
use the Context Provider to wrap the tree of components that need the state Context.

***
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
***
```