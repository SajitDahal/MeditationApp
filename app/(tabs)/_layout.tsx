import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditation"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color="color"
            />
          ),
        }} // screen ma labels create garxa with icons aswell
      />

      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color="black" />
          ),
        }} // screen ma labels create garxa with icons aswell
      />
    </Tabs>
  );
};

export default TabsLayout;
