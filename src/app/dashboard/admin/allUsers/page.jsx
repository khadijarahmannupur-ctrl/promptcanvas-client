import { getAllUsers } from '@/lib/api/users';
import React from 'react';
import AdminUsersTable from './AdminUsersTable';

const AdminAllUsersPage = async() => {
    const data = await getAllUsers();
    const users = data.users || [];
    return (
        <div className='mx-10 my-10'>
            <AdminUsersTable users={users}></AdminUsersTable>
        </div>
    );
};

export default AdminAllUsersPage;