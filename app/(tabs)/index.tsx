import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from 'expo-image';
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

let PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setImage] = useState<typeof PlaceholderImage>(PlaceholderImage);
  const [showOptions, setShowOptions] = useState<boolean>(false);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if(!result.canceled) {
      console.log(result);
      console.log(`-------------------------------`);
      console.log('current selectedImage: ', selectedImage);
      // PlaceholderImage = result;
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any selectedImage.");
    }
  }


  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage}/>
      </View>
      <View style={styles.footherContainer}>
        <Button label={"Choose an Image"} icon={"image"} onPress={pickImageAsync}/>
        <Button label={"Use this Image"}   />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 28
  },
  button: {
    fontSize: 20, 
    textDecorationLine: 'underline',
    color: "#fff"
  },
  imageContainer: {
    flex: 1,
  },
  footherContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    marginBottom: 'auto'

  }
  // image: {
  //   width: 320, 
  //   height: 440,
  //   borderRadius: 18,
  // }
);


