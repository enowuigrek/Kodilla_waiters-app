import { Container } from 'react-bootstrap';
import Tables from '../../features/Tables/Tables';

const HomePage = () => {
  return (
    <Container>
      <h2 className='text-center m-5'>
        All tables
      </h2>
      <Tables />
    </Container>
  );
};

export default HomePage;