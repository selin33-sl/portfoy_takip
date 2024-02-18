import {createSlice} from '@reduxjs/toolkit';

export const assetDataSlice = createSlice({
  name: 'assetData',
  initialState: {
    data: undefined,
  },
  reducers: {
    assetData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {assetData} = assetDataSlice.actions;
export default assetDataSlice.reducer;
