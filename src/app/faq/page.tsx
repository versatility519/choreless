import React from 'react';

import Navbar from '@/components/Navbar';

 

const FAQPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col gap-4 items-center justify-center h-screen'>
                <p className='text-2xl text-red-500 font-bold'>Frequently Asked Questions</p>
                <p className='text-3xl font-bold'>Coming Soon</p>
            </div>
        </div>
    );
};

export default FAQPage;
