import React from 'react';

import Navbar from '@/components/Navbar';
 
const SubscriptionPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col gap-4 items-center justify-center h-screen'>
                <p className='text-2xl text-red-500 font-bold'>Subscription</p>
                <p className='text-3xl font-bold'>Coming Soon</p>
            </div>
        </div>
    );
};

export default SubscriptionPage;
