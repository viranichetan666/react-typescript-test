import { AppDispatch } from '../store'
import { IAuthType, IUser } from './../../interface/auth'
import { setAuthData, addUser, deleteUser, updateUser } from 'redux/reducers/auth'

export const login:any = (
  values: IAuthType
) => async (dispatch : AppDispatch ) =>{
  // API call for login
  const response = values
  if(response){
    dispatch(setAuthData(response))
  }
}

export const register:any = (
  values: IAuthType
) => async (dispatch : AppDispatch ) =>{
  // Api call for register
  const response = values
  if(response){
    dispatch(setAuthData(response))
  }
}


export const addUserAction:any = (
  values: IUser
) => async (dispatch : AppDispatch ) =>{
  // Api call for Add user
  const response = values
  if(response){
    dispatch(addUser(response))
  }
}


export const updateUserAction:any = (
  values: IUser
) => async (dispatch : AppDispatch ) =>{
  // Api call for update user
  const response = values
  if(response){
    dispatch(updateUser(response))
  }
}


export const deleteUserAction:any = (
  values: IUser
) => async (dispatch : AppDispatch ) =>{
  // Api call for delete user
  const response = values
  if(response){
    dispatch(deleteUser(response))
  }
}

