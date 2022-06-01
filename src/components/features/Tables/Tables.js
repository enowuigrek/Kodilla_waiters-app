import { Button, Card, Spinner, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
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
    <div className="row">
      {tables.map((table) => (
        <Card key={table.id} className='col-lg-4 col-md-12'>
          <Card.Body>
            <Card.Title as="h5">
              Table {table.id}
            </Card.Title>
            <Card.Text>Status: {table.status}</Card.Text>
            <Card.Text>People: {table.peopleAmount}/{table.maxPeopleAmount}</Card.Text>
            <Card.Text>Bill: {table.bill}</Card.Text>
            <Button
              // as={Link}
              // to={`/table/${table.id}`}
              variant='primary'
            >
              Update
            </Button>
          </Card.Body>
         </Card>
      ))}
    </div>
  );
};

export default Tables;