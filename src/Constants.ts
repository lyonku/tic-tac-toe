export const location: { [key: number]: string } = {
  0: "top-left",
  1: "top-center",
  2: "top-right",
  3: "center-left ",
  4: "center-center ",
  5: "center-right ",
  6: "bottom-left",
  7: "bottom-center",
  8: "bottom-right",
};

export const positions: { [key: string]: string } = {
  "0,1,2": "horizontal-top",
  "3,4,5": "horizontal-center",
  "6,7,8": "horizontal-bottom",
  "0,3,6": "vertical-left",
  "1,4,7": "vertical-center",
  "2,5,8": "vertical-right",
  "0,4,8": "diagonal-toRight",
  "2,4,6": "diagonal-toLeft",
};
