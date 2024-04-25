import closeIcon from "./closeIcon.svg"
import "./styles/styles.css"

export default function Modal ({ children, onClose }) {
  return (
    <dialog className="bg-red-50 items-center align-middle flex-1 w-1/2 shadow-lg h-1/2">
      <button onClick={onClose}>{closeIcon}</button>
      { children }
    </dialog>
  )
}
