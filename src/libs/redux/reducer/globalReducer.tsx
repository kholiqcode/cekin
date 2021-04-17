import {AnyAction} from 'redux';

interface InititalState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  isLogged: boolean;
}

const inititalStateGlobal: InititalState = {
  isLoading: false,
  isError: false,
  message: '',
  isLogged: false,
};

export const globalReducer = (
  state = inititalStateGlobal,
  action: AnyAction,
) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError,
        message: action.value.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'SET_LOGGED':
      return {
        ...state,
        isLogged: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
