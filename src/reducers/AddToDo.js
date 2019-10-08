export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const addTask = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        item: [...state.item, addTask]
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};
