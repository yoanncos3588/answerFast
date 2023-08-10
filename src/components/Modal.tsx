import { forwardRef } from "react";
import { Button, Modal as ModalDaisy } from "react-daisyui";

type Props = {
  title: string;
  message: string;
};

const Modal = forwardRef(function Modal({ title, message }: Props, ref) {
  return (
    <ModalDaisy ref={ref}>
      <ModalDaisy.Header className="font-bold">{title}</ModalDaisy.Header>
      <ModalDaisy.Body>{message}</ModalDaisy.Body>
      <ModalDaisy.Actions>
        <Button>Confirmer</Button>
        <Button>Annuler</Button>
      </ModalDaisy.Actions>
    </ModalDaisy>
  );
});

export default Modal;
