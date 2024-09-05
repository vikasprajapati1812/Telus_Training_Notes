*** Redux Toolkit ***
1. Setup Your React App
If you haven't already, set up a new React application using Create React App.
~~~
npx create-react-app my-app
cd my-app
~~~
2. Install Redux Toolkit and React-Redux
Install the necessary packages: @reduxjs/toolkit and react-redux.
~~~
npm install @reduxjs/toolkit react-redux
~~~
3. Create a Slice
A slice is a collection of Redux reducer logic and actions for a single feature of your app.
Create a folder called features inside your src directory, then create a file for your slice, e.g., counterSlice.js:
~~~
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
~~~

4. Setup the Redux Store
Create a store.js file in a store directory.
~~~
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

~~~

5. Integrate Redux with React
Wrap your React application in the Provider component from react-redux, passing the Redux store as a prop.
Update your src/index.js file 
~~~
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


~~~

6. Connect Components to Redux
Use the useSelector and useDispatch hooks from react-redux to interact with the Redux store in your components.
Example usage in a component:
~~~
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;

~~~

7. Create Async Thunks (Optional):
For handling asynchronous logic, you can use createAsyncThunk.
~~~
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('users/fetchUser', async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  return response.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { entity: {}, loading: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entity = action.payload;
      });
  },
});

export default userSlice.reducer;

~~~

8. Test and Expand
Continue to create more slices for different parts of your application's state and add them to the store using configureStore.
Use Redux DevTools for debugging and to inspect the state changes.