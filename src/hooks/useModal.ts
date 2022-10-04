import { useState } from 'react';

const useModal = (initialValue?: boolean) => {
  const [show, setShow] = useState<boolean>(initialValue ?? false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return {
    show,
    open,
    close,
  };
};

export default useModal;
