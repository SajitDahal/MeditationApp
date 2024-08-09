import { View, Text, ImageBackground } from "react-native";
import React from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const Meditation = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES}
        resizeMode="cover"
        className="flex-1"
      ></ImageBackground>
      <Text>Meditation</Text>
    </View>
  );
};

export default Meditation;
