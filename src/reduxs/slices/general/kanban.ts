import { createSlice } from '@reduxjs/toolkit';
import omit from 'lodash/omit';
// utils
// import axios from '../../utils/axios';

import axios from '../../../utils/axios';

//
// import { dispatch } from '../store';

// ----------------------------------------------------------------------

function objFromArray(array: any, key = 'id') {
  return array.reduce((accumulator: any, current: any) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

const initialState = {
  isLoading: false,
  error: null,
  board: {
    cards: {},
    columns: {},
    columnOrder: [],
  },
};

const slice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET BOARD
    getBoardSuccess(state, action) {
      state.isLoading = false;
      const board = action.payload;
      const cards = objFromArray(board.cards);
      const columns = objFromArray(board.columns);
      const { columnOrder } = board;
      state.board = {
        cards,
        columns,
        columnOrder,
      };
    },

    // CREATE NEW COLUMN
    createColumnSuccess(state: any, action: any) {
      const newColumn: any = action.payload;
      state.isLoading = false;
      state.board.columns = {
        ...state.board.columns,
        [newColumn.id]: newColumn,
      };
      state.board.columnOrder.push(newColumn.id);
    },

    persistCard(state, action) {
      const columns = action.payload;
      state.board.columns = columns;
    },

    persistColumn(state, action) {
      state.board.columnOrder = action.payload;
    },

    addTask(state: any, action: any) {
      const { card, columnId } = action.payload;

      state.board.cards[card.id] = card;
      state.board.columns[columnId].cardIds.push(card.id);
    },

    deleteTask(state: any, action: any) {
      const { cardId, columnId } = action.payload;

      state.board.columns[columnId].cardIds = state.board.columns[columnId].cardIds.filter((id: any) => id !== cardId);
      state.board.cards = omit(state.board.cards, [cardId]);
    },

    // UPDATE COLUMN
    updateColumnSuccess(state: any, action: any) {
      const column = action.payload;

      state.isLoading = false;
      state.board.columns[column.id] = column;
    },

    // DELETE COLUMN
    deleteColumnSuccess(state: any, action: any) {
      const { columnId } = action.payload;
      const deletedColumn = state.board.columns[columnId];

      state.isLoading = false;
      state.board.columns = omit(state.board.columns, [columnId]);
      state.board.cards = omit(state.board.cards, [...deletedColumn.cardIds]);
      state.board.columnOrder = state.board.columnOrder.filter((c: any) => c !== columnId);
    },
  },
});

// Reducer
export default slice.reducer;

export const { actions } = slice;

// ----------------------------------------------------------------------

export function getBoard() {
  return async () => {
    // dispatch(slice.actions.startLoading());
    // try {
    //   const response = await axios.get('/api/kanban/board');
    //   dispatch(slice.actions.getBoardSuccess(response.data.board));
    // } catch (error) {
    //   dispatch(slice.actions.hasError(error));
    // }
  };
}

// ----------------------------------------------------------------------

export function createColumn(newColumn: any) {
  return async () => {
    // dispatch(slice.actions.startLoading());
    // try {
    //   const response = await axios.post('/api/kanban/columns/new', newColumn);
    //   dispatch(slice.actions.createColumnSuccess(response.data.column));
    // } catch (error) {
    //   dispatch(slice.actions.hasError(error));
    // }
  };
}

// ----------------------------------------------------------------------

export function updateColumn(columnId: any, updateColumn: any) {
  return async () => {
    // dispatch(slice.actions.startLoading());
    // try {
    //   const response = await axios.post('/api/kanban/columns/update', {
    //     columnId,
    //     updateColumn,
    //   });
    //   dispatch(slice.actions.updateColumnSuccess(response.data.column));
    // } catch (error) {
    //   dispatch(slice.actions.hasError(error));
    // }
  };
}

// ----------------------------------------------------------------------

export function deleteColumn(columnId: any) {
  return async () => {
    // dispatch(slice.actions.startLoading());
    // try {
    //   await axios.post('/api/kanban/columns/delete', { columnId });
    //   dispatch(slice.actions.deleteColumnSuccess({ columnId }));
    // } catch (error) {
    //   dispatch(slice.actions.hasError(error));
    // }
  };
}

// ----------------------------------------------------------------------

export function persistColumn(newColumnOrder: any) {
  return () => {
    // dispatch(slice.actions.persistColumn(newColumnOrder));
  };
}

// ----------------------------------------------------------------------

export function persistCard(columns: any) {
  return () => {
    // dispatch(slice.actions.persistCard(columns));
  };
}

// ----------------------------------------------------------------------

export function addTask({ card, columnId }: any) {
  return () => {
    // dispatch(slice.actions.addTask({ card, columnId }));
  };
}

// ----------------------------------------------------------------------

export function deleteTask({ cardId, columnId }: any) {
  return (dispatch: any) => {
    dispatch(slice.actions.deleteTask({ cardId, columnId }));
  };
}
