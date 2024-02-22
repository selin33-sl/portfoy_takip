import {createSlice} from '@reduxjs/toolkit';

export const informSelectedHeaderSlice = createSlice({
  name: 'informSelectedHeader',
  initialState: {
    data: undefined,
  },
  reducers: {
    setInformSelectedHeader: (state, action) => {
      const {data} = action.payload;
      state.data = data;
    },
  },
});

export const {setInformSelectedHeader} = informSelectedHeaderSlice.actions;
export default informSelectedHeaderSlice.reducer;
