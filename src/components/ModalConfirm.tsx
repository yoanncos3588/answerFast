import { Button, Modal as ModalDaisy } from "react-daisyui";

type Props = {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ModalConfirm = ({ title, content, onConfirm, onCancel }: Props) => {
  return (
    <ModalDaisy open>
      <ModalDaisy.Header className="font-bold">{title}</ModalDaisy.Header>
      <ModalDaisy.Body>{content}</ModalDaisy.Body>
      <ModalDaisy.Actions>
        <Button onClick={onConfirm}>Confirmer</Button>
        <Button onClick={onCancel}>Annuler</Button>
      </ModalDaisy.Actions>
    </ModalDaisy>
  );
};

export default ModalConfirm;
