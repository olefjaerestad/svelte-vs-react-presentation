# Svelte VS React
Comparing Svelte and React. How do they compare in terms of ideology, behaviour and syntax?

## TODO:
- Add points from [here](https://dev.to/swyx/svelte-for-sites-react-for-apps-2o8h)
- Add section about Svelte [`actions`](https://svelte.dev/tutorial/actions).

## Svelte:
A compiler approach to frontend frameworks.

## Good:
- Single file components (SFC).
  - `MyComponent.tsx` + `MyComponent.css` -> `MyComponent.svelte`.
- Little boilerplate.
  - Less code = less bugs.
  - Less explicit code, sometimes harder to follow.

## Bad(-ish):
- CSS scoping
  - `.button.s-hsgb1785` instead of `.button-hsgb1785`.
  - Classes passed to custom components don't get hash.
- Harder to debug than React.
  - Output files look quite different than src-files. Sourcemaps can help, but they can't prevent logical errors.
  - No (official-ish) devtools for state management. 
    - https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn (doesn't cover stores).
- Setting up typescript requires more work than with React.
  - https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project
  - https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js
  - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript

## Different:
- State management.
- Order of code blocks (e.g. reactive declarations `$: {}`) matter.
  - https://svelte.dev/repl/cda14d2c02574b5ab70bb270816b9076?version=3.38.3

## Code examples/differences from React:
React:
```javascript
const quiz = useSelector(getQuiz);
const dispatch = useDispatch();
...
dispatch(startQuiz());
```

Svelte:
```javascript
const store = writable(defaultState); // https://svelte.dev/tutorial/writable-stores
$: quiz = $store.quiz; // https://svelte.dev/tutorial/reactive-declarations
...
$store.quizIsStarted = true;
```

React:
```javascript
useEffect(() => { 
  doSomething(value);
}, [value]);
```

Svelte:
```javascript
$: { 
  doSomething(value);
} // Svelte magically figures out the dependencies.
```

React:
```javascript
myRef = useRef();
...
<div ref={myRef}></div>
```

Svelte:
```javascript
let myRef;
...
<div bind:this="{myRef}"></div>
```
