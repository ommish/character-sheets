import React, { ReactNode } from 'react';
import { ChevronUp } from 'react-bootstrap-icons';

export const Accordion: React.FC<{
  title: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ title, content, isOpen, setIsOpen }) => {
  return (
    <div className={`accordion ${isOpen ? 'open' : 'closed'}`}>
      <button
        type="button"
        className="accordion-title flex align-center justify-between"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
        <ChevronUp />
      </button>
      <div className="accordion-content">
        <div className="">{content}</div>
      </div>
    </div>
  );
};
