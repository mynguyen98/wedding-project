export enum Events {
  TOAST = "TOAST",
  LOGOUT = "LOGOUT",
  SWITCH_KEYBOARD = "SWITCH_KEYBOARD",
}

export enum ToastTypes {
  ERR = 0, //  red background
  MSG = 1, // dark blue background
  SUCCESS = 2, // green background
}

export enum CheckParams {
  AFFTER = 1,
  INVITE_TEMPLATES = 2,
  TITLE_TIME_TEMPLATES = 3,
  WARNNING_TEMPLATES = 4,
  TITLE_SAVE_PEN_TEMPLATES = 5
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
  W_400 = 400,
  W_800 = 800
}

export const Alias = {
  letterPage: "/letterPage",
  congrats: "/chuc-phuc-chi-tiet",
  login: "/login",
  register: "/dang-ky",
  pwdRecovery: "/khoi-phuc-mat-khau",
  mypage: "/trang-cua-toi",
  services: "/dich-vu",
  createPage: "/tao-thiep-cuoi"
};

export enum BUTTON_STYLES {
  PINK = "PINK",
  WHITE = "WHITE",
  ORRANGE = "ORRANGE",
  ORANGE = "ORANGE",
  LIGHT_BLUE = "LIGHT_BLUE",
  BORDER_LIGHT_BLUE = "BORDER_LIGHT_BLUE",
  BORDER_PINK = "BORDER_PINK",
  DARKMODE = "DARKMODE",
  BLUE = "BLUE",
  GRAY = "GRAY",
}

export enum BACKGROUND_STYLES {
  PINK = "PINK",
  WHITE = "WHITE",
  YELLOWS = "YELLOWS",
  GREEN = "GREEN",
}
