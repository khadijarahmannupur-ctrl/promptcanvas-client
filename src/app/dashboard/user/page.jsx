import Profile from '@/components/dashboard/Profile';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const UserDashboardHomePage = async() => {
    const session = await auth.api.getSession({
            headers: await headers() // you need to pass the headers object.
        })
    const user = session?.user;    
    return (
        <div>
            <Profile user={user}></Profile>
        </div>
    );
};

export default UserDashboardHomePage;