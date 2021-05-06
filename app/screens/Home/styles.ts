import { StyleSheet } from "react-native";

import AppStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.color.COLOR_PRIMARY,
    padding: 10,
    paddingVertical: 20,
  },
  input: {
    width: AppStyles.dimensions.width * 0.7,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    color: AppStyles.color.COLOR_WHITE,
  },
  subTitle: {
    fontSize: 14,
    color: AppStyles.color.COLOR_WHITE,
  },
});

export default styles;
