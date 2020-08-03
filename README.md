Functional Component

1) Just renders the html in 'return' block
2) Internal re-rendering is not possible
3) Component re-renders if the props changes

Class Component

1) Renders the component in 'render()'
2) Internal re-rendering is possible only by setState

eg:

//initial state
this.state = { a: 1};

to update,
//corrct method
this.setState({ a: 2 });

//wrong methods
this.state.a = 2;

this.setState method is responsible for re-rendering.

3) Component re-renders if the props or state changes