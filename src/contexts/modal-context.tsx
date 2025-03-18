import { PropsWithChildren, useState } from "react";
import { createContext } from "./create-context";

type ModalContextState = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
}

const { useContext, ContextProvider } = createContext<ModalContextState>();

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <ContextProvider value={{ setShowModal, showModal, toggleModal }}>
      {children}
    </ContextProvider>
  )
}

export const useModalContext = useContext;