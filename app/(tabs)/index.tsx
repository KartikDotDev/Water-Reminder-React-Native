import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from 'expo-image';
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from '@/components/IconButton'
import CircleButton from '@/components/CircleButton'
import EmojiPicker from '@/components/EmojiPicker';


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
      // set option to true;
      setShowOptions(true);
      // PlaceholderImage = result;
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any selectedImage.");
    }
  }

  const onReset = () => {
    setShowOptions(false);
  }

  const onAddSticker = () => {
    // to be implemented later;
  }

  const onSaveImage = async() => {
    // to be implemented later;
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage}/>
      </View>
      { showOptions ? ( 
        <View style ={styles.optionsContainer} >
          <View style = {styles.optionsRow} >
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImage} />
          </View>
        </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button label={"Choose an Image"} icon={"image"} onPress={pickImageAsync}/>
        <Button label={"Use this Image"} onPress={()=> {setShowOptions(true)}}   />
      </View>)
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirecton: 'row',
  },
});


