import {createSlice} from '@reduxjs/toolkit';

export const notificationPermissionSlice = createSlice({
  name: 'notificationPermission',
  initialState: {
    data: undefined,
  },
  reducers: {
    setNotificationPermission: (state, action) => {
      const {data} = action.payload;
      state.data = data;
    },
  },
});

export const {setNotificationPermission} = notificationPermissionSlice.actions;
export default notificationPermissionSlice.reducer;
