import { apiSlice } from "./apiSlice"

export const userSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/user'
    })
  })
})

export const { useGetUsersQuery } = userSlice