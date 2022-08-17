import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }
  onInput(e) {
    this.setState({
      keyword: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.keyword === "") {
      this.props.setAlert("Bu alan Boş brakılamaz!", "error");
    } else {
      this.props.setAlert("Veriler alınıdı.", "success");
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: "" });
    }
  }
  render() {
    return (
      <div className='container flex rounded-sm mt-4 p-2 bg-[#172a40] bg-opacity-80 gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
        <form
          onSubmit={this.onSubmit}
          className='flex flex-1 rounded-sm gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row'
        >
          <input
            onInput={this.onInput}
            className='text-[#172a40] flex-1 outline-none px-2 text-xl font-medium p-1 placeholder-[#9fadbf] rounded-sm'
            type='text'
            value={this.state.keyword}
            placeholder='Enter username'
            name='inputText'
          />
          <button
            type='submit'
            className='bg-[#172a40] hover:bg-opacity-70 px-4 text-white font-medium rounded-sm'
          >
            Search
          </button>
        </form>
        {this.props.showClearBtn.length > 0 ? (
          <button
            onClick={this.props.clearUsers}
            className='bg-[#172a40] hover:bg-opacity-70 px-4 text-white font-medium rounded-sm'
          >
            Reset result
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Search;
