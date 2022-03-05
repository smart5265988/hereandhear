const CH_LOGIN_POP = 'POPUP/CH_LOGIN_POP';
const CH_PLAYER_POP = 'POPUP/CH_PLAYER_POP';
const CH_NETWORK_ERROR_POP = 'POPUP/CH_NETWORK_ERROR_POP';

export const setLoginPop = (loginPop: boolean) => ({
  type: CH_LOGIN_POP,
  data: loginPop,
});
export const setPlayerPop = (playPop: boolean, isPlay: boolean) => ({
  type: CH_PLAYER_POP,
  data: { playPop, isPlay },
});
export const setNetworkErrorPop = (netWorkPop: boolean) => ({
  type: CH_NETWORK_ERROR_POP,
  data: netWorkPop,
});

const initialState = {
  loginPop: false,
  playPop: false,
  isPlay: false,
  netWorkPop: false,
};

const popupInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CH_LOGIN_POP:
      return {
        ...state,
        loginPop: action.data,
      };
    case CH_PLAYER_POP:
      return {
        ...state,
        playPop: action.data.playPop,
        isPlay: action.data.isPlay,
      };
    case CH_NETWORK_ERROR_POP:
      return {
        ...state,
        netWorkPop: action.data,
      };
    default:
      return state;
  }
};

export default popupInfoReducer;
