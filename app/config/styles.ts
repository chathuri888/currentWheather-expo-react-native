/*
 * Provides universal color configs used in the app.
 */

import { Dimensions } from "react-native";

const AppStyles = {
  color: {
    COLOR_PRIMARY: "#00ace7",
    COLOR_SECONDARY: "#111",
    COLOR_WHITE: "#FFFFFF",
    COLOR_BLACK: "#000000",
    COLOR_GREY: "grey",
    COLOR_GREEN: "green",
    COLOR_PLACEHOLDER: "#111111",
    COLOR_GREY_WHITE: "#87a2a0",
    COLOR_DARK_SEPERATOR: "#d4d4d4",
    COLOR_BLACK_TRANSP: "rgba(0, 0, 0, 0.7)",
    COLOR_GREY_TRANSP: "rgba(67, 85, 85, 0.7)",
  },
  dimensions: {
    width: Dimensions.get("window").width,
  },
};
export default AppStyles;
