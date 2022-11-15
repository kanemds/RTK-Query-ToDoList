import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      const { userId, accessToken } = action.payload
      state.user = userId
      state.token = accessToken
    }
  }
})

export const { currentUser } = authSlice.actions
export default authSlice.reducer