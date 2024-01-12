import DefaultTestimonialsBody from './DefaultBody';

const TestimonialsBody = (props) => {
  const { variation } = props;

  const BodyComponent = variation?.view || DefaultTestimonialsBody;

  return <BodyComponent {...props} />;
};

export default TestimonialsBody;
