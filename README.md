# File Tree

## Tech stack:

- **`React`**
- **`Typescript`**
- **`yarn`**
- **`Vite`** -- used for it's ease of setting up a projects, and its first-class compatibility with Typescript
- **`styled-components`** and **`classNames`** -- used because I have a preference to CSS-in-JS libraries. I find that
  `styled-components` paired with `classNames` is a quick, modular, and easy to read method for styling.

## Local use

This project uses `yarn` as a package manager and its `origin` is a GitHub repository

```shell
# clone it
git clone https://github.com/jpwallace22/file-directory.git

# cd into it
cd file-directory

# run it
yarn dev
```

The default `vite` port is `http://localhost:5173/`

## The Rundown

### State Management

The `FileTree` component uses basic `react` state management with its API exposed using a custom hook. This can easily
be refactored to use the build in `useReducer` hook and expose the dispatch instead. If I went this route, I would have
created separate reducers for handling the `FileTree` data structure and directory state. In the end, I felt this method
worked well enough with maintaining readability and being a bit lower on the complexity side.

### Data Structures

**FileTree**: I went with the obvious choice here and maintained a tree structure. **openDirectories**: I went with the
less the obvious choice on this and opted in for a `map`. I feel like an `array` would be the go-to, however it has an
O(n) time on every directory while the map is instant. **selectedNode**: Basic object. Stores the currently selected
node in state with additional information (parent directory path and current path)

### Implementations

**Add/Remove Node**: In order to get the name of the node, I use a `window.prompt()`. This would not be a preferred
method in a production environment. In that instant, I would create a third node type that is an interim for name entry.
Both actions depend on basic tree traversal with a callback function. I did not add the drag and drop functionality yet,
but I would use the HTML5 Drag and Drop API with a combination of these two functions.

**Single Source of State**: I prefer a pattern of not storing state in sub-components if it can be avoided. I could have
probably stored the `openDirectory` state within each `TreeNode` but it would quickly hit complexity when iterating.
This could also be refactored to use a `Context`, but again. With the size of the component, I dont think its quite yet
required. If I needed to expose the API elsewhere, I would definitely put it in a context/use a state management
library.

**File Management**: I am a fan of embracing molecule design/development. Typically I would prefer to have `atoms` with
basic colors/sizes/etc.. but not needed for something of this size. I went back and forth between a `subComponents`
directory with the `FileTree` but its not a big deal either way, as long as all elements are in a single directory.

**Root Directory**: I opted in for the root directory to be styled different and non-collapsible in this implementation
to maintain the same feel as VSCode.
