import CreatorStats from '@/components/dashboard/CreatorStats';
import PromptGrowthChart from '@/components/dashboard/PromptGrowthChart';
import TotalCopiesChart from '@/components/dashboard/TotalCopiesChart';
import React from 'react';

const CreatorHomePage = () => {
    return (
        <div>
            <CreatorStats></CreatorStats>
            <TotalCopiesChart></TotalCopiesChart>
            <PromptGrowthChart></PromptGrowthChart>
        </div>
    );
};

export default CreatorHomePage;