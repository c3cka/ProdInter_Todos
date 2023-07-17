import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

export default function Modal({ children, visible, onClose }: ModalProps) {
  const ModalElement = (
    <div
      className="modal-root"
      data-visible={visible}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
    >
      <div
        className="modal-scrim"
        onClick={onClose}
      />

      <div className="modal-container">
        { children }
      </div>
    </div>
  );

  return createPortal(
    ModalElement,
    document.querySelector('body')!,
  );
}
