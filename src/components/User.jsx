import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    const { avatar_url, html_url, login, repos_url, url } = this.props.user;
    return (
      <div className='inline-flex group border-2 border-opacity-80 border-blue-500 flex-col gap-2 h-40 rounded-sm cursor-pointer text-white items-start relative overflow-hidden'>
        <img
          src={avatar_url}
          className='absolute w-full h-full object-cover transition-all opacity-50 group-hover:opacity-80'
        />
        <div className='z-10 p-1'>
          <h1 className='text-2xl text-blue-600 font-medium bg-blue-900 bg-opacity-20 p-1 px-2 rounded-sm'>
            {login}
          </h1>

          <Link
            className='absolute font-medium  bottom-1 right-1 bg-blue-500  hover:bg-opacity-80 p-1 px-2 text-sm rounded-sm'
            to={`user/${login}`}
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }
}

export default User;
