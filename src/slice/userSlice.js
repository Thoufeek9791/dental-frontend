import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser(state, action) {
      console.log('state', state);
      return action.payload.user;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
