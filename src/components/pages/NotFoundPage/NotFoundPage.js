import { Container } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container>
      <h1 className='text-center'>
        404 NOT FOUND
      </h1>
      <p className='text-center'>
        This page doesn't exist
      </p>
    </Container>
  );
};

export default NotFoundPage;