const CH_USER_ID = 'USERINFO/CH_USER_IDD';
const CH_USER_LOGIN = 'USERINFO/CH_USER_LOGIN';

export const setUserlId = (userId: string) => ({
  type: CH_USER_ID,
  data: userId,
});
export const setSpecialVodTitle = (login: boolean) => ({
  type: CH_USER_LOGIN,
  data: login,
});

const initialState = {
  userId: null,
  login: false,
};

const userInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CH_USER_ID:
      return {
        ...state,
        userId: action.data,
      };
    case CH_USER_LOGIN:
      return {
        ...state,
        login: action.data,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
