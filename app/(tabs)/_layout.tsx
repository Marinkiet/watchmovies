import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

interface TabIconProps {
  focused: boolean;
  title: string;
  icon: any; 
}

const TabIcon = ({ focused, title, icon }: TabIconProps) => {
  if(focused){  
  return (
    <ImageBackground
      source={images.highlight}
      className='flex flex-row w-full flex-1 min-w-[100px] min-h-16 
                mt-4 justify-center items-center rounded-full overflow-hidden'>
         <Image source={icon} tintColor='#151312' className='size-5'/>
            <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
      </ImageBackground>
  )
}
  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image
        source={icon}
        className='size-5'
        tintColor={"#A8B5DB"}
      />
    </View>
  )
}
const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        },
        tabBarStyle:{ //bottom purple tab bar
          backgroundColor:'#0f0D23',
          borderRadius:50,
          marginHorizontal:20,
          marginBottom:30,
          height:50,
          position:'absolute',
          overflow:'hidden',
          borderColor:'0f0d23',
          borderWidth:1,
          
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home' ,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused = {focused}
            icon={icons.home}
            title="Home"/>
          ) }} //end of tabBarIcon
      /> 
      <Tabs.Screen
        name="search"
        options={{ 
          title: 'Search' ,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused = {focused}
            icon={icons.search}
            title="Search"/>
          ) }} //end of tabBarIcon}}
      />
      <Tabs.Screen          
        name="saved"
        options={{ 
          title: 'Saved' ,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused = {focused}
            icon={icons.save}
            title="Saved"/>
          ) }} //end of tabBarIcon}} }} 
        />
        <Tabs.Screen 
        name='profile'
        options={{ 
          title: 'Profile' ,
          headerShown: false ,
          tabBarIcon:({focused})=>(
            <TabIcon 
            focused = {focused}
            icon={icons.person}
            title="Profile"/>
          ) }} //end of tabBarIcon}}}}
        />
                     
    </Tabs>             
  )
}

export default _layout