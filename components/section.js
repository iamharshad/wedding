import * as React from 'react';

const Section = ({ id, className = '', children }) => {
  return (
    <section
      className={`section spyble-section ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
