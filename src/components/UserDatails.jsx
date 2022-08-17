import React, { Component } from "react";
import Loading from "./Loading";
import { BsPeopleFill, BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Repos from "./Repos";
import "../styles/index.css";

class UserDatails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const { repos } = this.props;
    const {
      name,
      avatar_url,
      login,
      bio,
      blog,
      location,
      followers,
      following,
      html_url,
      twitter_username,
    } = this.props.user;
    if (this.props.loading) return <Loading />;
    return (
      <div className='container mt-4 rounded-sm flex gap-4 h-[700px]'>
        <div className='flex items-start p-2 rounded-sm bg-[#172a40]'>
          <div className='flex flex-col gap-3 items-stretch h-full'>
            <a href={avatar_url} target='_blank'>
              <img
                src={avatar_url}
                className='w-72 rounded-sm hover:opacity-90 transition-all border border-[#243a54]'
              />
            </a>
            <div className='flex flex-col flex-1'>
              <div className='flex flex-col items-stretch'>
                <p className='text-4xl'>{name}</p>
                <p className='text-2xl opacity-60 -translate-y-1'>{login}</p>
              </div>
              <p className='opacity-40'>{location}</p>
              {bio !== null ? (
                <p className='bg-[#0d1a29] border border-[#243a54] max-w-[18rem] px-2 py-1 bg-opacity-50 rounded-sm mt-2'>
                  {bio}
                </p>
              ) : (
                ""
              )}
              <div className='flex items-center gap-3 px-1 my-2'>
                <BsPeopleFill />
                <div className='flex gap-1'>
                  <p className='flex gap-1 items-center'>
                    {followers}
                    <span className='text-sm opacity-70'>followers</span>
                  </p>
                  •
                  <p className='flex gap-1 items-center'>
                    {following}
                    <span className='text-sm opacity-70'>following</span>
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-5'>
                {blog !== null ? (
                  <a
                    target='_blank'
                    className='flex items-center gap-2 px-2 rounded-sm bg-[#0d1a29]'
                    href={blog}
                  >
                    <AiFillHome /> Blog
                  </a>
                ) : (
                  ""
                )}
                <a
                  target='_blank'
                  className='flex items-center gap-2 px-2 rounded-sm bg-[#0d1a29]'
                  href={html_url}
                >
                  <BsGithub />
                  Github
                </a>
                {twitter_username !== null ? (
                  <a
                    target='_blank'
                    className='flex items-center gap-2 px-2 rounded-sm bg-[#0d1a29]'
                    href={`https://twitter.com/${twitter_username}`}
                  >
                    <BsTwitter />
                    Twitter
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='repostContainer grid h-full gap-4 flex-1 p-4 grid-cols-3 content-start overflow-auto bg-[#172a40] rounded-sm'>
          <Repos repos={repos} />
        </div>
      </div>
    );
  }
}

export default UserDatails;
