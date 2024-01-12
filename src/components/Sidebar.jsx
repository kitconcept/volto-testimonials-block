import React from 'react';
import { Segment } from 'semantic-ui-react';

import Data from './Data';

const TestimonialsSidebar = (props) => {
  return (
    <Segment.Group raised>
      <Data {...props} />
    </Segment.Group>
  );
};

export default TestimonialsSidebar;
