import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';import DotIcon from 'react-native-vector-icons/Octicons';

const CircleModule = () => {
  const theme = useTheme();
  const {colors} = useTheme();


  const largerCircleRadius = 160;  
  const numSmallerCircles = 1;


  const angleStep = Math.PI / 5/ 0.5 / numSmallerCircles;
  
  const centerX = largerCircleRadius;
  const centerY = largerCircleRadius;

  const [rotationAngle, setRotationAngle] = useState(0);

  
  const smallerCircles = Array.from({length: numSmallerCircles}).map(
    (_, index) => {
      const angle = (index * angleStep + rotationAngle) % (Math.PI / 0.2);
      
      const smallerCircleRadius = largerCircleRadius; 
      const x = centerX + smallerCircleRadius * Math.cos(angle) - 45; 
      const y = centerY - smallerCircleRadius * Math.sin(angle) - 160; 

      return {x, y, label: (index + 1) * 32}; 
    },
  );

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      borderRadius: 1000,
      position: 'absolute',
      borderColor: 'black',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      color: colors.dark,
      fontWeight: 'bold',
    },
    innerCircle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      // marginTop: -100,
      padding: 20,
      width: 120,
      height: 120,
      marginLeft: 80,
    },
    circleText1: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Outfit-Medium',
      marginTop: -90,
    },

    innerCircleText1: {
      color: colors.light,
      fontFamily: 'Outfit-Medium',
      fontSize: 60,
      marginBottom:-15,
    },
    circleText1b:{
      marginBottom:-15,
    },

    innerCircleText2: {
      color: colors.light,
      textTransform: 'uppercase',
      fontFamily: 'Outfit-Medium',
      fontSize: 20,
    },
    circleText2:{
      marginLeft: -15,
    },
    innerCircleText3: {
      color: colors.light,
      fontFamily: 'Outfit-Medium',
      fontSize: 20,
    },
    dotIcon:{
      color:colors.primary,
      marginRight: 10,
    },
    innerCircleText4:{
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 22,
    },
    innerCircleText5:{
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 22,
      color: colors.primary,
    },
    circle2Text2:{
      
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  const Circle = ({color, size, x, y, label}) => {
    return (
       <TouchableOpacity
        style={[
          styles.circle,
          {backgroundColor: color, width: size, height: size, left: x, top: y},
        ]}>
        <Text style={styles.label}>{label}</Text>
     </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            width: largerCircleRadius * 2,
            height: largerCircleRadius * 2,
            backgroundColor: colors.iconcontainer,
          },
        ]}
      />

      {smallerCircles.map((circle, index) => (
        <Circle
          key={index}
          color={colors.light}
          // color={index === 1 ? 'black' : 'white'}
          size={36}
          x={circle.x}
          y={circle.y}
          label={circle.label}></Circle>
      ))}

      <View style={styles.innerCircle}>
        <View style={styles.circleText1}>
          <View style={styles.circleText1a}>
            <Text style={styles.innerCircleText1}>20</Text>
          </View>
          <View style={styles.circleText1b}>
            <Text style={styles.innerCircleText2}>usd</Text>
            <Text style={styles.innerCircleText3}>.80</Text>
          </View>
        </View>
        <View style={styles.circleText2}>
          <Text style={styles.innerCircleText4}>24 Units</Text>

            <View style={styles.circle2Text2}>
              <DotIcon name="dot-fill" size={20} style={styles.dotIcon} />
              <Text style={styles.innerCircleText5}>Cookies</Text>
            </View>

        </View>
      </View>
    </View>
  );
};

export default CircleModule;
