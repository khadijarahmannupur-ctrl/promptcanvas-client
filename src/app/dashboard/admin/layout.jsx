import { requiredRole } from '@/lib/core/session';
import React from 'react';

const UserLayout = async({children}) => {
    const requiredUserRole = await requiredRole('admin');
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;