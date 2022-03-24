import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
// import { userSlice } from './store/reducers/UserSlice';
import { useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <h1>Loading....</h1>}
      {error && <h1>Error: {error}</h1>}
      {users.length ? JSON.stringify(users, null, 2) : null}
    </div>
  );
}

export default App;
