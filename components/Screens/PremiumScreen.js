import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import BouncingBallAnimation from './LandingScreen';

const PremiumScreen = () => {
  
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
      <Text>PremiumScreen</Text>
    </View>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({});
