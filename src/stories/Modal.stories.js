import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal } from "../components/Modal";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Modal onClose={() => setIsModalOpen(!isModalOpen)} isOpen={isModalOpen} bgColor={"#0a8128"}>
      <div>Hello Doobs !</div>
    </Modal>
  );
});
