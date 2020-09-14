React hook for toggle state.
Installation

Using npm:

$ npm install --save react-use-toggle

Using yarn:

$ yarn add react-use-toggle

Since this module uses React's new Hooks feature, to try this out you'll need to install at least version 16.8.0 of react and react-dom:

$ yarn add react@^16.8.0 react-dom@^16.8.0

Usage

import React from 'react';
import useToggle from 'react-use-toggle';

function Example() {
  const [checked, toggle] = useToggle(false);

  return (
    <label>
      <input checked={checked} onChange={toggle} type={'checkbox'} />
      Are you hooked?
    </label>
  );
}

API

useToggle(initialState?: boolean): [boolean, () => void]

Receives an optional initial state and returns a tuple with the current state and a function to toggle the state.
Contributing

Please feel free to submit any issues or pull requests.
License

MIT
