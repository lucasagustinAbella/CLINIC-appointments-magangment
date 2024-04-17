import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userAppointments: [],
  login: false,
  status: "active",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload.user;
      state.userAppointments = action.payload.userAppointments;
      state.login = action.payload.login;
    },
    logout: (state) => {
      state.user = {};
      state.userAppointments = [];
      state.login = false;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    addAppointment: (state, action) => {
      state.userAppointments.push(action.payload);
    },
  },
});

export const {
  setUserData,
  logout,
  setUserAppointments,
  addAppointment,
  removeAppointment,
} = userSlice.actions;

export default userSlice.reducer;
