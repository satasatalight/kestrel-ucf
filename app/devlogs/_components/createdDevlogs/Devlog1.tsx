// src/devlog/Devlog1.tsx
import React from 'react';
import DevlogTemplate from '../DevlogTemplate';

const Devlog1: React.FC = () => {
  return (
    <DevlogTemplate
      title="Devlog #1 - My First Log"
      date="April 6, 2025"
      content={
        <>
          <p>This is our very first devlog!</p>
          <p>We worked on XYZ features...</p>
        </>
      }
    />
  );
};

export default Devlog1;