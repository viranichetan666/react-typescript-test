import { RootState } from '../reducers'

export const getAuthUser = (state: RootState) => state.auth.user

export const getUsers = (state: RootState) => state.auth.allUsers