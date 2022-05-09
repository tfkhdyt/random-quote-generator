import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TagState = {
  activeTag: string;
};

const initialState: TagState = {
  activeTag: '',
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setActiveTag: (state, action: PayloadAction<string>) => {
      state.activeTag = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTag } = tagsSlice.actions;

export default tagsSlice.reducer;
