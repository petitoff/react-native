import axios from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '../../utils/index';

export interface UserModel {
  fileName: string;
  lastName: string;
  subscription: string;
  token: string;
}

export enum LoginActionEnum {
  ON_LOGIN = 'ON_LOGIN',
  ON_ERROR = 'ON_ERROR',
}

export interface LoginAction {
  readonly type: LoginActionEnum.ON_LOGIN;
  payload: UserModel;
}

export interface ErrorAction {
  readonly type: LoginActionEnum.ON_ERROR;
  payload: any;
}

export type UserAction = LoginAction | ErrorAction;

export const onLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post<UserModel>(`${BASE_URL}mock-login`, {
        email,
        password,
      });

      if (!response) {
        dispatch({
          type: LoginActionEnum.ON_ERROR,
          payload: 'Login issue with API',
        });
      } else {
        dispatch({ type: LoginActionEnum.ON_LOGIN, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: LoginActionEnum.ON_ERROR, payload: error });
    }
  };
};
