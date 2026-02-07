
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreditScoreHistoryItem } from '../../types/models';

interface CreditState {
  history: CreditScoreHistoryItem[];
}

const initialState: CreditState = {
  history: [
    {
      label: 'Jan',
      score: 660,
      changeFromPrevious: +10,
      status: 'Good',
      updatedAt: '2024-01-05',
      type: 'increment'
    },
    {
      label: 'Feb',
      score: 690,
      changeFromPrevious: +30,
      status: 'Good',
      updatedAt: '2024-02-05',
      type: 'increment'
    },
    {
      label: 'Mar',
      score: 675,
      changeFromPrevious: -15,
      status: 'Fair',
      updatedAt: '2024-03-05',
      type: 'decrement'
    },
    {
      label: 'Apr',
      score: 710,
      changeFromPrevious: +35,
      status: 'Very Good',
      updatedAt: '2024-04-05',
      type: 'increment'
    },
    {
      label: 'May',
      score: 745,
      changeFromPrevious: +35,
      status: 'Very Good',
      updatedAt: '2024-05-05',
      type: 'increment'
    },
    {
      label: 'Jun',
      score: 735,
      changeFromPrevious: -10,
      status: 'Good',
      updatedAt: '2024-06-05',
      type: 'decrement'
    },
    {
      label: 'Jul',
      score: 730,
      changeFromPrevious: -5,
      status: 'Good',
      updatedAt: '2024-07-05',
      type: 'decrement'
    },
  ],
};

const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    setCreditHistory: (state, action: PayloadAction<CreditScoreHistoryItem[]>) => {
      state.history = action.payload;
    },
  },
});

export const { setCreditHistory } = creditSlice.actions;
export default creditSlice.reducer;
