import Toast from 'react-native-toast-message';

const showMessage = (
  message: string,
  type: string = 'success | error | info',
  position: any = 'top | bottom',
) => {
  Toast.show({
    text1: message,
    type,
    position,
    visibilityTime: 3000,
    autoHide: true,
  });
};

export default showMessage;
