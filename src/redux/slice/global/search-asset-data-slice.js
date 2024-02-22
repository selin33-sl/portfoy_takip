import {createSlice} from '@reduxjs/toolkit';

export const searchAssetDataSlice = createSlice({
  name: 'searchAssetData',
  initialState: {
    data: undefined,
    type: undefined,
  },
  reducers: {
    setSearchAssetData: (state, action) => {
      const {data, type} = action.payload;
      state.data = data;
      state.type = type;
    },
  },
});

export const {setSearchAssetData} = searchAssetDataSlice.actions;
export default searchAssetDataSlice.reducer;
