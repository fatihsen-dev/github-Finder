import React from "react";

function About() {
  return (
    <div className='container p-4 text-lg rounded-sm bg-opacity-80 bg-[#172a40] mt-4'>
      Bu proje{" "}
      <a
        className='font-medium text-blue-400'
        href='https://www.youtube.com/user/sadikturan41'
      >
        Sadık turan
      </a>{" "}
      Hocamızın React-JS ders'inde bulunan Tailwind.css ile yapılmış 'Github
      Finder' projesidir.
    </div>
  );
}

export default About;
