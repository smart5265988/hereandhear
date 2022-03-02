const CH_LOGIN_POP = 'POPUP/CH_LOGIN_POP';
const CH_PLAYER_POP = 'POPUP/CH_PLAYER_POP';
const CH_NETWORK_ERROR_POP = 'POPUP/CH_NETWORK_ERROR_POP';

export const setLoginPop = (userId: string) => ({
  type: CH_LOGIN_POP,
  data: userId,
});
export const setPlayerPop = (login: boolean) => ({
  type: CH_PLAYER_POP,
  data: login,
});
export const setNetworkErrorPop = (login: boolean) => ({
  type: CH_NETWORK_ERROR_POP,
  data: login,
});
const initialState = {
  userId: null,
  login: false,
};

const popupInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CH_LOGIN_POP:
      return {
        ...state,
        userId: action.data,
      };
    case CH_PLAYER_POP:
      return {
        ...state,
        login: action.data,
      };
    case CH_NETWORK_ERROR_POP:
      return {
        ...state,
        login: action.data,
      };
    default:
      return state;
  }
};

export default popupInfoReducer;
