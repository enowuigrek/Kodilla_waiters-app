import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTablesById } from '../../../redux/tablesRedux';
// import EditTable from '../../features/EditTable/EditTable';

const EditTablePage = () => {
  const { id } = useParams();
  const tableData = useSelector((state) =>
    getTablesById(state, parseInt(id))
  );

  if (!tableData)
    return (
      <div className='text-center my-5'>
        <Spinner animation="border" />
      </div>
    );

  return (
    <>
      <h1 className='text-center'>
        Table {tableData.id}
      </h1>
      {/* <EditTable /> */}
    </>
  );
};

export default EditTablePage;
