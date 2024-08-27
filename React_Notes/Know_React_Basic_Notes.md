React was developed by the Facebook
React latest version is React 18.2.0 which was released in June 2022
React is a JS Library which is used to developed the Single page Application.
React helps us to breakdown the Applcation in small units that can be called as Components which are reusable and can be used n no. of times in the Projects.

Features of React JS Library
The Some of the Features of the React JS are given below :-
1. Uses Virtual Dom- REact  is based on the Virtual Dom concepts as it allow to make changes in Actual Dom fast as Compare to previous Manipulation .
(Basically It uses the Concept of "diffing" in which the Latest Virtual Dome is Firstly compare with the Old version of Virtual Dom and then the Changes that appear between them are then used to make changes in the actual  Dom.) The whole process of Manipultion in the actual dom is known as "Re-conciliation".
And bcz of the virtual Dom the Manipulation is Faster thats why the React is Faster as compare to previous manipulation in the DOM.
2. Components- Since the application is breakdown in parts so many components are created .
That also make the particular Components reusable and can be used n no. of times in the same Project.
3. One way Data Binding-
 there is only one way of flow of data from the Parent to the Child .
 the data is not flown from the Child to Parent.
 4. JSX (JavaScript Syntax Extension):

JSX combines HTML and JavaScript, allowing you to embed JavaScript objects within HTML elements.
It enhances code readability and simplifies UI development.
5. Performance:

React’s virtual DOM and component-based architecture contribute to better performance.
Separate components allow efficient rendering and faster execution.
6. Extension:

React has a rich ecosystem and supports various extensions.
Explore tools like Flux, Redux, and React Native for mobile app development and server-side rendering.
7. Conditional Statements in JSX:

JSX allows writing conditional statements directly.
Display data in the browser based on provided conditions.
8. Single-Page Applications (SPAs)
React is recommended in creating SPAs, allowing smooth content updates without page reloads. Its focus on reusable components makes it ideal for real-time applications.

```
Core React Concepts
here are some essential concepts to learn:

Props: Components can receive data from parent components through props, enabling you to pass information and customize component behavior.
State: Components can manage their internal state using the useState hook. This state dictates the component’s appearance and behavior, and updates trigger re-renders.
Lifecycle Methods: React provides lifecycle methods like componentDidMount and componentDidUpdate that allow you to perform actions at specific stages of a component’s lifecycle.
Conditional Rendering: Control what gets displayed on the screen based on certain conditions using conditional statements within JSX.```


```
React Advantages
1. Composable: We can divide these codes and put them in custom components. Then we can utilize those components and integrate them into one place.
2. Declarative: In ReactJS, the DOM is declarative. We can make interactive UIs by changing the state of the component and ReactJS takes care of updating the DOM according to it.
3. SEO Friendly: ReactJS affects the SEO by giving you a SPA (Single Page Application) which requires Javascript to show the content on the page which can be rendered and indexed.
4. Community: ReactJS has a huge community because of its demand each company wants to work with ReactJS. Companies like Meta, Netflix, etc built on ReactJS.
5. Easy to learn: HTML-like syntax of JSX makes you comfortable with the codes of React, it only requires a basic knowledge of HTML, CSS, and JS fundamentals to start working with it.
6. Debugging is Easy: The debugging of ReactJS is unidirectional which means while designing any app using ReactJS the child components are nested within parent components. So, the data flow is in a single direction it gets more easier to debug errors.```

```
ReactJS Lifecycle
Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. React automatically calls these methods at different points in a component’s life cycle. Understanding these phases helps manage state, perform side effects, and optimize components effectively.

1. Initialization
This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

2. Mounting Phase
Constructor: The constructor method initializes the component. It’s where you set up initial state and bind event handlers.
render(): This method returns the JSX representation of the component. It’s called during initial rendering and subsequent updates.
componentDidMount(): After the component is inserted into the DOM, this method is invoked. Use it for side effects like data fetching or setting timers.
3. Updating Phase
componentDidUpdate(prevProps, prevState): Called after the component updates due to new props or state changes. Handle side effects here.
shouldComponentUpdate(nextProps, nextState): Determines if the component should re-render. Optimize performance by customizing this method.
render(): Again, the render() method reflects changes in state or props during updates.
4. Unmounting Phase
componentWillUnmount(): Invoked just before the component is removed from the DOM. Clean up resources (e.g., event listeners, timers).```
