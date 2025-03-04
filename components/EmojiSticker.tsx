import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
}

export default function EmojiSticker( { imageSize, stickerSource } : Props ) {
  return (
    <View style={{top: -350}}>
      <Animated.Image soruce={stickerSource} resizeModa={'contain'} style={{ width: imageSize, height: imageSize }} />
    </View>
  );
};


