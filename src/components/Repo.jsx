import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
const Repo = ({ repo }) => {
  const {
    name,
    html_url,
    stargazers_count,
    watchers_count,
    forks,
    description,
  } = repo;
  return (
    <div className='bg-[#0d1a29] flex flex-col gap-3 pb-2 border border-[#243a54] py-1 p-2'>
      <div className='flex-1 flex flex-col gap-1'>
        <a
          href={html_url}
          target='_blank'
          className='hover:text-blue-400 pl-1 text-lg font-medium'
        >
          {name}
        </a>
        {description !== null ? (
          <div className='text-sm opacity-60 flex-1 bg-[#0a131d] rounded-sm px-2 py-1'>
            {description}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className='flex justify-between'>
        <p className='flex items-center gap-1 opacity-80 bg-[#0a131d] px-2 rounded-sm'>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </p>
        <p className='flex items-center gap-1 opacity-80 bg-[#0a131d] px-2 rounded-sm'>
          <AiOutlineEye />
          <span>{watchers_count}</span>
        </p>
        <p className='flex items-center gap-1 opacity-80 bg-[#0a131d] px-2 rounded-sm'>
          <BiGitRepoForked />
          <span>{forks}</span>
        </p>
      </div>
    </div>
  );
};

export default Repo;
