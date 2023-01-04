import { createSlice } from '@reduxjs/toolkit'

import { IProfile } from './profile'

const initialState: IProfile = {
  uid: crypto.randomUUID(),
  name: 'Default Profile'
}

export const profileStore = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    
  }
})

export const {
  
} = profileStore.actions

export default profileStore.reducer