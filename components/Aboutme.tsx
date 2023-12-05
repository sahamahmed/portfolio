/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Title from './Title';
import { FcAbout } from "react-icons/fc";

const Aboutme = () => {
  return (
    <div className='wrapper'>
      <Title text="About Me" icon={<FcAbout />
} />
      <div className='sm:text-lg tracking-wide flex flex-col gap-6'>
        <p>
        HI there,I am a dedicated third-semester university student diving into the world of programming languages, currently honing skills in Next.js and Tailwind CSS. Aspiring to excel and contribute significantly to the tech industry.
        </p>
       
        <p>
        I am a passionate individual with diverse interests, constantly seeking knowledge and embracing challenges. Committed to personal growth, innovation, and contributing positively to the world.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;


