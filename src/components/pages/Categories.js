import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (

    <div className="categories">
      <button className="status-btn" type="button" onClick={handleClick}>Check Status</button>
      <h2>{status}</h2>
    </div>
  );
};

export default Categories;
