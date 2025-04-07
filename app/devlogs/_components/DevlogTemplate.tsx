// DevlogTemplate.tsx
import React from 'react';

interface DevlogTemplateProps {
  title: string;
  date: string;
  content: React.ReactNode;
}

const DevlogTemplate: React.FC<DevlogTemplateProps> = ({ title, date, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <time>{date}</time>
      <div>{content}</div>
    </article>
  );
};

export default DevlogTemplate;