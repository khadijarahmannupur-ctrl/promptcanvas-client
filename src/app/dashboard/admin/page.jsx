import Profile from '@/components/dashboard/Profile';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const AdminDashboardHomePage = async() => {
    const user = await getUserSession()
    return (
        <div>
            <Profile user={user}></Profile>
        </div>
    );
};

export default AdminDashboardHomePage;