import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../../Data";

const userSlice = createSlice({
  name:'users',
  initialState:{
    users:UserDetails,
  },
  reducers:{
    addUsers(state,action){
      state.users.push(action.payload);
    },
  },
})

export const {addUsers} = userSlice.actions;
export default userSlice;
