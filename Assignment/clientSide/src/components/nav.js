import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(true);
  const [fetching, setFetching] = useState(false);

  const url = 'http://localhost:8080/api/tasks';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((responce) => setData(responce));
  }, [fetching]);

  //home Tag
  const Home = () => {
    return (
      <>
        <h1 style={{ marginLeft: '17px' }}> welcome to Home </h1>
      </>
    );
  };
  // this will return complete list of data
  const Task = () => {
    return (
      <>
        <ul>
          {data.map((data, index) => {
            return (
              <li key={index} style={{ wordSpacing: '20px' }}>
                {`${data.text}  status ${data.completed}`}{' '}
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  // main jsx starts from here
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className='navLeft'>
          <NavLink
            onClick={() => {
              setShowList(false);
            }}
          >
            Home
          </NavLink>
          <br />
          <NavLink
            onClick={() => {
              setFetching(!fetching);
              setShowList(true);
            }}
          >
            Task
          </NavLink>
        </div>
        <div className='InnerBody'>{showList ? <Task /> : <Home />}</div>
      </div>
    </>
  );
}

export default Nav;
