import React from 'react';
import { Circle, XCircleFill } from 'react-bootstrap-icons';

export const UseCircle: React.FC<{
  size?: number;
  used: boolean;
  onClick: () => void;
}> = ({ size = 10, used, onClick }) => {
  const style = { height: `${size}px` };
  return (
    <button type="button" onClick={onClick}>
      {used ? <XCircleFill style={style} /> : <Circle style={style} />}
    </button>
  );
};
