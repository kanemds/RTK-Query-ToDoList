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
      const { id, accessToken } = action.payload
      state.user = id
      state.token = accessToken
    }
  }
})

export const { currentUser } = authSlice.actions
export default authSlice.reducer