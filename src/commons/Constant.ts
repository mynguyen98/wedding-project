export enum Events {
    TOAST = 'TOAST',
    LOGOUT = 'LOGOUT',
    SWITCH_KEYBOARD = 'SWITCH_KEYBOARD',
  }
  
  export enum ToastTypes {
    ERR = 0, //  red background
    MSG = 1, // dark blue background
    SUCCESS = 2, // green background
  }
  
  export enum PopupTypes {
    OTP = 1,
    POST_NEWS = 2,
  }
  
  export enum ErrorCodes {
    SUCCESS = 0,
    IMAGE_LIMIT_SIZE = 1,
  }
  
  export enum HistoryCodes {
    SUCCESS = 1,
    FAILS = 2,
  }
  export enum Convert {
    SUCCESS = 1,
    FAILS = 2,
  }