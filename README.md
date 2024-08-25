## Interview Questions

### Q1: What is npm?
A1: It's a package manager, It doesn't have full form like "Node Package Manager".

### Q2: Explination about (Tilde ~ | Caret ^ | Asterisk *) in package.json ?
A2: Here are the explination of all
- Tilde is used to accept patches & bugs
- Caret allows us to receive patches,bug fixes, & minor version changes
- Asterisk is used to allow any updates, either major or minor (Generally not recommended)

### Q3: What is JSX?
A3: JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

### Q4: What is createElement?
A4: It's a JavaScript object, While rendering it will convert into HTML and display on browsers. (It is HTML like syntax)

### Q5: What is Bable?
A5: Bable is a JavaScript Compiler (Or we can it's a JS Transpiler).
- One of the job is to convert JSX into React Element.

### Q6: What is Component?
A6: Component is building block of React & It is just a JS function which return some peice of JSX. There are 2 types of components.
- Class Components (Older way, We don't use)
- Functional Components

- First letter should be capital when we create a component.

### Q7: What is Props?
A7: Props is property, It is just like passing arguments to function. 

### Q8: What is Config Driven UI?
A8: Config Driven Ui allow you to create dynamic and customizable UIs that can be easily modified without requiring changes to underlying code.

### Q9: What is Optional Chaning?
A9: Optional chaining, introduced in ECMAScript 2020, is a feature that simplifies the process of accessing properties and methods of nested objects or arrays when intermediate properties may be null or undefined 

### Q10: What is React Hooks?
A10: 

### Q11: How many types of export/import?
A11: There are 2 types of exports.
- Default Export
- Named Export

### Q12: What is State in React?
A12: 

### Q13: React Hooks
1- useState
2- useEffect
3- useContext
4- useReducer
5- useCallback
6- useMemo
7- useRef
8- useImperativeHandle
9- useLayoutEffect
10- useDebugValue
11- Custom Hooks

### Q14: Why React is Fast?
- It has virtual DOM
- It has Fiber algorithm
- It has efficient DOM manupulation

### Q15: When useEffect() is called?
A15: useEffect is called after rendering the component, One important is thing is dependence array is that and we don't pass second arguments so it calls on every component render.
