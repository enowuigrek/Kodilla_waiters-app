import { Button, ListGroup, Spinner, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../../redux/tablesRedux';

const Tables = () => {
  const tables = useSelector(getAllTables);

  if (tables.length === 0)
    return (
      <div className='text-center'>
        <Spinner animation="border" />
      </div>
    );

  return (
    <ListGroup variant='flush'>
    {tables.map((table) => (
      <ListGroup.Item
        key={table.id}
        className='py-4 d-flex justify-content-between'
      >
      <div className='d-flex align-items-center'>
        <h2>
          Table {table.id}
        </h2>
        <span className='vr mx-4'></span>
        <b className='mx-2'>Status: </b>
        <span className='text-muted'>
          {table.status}
        </span>
      </div>
      <div className='justify-content-end'>
        <Button
          className='mx-4'
          as={Link}
          to={`/table/${table.id}`}
          variant='primary'
        >
          Show more
        </Button>
        <Button
          as={Link}
          to={`/table/edit/${table.id}`}
          variant='primary'
        >
          Edit Table
        </Button>
      </div>
      </ListGroup.Item>
    ))}
  </ListGroup>
  );
};

export default Tables;