import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 3000,
    showModal:false,
    setLimit:false,
    hidePin:true
  },
  reducers: {
    changeAmount: (state, action) => {
      state.value = action.payload
    },
    changeModal: (state, action) => {
        state.showModal = action.payload
      },
    viewLimit: (state, action) => {
        state.setLimit = action.payload
      },
    setPin: (state, action) => {
        state.hidePin = action.payload
      },
  }
})

export const { changeAmount,changeModal,viewLimit,setPin } = balanceSlice.actions
export const BalanceCount = state =>state.app

export default balanceSlice.reducer