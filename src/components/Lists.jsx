import React from 'react';

const Lists = ({list}) => {

    const {logo, categoryNAme, availability} = list;
    return (
        <div className='bg-slate-50 p-10 rounded-lg flex flex-col  justify-center items-start gap-4'>
            <div>
                <img className="w-16 h-16 basis-1/4" src={logo} alt="" />
                <h2 className='text-xl'>{categoryNAme}</h2>
                <p className='text-base text-[#A3A3A3] '>{availability}</p>
            </div>
        </div>
    );
};

export default Lists;