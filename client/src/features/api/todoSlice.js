import { apiSlice } from "./apiSlice"

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todo-list'
    })
  })
})

export const { useGetTodosQuery } = todoApiSlice