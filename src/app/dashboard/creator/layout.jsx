import { requiredRole } from '@/lib/core/session';
import React from 'react';

const CreatorLayout =async ({children}) => {
    const requiredUserRole = await requiredRole('creator')
    return (
        <div>
            {children}
        </div>
    );
};

export default CreatorLayout;