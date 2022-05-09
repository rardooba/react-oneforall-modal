# React One for all Modal

This is a simple react modal component that you can use in any project.
The modal adds itself to the DOM as a fixed position element so you can add it to any component on your app.

## Table of Contents

- [Installation](#installation)
- [Modal usage](##modal-usage)
- [Modal children](##modal-children)
- [Modal customize](##modal-customize)

## Installation

Use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```sh
npm install react-oneforall-modal
```

```sh
yarn add react-oneforall-modal
```

Import it into any react component like this :

```sh
import {Modal} from "react-oneforall-modal"
```

## Modal usage

Use any method you like to toggle the modal's visibility. One easy way is to use react's useState hook like this :

```jsx
import { Modal } from "react-oneforall-modal";
import { useState } from 'react';

const [isModalOpen, setIsModalOpen] = useState(false);
return (
  <>
    <Modal onClose={() => setIsModalOpen(!isModalOpen)} isOpen={isModalOpen}>
      <div>Your content type here</div>
    </Modal>
    <button onClick={setIsModalOpen(true)}>Open One for all modal</button>
  </>
);
```

## Modal children

You can add any component or content inside the <Modal> tags to display them when the modal pops-up.

## Modal customize

You can change the background color of the modal by passing an optional color strings as a props :

```sh
<Modal bgColor={"#000"}>
```

Any color that works in CSS will work if you pass it as a string.
