import { createStore } from "redux";

/*  Khởi tạo giá trị ban đầu cho state*/
const initStore = {
  speed: 0,
  lastSpeed: 1,
};

/* Tạo reducer */
const reducer = (state = initStore, action) => {
  switch (action.type) {
    case "CHANGE_SPEED":
      return {
        ...state,
        speed: action.payload,
      };
    case "TURN_OFF":
      return {
        ...state,
        lastSpeed: state.speed,
        speed: 0,
      };
    case "TURN_ON":
      return {
        ...state,
        speed: state.lastSpeed,
      };
    default:
      return state;
  }
};

// Tạo store và truyền reducer vào
const store = createStore(reducer);

// store sẽ có method là store.getState();
// store có store.dispatch({type:'',payload}); vd store.dispatch({type:'CHANGE_SPEED',payload:2})

export default store;
