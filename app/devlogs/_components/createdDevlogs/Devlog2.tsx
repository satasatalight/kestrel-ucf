// src/devlog/Devlog2.tsx
import React from 'react';
import DevlogTemplate from '../DevlogTemplate';

const Devlog2: React.FC = () => {
  return (
    <DevlogTemplate
      title="Devlog #2 - More Progress"
      date="April 7, 2025"
      content={
        <>
          <p>Today we implemented ABC.</p>
        </>
      }
    />
  );
};

export default Devlog2;