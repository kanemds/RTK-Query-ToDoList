import { apiSlice } from "./apiSlice"

export const userSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/user',
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: user => ({
        url: '/user/register',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: user => ({
        url: `/user/update/${user._id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/user/delete/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const { useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation, useCreateUserMutation } = userSlice