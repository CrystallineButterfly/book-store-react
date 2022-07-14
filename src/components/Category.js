import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { checkStatus } from '../Redux/Categories/Categories';

export class Category extends React.PureComponent {
  render() {
    const status = useSelector((state) => state.categoriesReducer, shallowEqual);
    const dispatch = useDispatch();
    const showStatus = () => {
      dispatch(checkStatus());
    };
    return (
      <div>
        <h1>{status}</h1>
        <button onClick={() => { showStatus(); }} type="button">Check Status</button>
      </div>
    );
  }
}

export default Category;
