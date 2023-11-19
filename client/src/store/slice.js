import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  name: "",
  domain: "",
  page: 1,
  totalPages: 50,
  gender: "",
  available: "",
  clickable:false,
  group:[]
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    nextPage: (state, action) => {
      state.page = state.page + 1;
    },
    prevPage: (state, action) => {
      state.page = state.page - 1;
    },
    searchUser: (state, action) => {
      state.name = action.payload;
    },
    filterDomain: (state, action) => {
      state.domain = action.payload;
    },
    filterGender: (state, action) => {
      state.gender = action.payload;
    },
    filterAvailable:(state,action)=>{
      state.available = action.payload
    },
    setChange:(state,action)=>{
      state.clickable = !state.clickable;
    },
    addToGroup:(state,action)=>{
      state.group = [...state.group,action.payload]
    },
    removeFromGroup:(state,action)=>{
      state.group =  state.group.filter((item) => item !== action.payload)
    }
  },
});

export const {
  setUser,
  nextPage,
  prevPage,
  searchUser,
  filterDomain,
  filterGender,
  filterAvailable,
  setChange,
  addToGroup,
  removeFromGroup
} = user.actions;

export default user.reducer;
