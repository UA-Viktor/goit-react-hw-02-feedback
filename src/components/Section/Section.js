import React from 'react';

const Section = ({ text, childComponent }) => (
  <div>
    <h1>{text}</h1>
    {childComponent}
  </div>
);

export default Section;
