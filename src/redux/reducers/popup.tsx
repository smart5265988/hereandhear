const CH_LOGIN_POP = 'POPUP/CH_LOGIN_POP';
const CH_PLAYER_POP = 'POPUP/CH_PLAYER_POP';
const CH_NETWORK_ERROR_POP = 'POPUP/CH_NETWORK_ERROR_POP';
const CH_LOGIN_ERROR_POP = 'POPUP/CH_LOGIN_ERROR_POP';
const CH_SIGN_UP_ERROR_POP = 'POPUP/CH_SIGN_UP_ERROR_POP';
const CH_PLAYER_CONTENT = 'POPUP/CH_PLAYER_CONTENT';
const CH_ADD_POP = 'POPUP/CH_ADD_POP';

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
export const setLoginErrorPop = (LoginError: boolean) => ({
  type: CH_LOGIN_ERROR_POP,
  data: LoginError,
});
export const setSignUpErrorPop = (SignUpError: boolean) => ({
  type: CH_SIGN_UP_ERROR_POP,
  data: SignUpError,
});
export const setAddPop = (AddPop: boolean, text: string) => ({
  type: CH_ADD_POP,
  data: { AddPop, text },
});

export const setContent = (
  id: string,
  audio: string,
  img: string,
  title: string,
  category: string,
) => ({
  type: CH_PLAYER_CONTENT,
  data: {
    id,
    audio,
    img,
    title,
    category,
  },
});
const initialState = {
  loginPop: false,
  playPop: false,
  isPlay: false,
  netWorkPop: false,
  LoginError: false,
  SignUpError: false,
  content: {
    id: '',
    audio: '',
    img: '',
    title: '',
    category: '',
  },
  AddPop: {
    pop: false,
    text: '',
  },
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
    case CH_LOGIN_ERROR_POP:
      return {
        ...state,
        LoginError: action.data,
      };
    case CH_SIGN_UP_ERROR_POP:
      return {
        ...state,
        SignUpError: action.data,
      };
    case CH_PLAYER_CONTENT:
      return {
        ...state,
        content: {
          id: action.data.id,
          audio: action.data.audio,
          img: action.data.img,
          title: action.data.title,
          category: action.data.category,
        },
      };
    case CH_ADD_POP:
      return {
        ...state,
        AddPop: {
          pop: action.data.AddPop,
          text: action.data.text,
        },
      };
    default:
      return state;
  }
};

export default popupInfoReducer;
