const initialState = [];
const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ANIMALS':
      return action.payload;
    case 'ADD_ANIMAL':
      return [...state, action.payload];
    case 'UPDATE_ANIMAL':
      const updatedAnimals = state.map(animal => {
        if (animal._id === action.payload._id) {
          return { ...action.payload };
        } else {
          return animal;
        }
      });
      return updatedAnimals;
    case 'DELETE_ANIMAL':
      const animals = state.filter(animal => animal._id !== action.payload);
      return animals;
    default:
      return state;
  }
};

export default animalsReducer;
