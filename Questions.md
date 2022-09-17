1. What is the difference between Component and PureComponent? give an example where it might break my app.

- PureComponent implements lifecycle method ShouldComponentUpdate with props/state comparison.
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
- ShouldComponentUpdate might not listen to context updates, and because of that component will not show current info on the page. E.g props & state weren't changed, but context - does, and our component won't re-render because of that.
3. Describe 3 ways to pass information from a component to its PARENT.
  - pass function to update state as prop to child component(lifting state up)
  - use context
  - use other state management tools(redux, mobx)
4. Give 2 ways to prevent components from re-rendering.
  - props data memoization(useMemo, useCallback)
  - react.memo which will re-render component only when props are changed
5. What is a fragment and why do we need it? Give an example where it might break my app.
  - Fragment should be used to wrap sereveral elements returned by some component into single item. It wouldn't be seen in the real DOM.
6. Give 3 examples of the HOC pattern.
  - React.memo is a HOC which checks props changes and decides should component be re-rendered
  - Redux.connect is also a HOC which connects application to the store
  - React routers `withRouter` is also a HOC which passes history/location props to wrapped component.
7. what's the difference in handling exceptions in promises, callbacks and async...await.
- Exceptions in promises can be handled using `.catch` method with callback inside. This callback accepts error object and could handle it somehow. Also we could pass second argument to the `.then` method, and it will handle promise error there(but if error appears in `.then` itself - this callback won't help). In `async..await` we can use `try .. catch` block, and in `catch` handle our error.
8. How many arguments does setState take and why is it async.
  - setState function takes 2 arguments. First should be object which defines changes in the state, or function that returns such object depending on its argumetns(prev state, current props). Second one - is a function, which will be triggered once state is updated with new values(in functional components this behaviour could be simulated with useEffect with state listed in the dependencies array). SetState is async to make this operation less expensive in terms of performance(several setState calls could be batched under the hood).
9. List the steps needed to migrate a Class to Function Component.
  - lifecycle methods should be replaced with `useEffect` hook
  - all state updates should be done with `useState` hook, instead of `this.setState`
  - props should be accessed as function params, instead of `this.props.propName`
10. List a few ways styles can be used with components.
  - it could be inline styles passed as style prop to JSX element
  - it could be separate css/scss file which would be imported into the component file and classnames from styles file would be used there
  - it could be some third party lib(bootstrap, MUI), which could be added to the project as installable package, and we could import pre-defined already styled components.
11. How to render an HTML string coming from the server.
  - we could use `__dangerouslyInsertInnerHtml` to parse string to actual HTML, or we can use some additionaly sanitizer libraries to modify our html string before parsing it(remove some tags, styles, etc).
