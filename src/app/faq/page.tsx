import React from 'react';
import { Metadata } from 'next';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
    title: 'FAQ - Your Company Name',
    description: 'Frequently Asked Questions about our products and services.',
};

const FAQPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>FAQ</h1>
        </div>
    );
};

export default FAQPage;
