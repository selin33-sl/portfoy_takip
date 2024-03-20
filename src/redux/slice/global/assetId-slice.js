import {createSlice} from '@reduxjs/toolkit';

export const assetIdSlice = createSlice({
  name: 'assetId',
  initialState: {
    data: undefined,
  },

  reducers: {
    // resetAssetData: state => {
    //   state.data = undefined;
    //   state.type = undefined;
    // },
    setAssetIdData: (state, action) => {
      const {data} = action.payload;
      state.data = data;
    },
  },
});

export const {setAssetIdData} = assetIdSlice.actions;
export default assetIdSlice.reducer;
