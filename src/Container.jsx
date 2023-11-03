import React from 'react';

function Container({ bookData, showContainer }) {

    return (
        <div className="my-6 mx-[4rem] text-start">
            {showContainer ? (
                <div className="grid grid-cols-8 border border-slate-200 rounded-md shadow-md pb-6">
                    <div className="col-span-8 w-full text-left">
                        <div className="grid grid-cols-10 m-4">
                            <div className="col-span-10 md:col-span-4 flex justify-center">
                                <img src={bookData.img} alt="画像" />
                            </div>
                            <div className="col-span-10 md:col-span-6 p-4 ml-6">
                                <h1 className="text-2xl font-semibold my-2 text-center">{bookData.title}</h1>
                                <p className="overflow-auto break-words md:my-2 text-gray-600">
                                    {bookData.statement}
                                </p>
                            </div>
                        </div>
                    </div>

                    <table className="text-left col-span-8 mx-6 mt-4">
                        <tbody className='mb-4'>
                            <tr className="border-y border-slate-300 bg-gray-200">
                                <th scope="col" className="px-6 py-3">
                                    ISBN
                                </th>
                                <td className="text-gray-600 px-6 py-3">{bookData.isbn}</td>
                            </tr>
                            <tr className="border-y border-slate-300">
                                <th scope="col" className="px-6 py-3">
                                    Page
                                </th>
                                <td className="text-gray-600 px-6 py-3">{bookData.page}</td>
                            </tr>
                            <tr className="border-y border-slate-300 bg-gray-200">
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <td className="text-gray-600 px-6 py-3">{bookData.author}</td>
                            </tr>
                            <tr className="border-y border-slate-300 ">
                                <th scope="col" className="px-6 py-3">
                                    Published Date
                                </th>
                                <td className="text-gray-600 px-6 py-3">{bookData.date}</td>
                            </tr>
                            <tr className="border-y overflow-auto h-40 bg-gray-200">
                                <th scope="col" className="px-6 py-3">
                                    Categories
                                </th>
                                <td className="text-gray-600 px-6 py-3">{bookData.categories}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='text-center text-gray-600 p-4 md:p-10'>
                    <p>このアプリケーションでは、ISBN（国際規格コード）を使って本を検索できます。
                    <br /> 検索条件に合致する本が見つかると、その本に関する情報が画面に動的に表示されます。</p>
                </div>
            )}
        </div>
    );
}

export default Container;
