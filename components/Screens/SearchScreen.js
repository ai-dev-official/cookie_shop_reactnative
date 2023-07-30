import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import BouncingBallAnimation from './LandingScreen';

const SearchScreen = () => {
  
  const [isLoading, setIsLoading] = useState(true); 
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  }, []); 

  if (isLoading) {
    return (
      <BouncingBallAnimation />
    );
  }

  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})