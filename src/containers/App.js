import React, { useState, Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import './App.css';

const App = () => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(1);
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);
  const onSearchChange = (event) => dispatch(setSearchField(event.target.value));
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  useEffect(() => {
    requestRobots(dispatch);
  }, []);
  return (
    <div className='tc'>
      <Header count={count} />
      <SearchBox searchChange={(event) => onSearchChange(event)}/>
      <Scroll>
        { isPending ? <h1>Loading</h1> :
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        }
      </Scroll>
    </div>
  );
}

export default App;
