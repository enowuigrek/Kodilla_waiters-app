import { API_URL } from '../config';

// selectors
export const getAllTables = ({ tables }) =>
  tables;

export const getTablesById = (
  { tables },
  tableId
) =>
  tables.find((table) => table.id === tableId);

//actions names
const createActionName = (actionName) =>
  `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName(
  'UPDATE_TABLE'
);
const EDIT_TABLE =
  createActionName('EDIT_TABLE');

//action creators
export const updateTable = (payload) => ({
  type: UPDATE_TABLE,
  payload,
});
export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/`)
      .then((res) => res.json())
      .then((tables) =>
        dispatch(updateTable(tables))
      );
  };
};


//reducer
const tablesReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
