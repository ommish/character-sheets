import React, { ReactNode, useEffect, useState } from 'react';
import { Accordion } from './Accordion';

export const AccordionList: React.FC<{
  accordions: {
    id: string;
    title: ReactNode;
    content: ReactNode;
  }[];
  toggleAll?: number;
}> = ({ accordions, toggleAll }) => {
  const [openStates, setOpenStates] = useState(accordions.map(() => false));
  useEffect(() => {
    const anyOpen = openStates.some(Boolean);
    setOpenStates(accordions.map(() => !anyOpen));
    // eslint-disable-next-line
  }, [toggleAll]);
  return (
    <>
      {accordions.map((accordion, i) => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          content={accordion.content}
          isOpen={openStates[i]}
          setIsOpen={(isOpen: boolean) => {
            setOpenStates(openStates.map((o, j) => (i === j ? isOpen : o)));
          }}
        />
      ))}
    </>
  );
};
