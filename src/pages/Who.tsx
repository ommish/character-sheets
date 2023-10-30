import React from 'react';
import { useParams } from 'react-router-dom';

export const Who: React.FC = () => {
  const { name } = useParams();
  return <main>Who is {name}?</main>;
};
