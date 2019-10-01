const initialState = JSON.parse(localStorage.getItem("redux-store"))
  ? JSON.parse(localStorage.getItem("redux-store"))
  : [];

export default initialState;
