const CH_USER_INFO = 'USERINFO/CH_USER_INFO';
// const CH_USER_LOGIN = 'USERINFO/CH_USER_LOGIN';

export const setUserInfo = (uid: string, isLogin: boolean) => ({
  type: CH_USER_INFO,
  data: {
    uid,
    isLogin,
  },
});
// export const setIsLogin = (login: boolean) => ({
//   type: CH_USER_LOGIN,
//   data: login,
// });

const initialState = {
  userId: '',
  isLogin: false,
};

const userInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CH_USER_INFO:
      return {
        ...state,
        userId: action.data.uid,
        isLogin: action.data.isLogin,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
