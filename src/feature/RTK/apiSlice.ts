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