const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initalState = [];

export const checkStatus = (status) => ({
  type: CHECK_STATUS,
  payload: {
    status,
  },
});

const categoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;
