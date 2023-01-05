const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initalState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }

    default:
      return state;
  }
};

export default categoryReducer;
