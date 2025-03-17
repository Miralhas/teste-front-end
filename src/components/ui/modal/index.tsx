import { PropsWithChildren, useEffect } from "react";
import { useModalContext } from "../../../contexts/modal-context";
import Icon from "../icons/icon";

const Modal = ({ children }: PropsWithChildren) => {
  const { showModal, toggleModal } = useModalContext();

  useEffect(() => {
    if(showModal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <button className="close-modal btn-scale" onClick={toggleModal}>
              <Icon name="close" width={25} height={25}/>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;
