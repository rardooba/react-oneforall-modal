# Modal plugin for React

This is a simple react modal component that you can use in your project. The modal is added to the foreground DOM as a fixed-position with a transparent overlay. Do not hesitate to give me feedback so that we can improve this component together. `#oneforallallforone`

## Features

- Display and close modal

## Get started

### Download

[react-oneforall-modal](https://www.npmjs.com/package/react-oneforall-modal)

### Requirements

- React 18.1.0+

### Table of Contents

- [Installation](#installation)
- [Modal usage](#modal-usage)
- [Modal children](#modal-children)
- [Modal Customization](#modal-customization)

### Installation

Use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```sh
npm install react-oneforall-modal
```

```sh
yarn add react-oneforall-modal
```

Import the plugin into any react component like this :

```sh
import {Modal} from "react-oneforall-modal"
```

### Modal usage

Use any method you like to toggle the modal's visibility. 
One easy way is to use react's `useState` hook.

The plugin need two props to work : 
- `onClose` : past function that closes the modal
- `isOpen` : boolean passed to check the state of the modal (isOpen or isClosed)

_MyComponent.js_

```jsx
import { Modal } from "react-oneforall-modal";
import { useState } from 'react';

const MyComponent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal onClose={() => setIsModalOpen(!isModalOpen)} isOpen={isModalOpen}>
        <div>Your content type here</div>
      </Modal>
      <button onClick={setIsModalOpen(true)}>Open One for all modal</button>
    </>
  );

}
```

### Modal children

You can add any component or content inside the <Modal> tags to display them when the modal pop-up.

### Modal customization

You can change the background color of the modal by passing an optional color string as a props :

```sh
<Modal bgColor={"#000"}>
```

Any color that works in CSS will work if you pass it as a string.
