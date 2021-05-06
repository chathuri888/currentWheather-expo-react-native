import React, { useState, useEffect } from "react";
import { View, Image, TextInput } from "react-native";
import { Button, Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import * as loginActions from "app/store/actions/loginActions";
import styles from "./styles";
import { ILoginState } from "app/models/reducers/login";
import * as Location from "expo-location";
import Images from "../../config/images";

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, onChangeEmail] = React.useState("");
  const [pw, onChangePW] = React.useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const dispatch = useDispatch();

  const onLogin = () => {
    const latitude = location?.coords?.latitude;
    const longitude = location?.coords?.longitude;
    dispatch(loginActions.requestLogin("test", "1234", latitude, longitude));
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
