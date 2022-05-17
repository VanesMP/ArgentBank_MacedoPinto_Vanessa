import { createSlice } from "@reduxjs/toolkit";

//etat initial du state
const initialState = {
        id: null,
        lastName:null,
        firstName:null,
        email:null,
        password:null,
        token: null,
  };

//les idfferentes actions
const signUpSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    AddEmail: (state, action) => {
      state.email = action.payload
    },
    AddPassword: (state, action) => {
      state.password = action.payload
    },
    AddToken: (state, action) => {
      state.token = action.payload
    },
    AddId: (state, action) => {
      state.id = action.payload
    },
    AddLastName: (state, action) => {
      state.lastName = action.payload
    },
    AddFirstName: (state, action) => {
      state.firstName = action.payload
    }}
})


export const reducer = signUpSlice.reducer;

export const {
  AddEmail,
  AddPassword,
  AddToken,
  AddId,
  AddLastName,
  AddFirstName
} = signUpSlice.actions

// Action creators are generated for each case reducer function
//export const {  } = signUpSlice.actions

export default signUpSlice.reducer