export interface ModalContent {
  title: string;
  content: string;
  isResolve: (value: boolean) => void;
  isReject: (error: Error | any) => void;
}
