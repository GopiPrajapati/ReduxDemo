import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userData = createApi({
    reducerPath: 'userDetails',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://673b228a339a4ce4451ac8b2.mockapi.io/gopi/api' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/AddNameNumber'
        })
    }),
    refetchOnFocus: true,
})

export const { useGetUsersQuery } = userData


// apiSlice.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// /**
//  * Factory function to create API slices dynamically
//  * @param {string} baseUrl - The base URL for the API
//  * @param {string} reducerPath - The unique name of the reducer (for the slice)
//  */
// export const createApiSlice = (baseUrl, reducerPath) => {
//     return createApi({
//         reducerPath: reducerPath, // Dynamic reducer path
//         baseQuery: fetchBaseQuery({ baseUrl }), // Dynamic base URL
//         endpoints: (builder) => ({
//             getData: builder.query({
//                 query: (endpoint) => endpoint, // Query dynamic endpoint
//             }),
//         }),
//         refetchOnFocus: true,
//     });
// };
