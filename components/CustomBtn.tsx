import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


interface CustomBtnProps {
    onPress: ()=> void;
    title:string;
    textStyles?:string;
    containerStyles?: string;
}

const CustomBtn = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
}:CustomBtnProps) => {
  return (
    <TouchableOpacity
    
    activeOpacity={0.7}
    className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    onPress={onPress}
    
    >

        <Text className={`font-semi bold text-lg ${textStyles}`} 
        >
            {title}
        </Text>
    </TouchableOpacity>
)}

export default CustomBtn