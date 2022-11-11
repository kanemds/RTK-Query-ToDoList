import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Todos'],
  endpoints: builder => ({})
})

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   endpoints: (builder) => ({
//     getTodos: builder.query({
//       query: () => '/todo-list'
//     })
//   })
// })

// export const { useGetTodosQuery } = apiSlice