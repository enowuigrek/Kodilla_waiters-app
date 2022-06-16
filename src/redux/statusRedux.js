//selectors
export const getAllStatuses = ({ statuses }) =>
  statuses;

// action creators
const statusesReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default statusesReducer;
