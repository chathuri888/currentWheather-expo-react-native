import { StyleSheet } from "react-native";

import AppStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppStyles.color.COLOR_PRIMARY,
  },
  login: {
    padding: 8,
  },
  input: {
    width: AppStyles.dimensions.width * 0.8,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: AppStyles.color.COLOR_WHITE,
    backgroundColor: AppStyles.color.COLOR_WHITE,
    textAlign: "center",
  },
  button: {
    width: AppStyles.dimensions.width * 0.8,
    height: 50,
    marginTop: 50,
    borderRadius: 25,
    backgroundColor: "#324a7f",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: AppStyles.dimensions.width,
  },
});

export default styles;
