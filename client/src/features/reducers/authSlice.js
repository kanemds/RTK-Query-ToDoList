import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      const { id, user, accessToken } = action.payload
      state.id = id
      state.user = user
      state.token = accessToken
    },
    logOut: (state) => {
      return initialState
      // state.id = null
      // state.user = null
      // state.token = null
    }
  }
})

export const { currentUser, logOut } = authSlice.actions
export default authSlice.reducer

export const selectedUser = state => state.auth
