import axios from 'axios';

import { apiUrl } from './url';

export const getAnimals = () => async dispatch => {
  const response = await axios.get(`${apiUrl}/animal`);
  dispatch({ type: 'GET_ANIMALS', payload: response.data });
};

export const addAnimal = animal => async dispatch => {
  const response = await axios.post(`${apiUrl}/animal`, animal, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  dispatch({ type: 'ADD_ANIMAL', payload: response.data });
};

export const updateAnimal = animal => async dispatch => {
  const response = await axios.put(`${`${apiUrl}/animal`}/${animal._id}`, animal, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  dispatch({ type: 'UPDATE_ANIMAL', payload: response.data });
};

export const delAnimal = id => async dispatch => {
  await axios.delete(`${`${apiUrl}/animal`}/${id}`);
  dispatch({ type: 'DELETE_ANIMAL', payload: id });
};
