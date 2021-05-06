import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import * as commonActions from "../store/actions/commonAction";
import AppStyles from "../config/styles";
import { IconButton, Colors } from "react-native-paper";

const FVModal: React.FC = ({
  modalVisible,
  filteredDataSource,
  selectedItem,
  setModalVisible,
}) => {
  const dispatch = useDispatch();

  const addItemFV = (id: Number) => {
    dispatch(commonActions.addItemId(id));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalWrapper}>
        <View style={styles.centeredView}>
          <IconButton
            color={Colors.red900}
            icon="close"
            size={30}
            onPress={() => setModalVisible(false)}
            style={styles.close}
          />
          <View style={styles.modalView}>
            {filteredDataSource.length === 0 ? (
              <>
                <Text style={styles.header}>NOT FOUND</Text>
              </>
            ) : (
              <>
                <Text style={styles.header}>{selectedItem?.name}</Text>

                <View>
                  <Text style={styles.temp}>
                    temperature: {selectedItem?.main?.temp}
                  </Text>
                </View>
                <Pressable onPress={() => addItemFV(selectedItem.id)}>
                  <Text style={{ color: "black" }}>ADD TO FAVARIT</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginVertical: 20,
    marginHorizontal: 10,
    width: AppStyles.dimensions.width,
  },
  modalView: {
    width: AppStyles.dimensions.width * 0.95,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    backgroundColor: AppStyles.color.COLOR_GREY_WHITE,
    alignSelf: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: "red",
    fontWeight: "bold",
    alignSelf: "flex-end",
    margin: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: AppStyles.color.COLOR_BLACK_TRANSP,
  },
  close: {
    backgroundColor: AppStyles.color.COLOR_GREY_WHITE,
    alignSelf: "flex-end",
    height: 30,
    width: 30,
    borderRadius: 50,
    marginHorizontal: 15,
    justifyContent: "center",
  },
  header: {
    color: AppStyles.color.COLOR_BLACK,
    fontSize: 16,
  },
  temp: {
    color: AppStyles.color.COLOR_BLACK,
    marginVertical: 10,
  },
});

export default FVModal;
