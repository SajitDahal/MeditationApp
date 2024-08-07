import React from "react";
import { SafeAreaView } from "react-native";

const Content = ({ children }: any) => {
  return <SafeAreaView className="flex-1 px-3 py-9">{children}</SafeAreaView>;
};

export default Content;
