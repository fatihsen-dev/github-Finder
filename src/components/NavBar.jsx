import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import React icon
import { BsGithub, BsFillExclamationCircleFill } from "react-icons/bs";
// import PropType
import PropTypes from "prop-types";

class NavBar extends Component {
  render() {
    return (
      <div className='container justify-between w-full h-14 rounded-sm mt-4 bg-[#172a40] bg-opacity-80 flex px-4 items-center'>
        <NavLink
          to='/'
          className='text-2xl text-white font-medium flex gap-2 items-center'
        >
          <p className='text-3xl'>
            <BsGithub />
          </p>
          {this.props.title}
        </NavLink>
        <NavLink to='/about' className='text-2xl'>
          <BsFillExclamationCircleFill />
        </NavLink>
      </div>
    );
  }
}
// default value
NavBar.defaultProps = {
  title: "Default Text",
};
// type control
NavBar.propTypes = {
  // title: PropTypes.string.isRequired (zorunlu kılma)
  title: PropTypes.string,
};
export default NavBar;
