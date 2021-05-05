import { createStore } from "redux";
/* ==========-----01-----==========*/
/*  Khởi tạo giá trị ban đầu cho state*/
const initStore = {
  speed: 0,
  lastSpeed: 1,
};
const TURN_OFF = "TURN_OFF";
const TURN_ON = "TURN_ON";
const CHANGE_SPEED = "CHANGE_SPEED";

/* Tạo reducer */
const reducer = (state = initStore, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    case TURN_OFF:
      return {
        ...state,
        lastSpeed: state.speed,
        speed: 0,
      };
    case TURN_ON:
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

/* ==========-----02- action creator -----==========*/
/* 
    + mục đích là dùng fucntion để tạo ra 1 action
    + tránh việc viết code sai dẫn tới bug : ví dụ gõ nhiều lần hard-code string của action.type ví dụ: 'TURN_OFF'
    + chuyển hết các Type từ hard-code string sang dạng const
*/
const turnOff = () => {
  return {
    type: TURN_OFF,
  };
};
const turnOn = () => {
  return {
    type: TURN_ON,
  };
};
const changeSpeed = (speed = 0) => {
  return {
    type: CHANGE_SPEED,
    payload: speed,
  };
};

store.dispatch(turnOn());
store.dispatch(changeSpeed(3));
store.dispatch(turnOff());

export default store;
