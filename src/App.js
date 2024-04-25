import * as React from "react";
import Modal from "./Modal";
import "./styles/styles.css";
import Todo from "./components/Todo";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <main>
      <Todo></Todo>
    </main>
  );
}
