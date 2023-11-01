import React, { ReactNode } from 'react';
import { ChevronUp } from 'react-bootstrap-icons';

export const Accordion: React.FC<{
  title: ReactNode;
  action: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ title, action, content, isOpen, setIsOpen }) => {
  return (
    <div className={`accordion ${isOpen ? 'open' : 'closed'}`}>
      <span className="accordion-title flex align-center justify-between">
        <span className="flex align-center">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {title}
          </button>
          {action}
        </span>
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ChevronUp />
        </button>
      </span>
      <div className="accordion-content">
        <div className="">{content}</div>
      </div>
    </div>
  );
};
