import React from 'react'

const Hero = ({customClass}) => {
  return (

    <div className={`relative bg-[rgb(39,84,115)] ${customClass} flex items-center justify-center`}>
            <div className='bg-[rgb(39,84,115)] p-5 w-full max-w-[600px] h-[Auto] absolute top-20 left-20 flex flex-col justify-between'>
                <div className="mb-10">
                    <h1 className="text-white text-6xl">
                        Give The Best Start <span style={{ color: 'rgb(255,182,86)' }}>Your Career</span>
                    </h1>      
                </div>
                <div className="mb-10 flex flex-col">
                    <h4 className="text-white text-3xl mb-2">WHAT IS THINK<span style={{ color: 'rgb(255,182,86)' }}>WHT ?</span></h4>
                    <p className="text-white text-justify">
                    Thinkwht is an innovative and user-friendly educational course websiter that aims to empower learners of alll ages and backgrounds with a diverse range of knowladge and skills. The plateform is designed to provide a seameless and enriching learning experience through its wide array of course
                    </p>
                </div>
                <div className="flex  mb-0">
                    <button className="bg-[rgb(255,182,86)] text-white mr-5 px-6 py-2 rounded">Training</button>
                    <button className="bg-white text-[rgb(255,182,86)] ml-5 px-6 py-2 rounded">Internship</button>
                </div>
            </div>
    </div>
    
    );
}

export default Hero