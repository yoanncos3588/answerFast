import { useCallback, useState } from "react";
import Modal from "../components/ModalConfirm";
import { ModalContent } from "../@types/modal";

const useConfirmationModal = () => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const showModal = useCallback((title: string, content: string) => {
    return new Promise((resolve, reject) => {
      setModalContent({
        title,
        content,
        isResolve: (value: boolean) => {
          setModalContent(null);
          resolve(value);
        },
        isReject: (error: Error | any) => {
          setModalContent(null);
          reject(error);
        },
      });
    });
  }, []);

  const ModalComponent = modalContent && (
    <Modal
      title={modalContent.title}
      content={modalContent.content}
      onConfirm={() => modalContent.isResolve(true)}
      onCancel={() => modalContent.isResolve(false)}
    />
  );

  return { showModal, ModalComponent };
};

export default useConfirmationModal;
