import { apiSlice } from "./apiSlice"

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todo-list',
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: todo => ({
        url: '/todo-list',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['Todos']
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `/todo-list/${todo._id}`,
        method: 'PUT',
        body: todo
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todo-list/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Todos']
    })
  })
})


export const { useGetTodosQuery, useUpdateTodoMutation, useAddTodoMutation, useDeleteTodoMutation } = todoApiSlice