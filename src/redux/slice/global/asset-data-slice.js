import {createSlice} from '@reduxjs/toolkit';

export const assetDataSlice = createSlice({
  name: 'assetData',
  initialState: {
    data: undefined,
    type: undefined,
  },
  reducers: {
    setAssetData: (state, action) => {
      const {data, type} = action.payload;
      state.data = data;
      state.type = type;
    },
  },
});

export const {setAssetData} = assetDataSlice.actions;
export default assetDataSlice.reducer;
