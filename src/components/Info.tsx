import React from 'react';
import { InfoCircle } from 'react-bootstrap-icons';

export const Info: React.FC<{ title: string | undefined }> = ({ title }) =>
  title ? (
    <span className="tooltip-container">
      <InfoCircle className="info-icon" />
      <div className="tooltip">{title}</div>
    </span>
  ) : null;
