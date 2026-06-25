import { getAllPayments } from '@/lib/api/subscriptions';

const AllPaymentsPage = async () => {

    const allPayments = await getAllPayments();

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };

    return (

        <div className="mx-10 my-10">

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-[#2F3B26]">
                    All Payments
                </h1>

                <p className="mt-2 text-gray-500">
                    View all premium subscription payments.
                </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E6D8BB] bg-white">

                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead className="border-b border-[#F1E8D6] bg-[#FFFDF8]">

                            <tr>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                    User ID
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                    Email
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                    Plan
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                    Payment Date
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {allPayments.map((payment) => (

                                <tr
                                    key={payment._id}
                                    className="border-b border-[#F6F0E3] transition hover:bg-[#FFFCF7]"
                                >

                                    <td className="px-6 py-5">

                                        <p className="font-medium text-[#2F3B26]">
                                            {payment.userId}
                                        </p>

                                    </td>

                                    <td className="px-6 py-5">

                                        <p className="text-sm text-gray-600">
                                            {payment.email}
                                        </p>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="rounded-full bg-[#F4E8C1] px-3 py-1 text-xs font-semibold capitalize text-[#8B6A18]">
                                            {payment.plan}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5">

                                        <p className="text-sm text-gray-500">
                                            {formatDate(payment.createdAt)}
                                        </p>

                                    </td>

                                </tr>

                            ))}

                            {allPayments.length === 0 && (

                                <tr>

                                    <td
                                        colSpan={4}
                                        className="py-16 text-center text-gray-500"
                                    >
                                        No payment history found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

};

export default AllPaymentsPage;