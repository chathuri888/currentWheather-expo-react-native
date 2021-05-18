import React, { useState, useEffect } from "react";
import { View, Image, TextInput, Alert } from "react-native";
import { Button, Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Constants from "expo-constants";

import * as loginActions from "app/store/actions/loginActions";
import styles from "./styles";
import * as Location from "expo-location";
import Images from "../../config/images";

const ErrorMsg1 = "Permission to access location was denied";

const ErrorMsg2 =
  "this will not work on Sketch in an emulator.it will get default location wheather.Try it on your device!";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, onChangeEmail] = React.useState("");
  const [pw, onChangePW] = React.useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(ErrorMsg1);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const onLogin = () => {
    if (!Constants.isDevice) {
      setErrorMsg(ErrorMsg2);
      Alert.alert("Warning", ErrorMsg2, [
        {
          text: "OK",
          onPress: loginDefaultLocation,
        },
      ]);
    } else {
      const latitude = location?.coords?.latitude;
      const longitude = location?.coords?.longitude;
      dispatch(loginActions.requestLogin("test", "1234", latitude, longitude));
    }
  };

  const loginDefaultLocation = () => {
    dispatch(loginActions.requestLogin("test", "1234", 6.927079, 79.861244));
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={Images.icons.logo}
      />
      <TextInput
        placeholder={"email"}
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder={"password"}
        style={styles.input}
        onChangeText={onChangePW}
        value={pw}
        secureTextEntry={true}
      />

      <Button
        style={styles.button}
        mode="outlined"
        onPress={onLogin}
        color={Colors.white}
      >
        Login
      </Button>
    </View>
  );
};

export default Login;
