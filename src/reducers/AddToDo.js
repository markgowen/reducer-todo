export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
        state.map(item => {
            if (item.id === action.payload) {
                console.log("item found");
                return {
                    ...item,
                    completed: !item.completed
                };
            } else {
                return item;
            }
        });
    case 'ADD_TODO':
        console.log(state)
      const newTask = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newTask]

    
    default:
      return state;
  }
};
