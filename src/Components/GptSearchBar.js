import React from 'react'
import lang from '../Utils/languageConstant'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey=useSelector((store)=>store.config.lang);

  return (
    <div className='pt-[7%] flex justify-center' > 
      <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>
        <input type="text" className='p-2 m-2 col-span-9 rounded-lg border-2 ' placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className='py-2  bg-red-700 col-span-3 m-2 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
