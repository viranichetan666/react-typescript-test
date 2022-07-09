import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IAuthType, IUser } from "../../interface/auth";
import userMock from 'mocks/user.json';

const initialState: IAuthState = {
  loading: false,
  user: null,
  allUsers: userMock
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IAuthType>) {
      return {
        ...state,
        user: action.payload,
      };
    },
    addUser(state, action: PayloadAction<IUser>) {
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    },
    updateUser(state, action: PayloadAction<IUser>) {
      const updatedUsers = state.allUsers.map((user) => {
        if(user.email === action.payload.email) {
          return {
            ...user,
            ...action.payload
          }
        }
        return user
      })
      return {
        ...state,
        allUsers: updatedUsers
      };
    },
    deleteUser(state, action: PayloadAction<IUser>) {
      const updatedUsers = state.allUsers.filter(user => user.email !== action.payload.email)
      return {
        ...state,
        allUsers: updatedUsers
      };
    },
    logoutUser(state) {
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const { setAuthData, addUser, updateUser, deleteUser, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;
