import {createSlice} from '@reduxjs/toolkit';

export const assetIdSlice = createSlice({
  name: 'assetId',
  initialState: {
    data: undefined,
    type: undefined,
    name: undefined,
  },

  reducers: {
    // resetAssetData: state => {
    //   state.data = undefined;
    //   state.type = undefined;
    // },
    setAssetIdData: (state, action) => {
      const {data, type, name} = action.payload;
      state.data = data;
      state.type = type;
      state.name = name;
    },
  },
});

export const {setAssetIdData} = assetIdSlice.actions;
export default assetIdSlice.reducer;
