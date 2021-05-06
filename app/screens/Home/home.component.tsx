import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, FlatList, Pressable, SafeAreaView } from "react-native";
import { Searchbar, Colors, IconButton } from "react-native-paper";

import * as commonActions from "../../store/actions/commonAction";

import FVModal from "../../components/FVModal";
import styles from "./styles";

const Home = ({ locationList, fvIDList }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(locationList);
    setMasterDataSource(locationList);
  }, [locationList]);

  const searchFilterFunction = (text: string) => {
    if (text && filteredDataSource.length === 0) {
      setModalVisible(true);
    }
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);

      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const showData = (item) => {
    setSelectedItem(item);

    setModalVisible(true);
  };

  const addItemFV = (id: Number) => {
    dispatch(commonActions.addItemId(id));
  };
  const ItemView = ({ item }) => {
    const isItemFav = fvIDList.includes(item.id);
    return (
      <View style={styles.item}>
        <Pressable onPress={() => showData(item)}>
          <Text style={styles.title}>{item.name}</Text>

          <Text style={styles.subTitle}>temperature: {item?.main?.temp}</Text>
        </Pressable>
        <IconButton
          color={isItemFav ? Colors.red900 : Colors.white}
          icon="heart"
          size={30}
          onPress={() => addItemFV(item?.id)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          style={{
            width: "80%",
            borderRadius: 25,
            alignSelf: "center",
            marginVertical: 10,
          }}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
        <FVModal
          modalVisible={modalVisible}
          filteredDataSource={filteredDataSource}
          selectedItem={selectedItem}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
