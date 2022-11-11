import { apiSlice } from "./apiSlice"

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todo-list'
    }),
    addTodo: builder.mutation({
      query: todo => ({
        url: '/todo-list',
        method: 'POST',
        body: todo
      })
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `/todo-list/${todo._id}`,
        method: 'PUT',
        body: todo
      })
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todo-list/${id}`,
        method: 'DELETE',
        body: id
      })
    })
  })
})


export const { useGetTodosQuery, useUpdateTodoMutation, useAddTodoMutation, useDeleteTodoMutation } = todoApiSlice