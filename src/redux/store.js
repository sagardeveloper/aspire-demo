import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from './balanceSlice'

export default configureStore({
  reducer: {app : balanceReducer},
})