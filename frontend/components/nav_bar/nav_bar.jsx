import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default ({ currentUser, logout }) => {


const display = currentUser ? (
    <div>
      <ul className='nav-bar-ul'>
        <li className='nav-bar-li'>
          <Link to='/movies'>Home</Link>
        </li>
        {/* <li className='nav-bar-li'>TV Shows</li>
        <li className='nav-bar-li'>Movies</li> */}
        <li className='nav-bar-li'>
          <Link to={`/watch_list/${currentUser.id}`}>My List</Link>
        </li>
      </ul>
      
    </div>
  ) : (
    <div>
      
    </div>
  );
  const logoutBtn = currentUser ? (
    <ul className='search-header'>
      <li>
        <div className='search-bar'>
          <div className='search-icon'>
            <FaSearch/>
          </div>
          <div className='search-input'>
            <input type="text"/>
          </div>
        </div>
      </li>
      <li>
        <div className='logout-btn'>
            <button onClick={() => {
              logout();
              }}>Logout</button>
        </div>
      </li>
    </ul>
  ) : (
    <div></div>
  )
  return (
    <header className="nav-bar">
      <div className='nav-options'>
        <div className="logo">
          <Link to='/movies'>NETCLIPS</Link>
        </div>
        <div>
          {display}
        </div>
      </div>
      <div >
        {logoutBtn}
      </div>
    </header>
  )
}
