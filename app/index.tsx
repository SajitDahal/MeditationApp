import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter} from 'expo-router'

import beachImage from '@/assets/meditation-images/beach.webp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomBtn from '@/components/CustomBtn';
import AppGradient from '@/components/AppGradient';


const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
      source={beachImage}
      resizeMode='cover'
      className= "flex-1"
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          
            <SafeAreaView className='flex-1 px-1 justify-between'>
          <View>
            <Text className='text-center text-white font-bold text-4xl '>Simple Meditation</Text>
            <Text className='text-center text-white text-regular text-1.5xl mt-3'>Simplifying Meditation For Everyone</Text>
          </View>
          <View>
            <CustomBtn onPress={()=> router.push('./nature-meditation') }
            title='Get Started' />
          </View>
          
          <StatusBar style='light' />
            </SafeAreaView>
        </AppGradient>
        
        
      </ImageBackground>
    </View>
  )
}

export default App