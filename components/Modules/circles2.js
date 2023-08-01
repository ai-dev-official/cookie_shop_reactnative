import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import DotIcon from 'react-native-vector-icons/Octicons';

const CircleModule2 = () => {
  const theme = useTheme();
  const {colors} = useTheme();

  // Radius of the larger circle
  const largerCircleRadius = 160; // You can adjust this value to change the size of the larger circle

  // Number of smaller circles
  const numSmallerCircles = 1;

  // Calculate the angle step between each smaller circle (90 degrees for 3 circles, to fit within one quadrant)
  const angleStep = Math.PI / 5 / 0.5 / numSmallerCircles;
  // const angleStep = Math.PI / 1 / numSmallerCircles;

  // Calculate the center of the larger circle
  const centerX = largerCircleRadius;
  const centerY = largerCircleRadius;

  // Rotation angle for the smaller circles
  const [rotationAngle, setRotationAngle] = useState(0);

  // useEffect(() => {
  //   const rotationInterval = setInterval(() => {
  //     setRotationAngle(prevAngle => (prevAngle + angleStep) % (2 * Math.PI)); // Update the rotation angle continuously
  //   }, 99999999999);

  //   return () => {
  //     clearInterval(rotationInterval); // Clear the interval on component unmount
  //   };
  // }, [angleStep]);

  // Calculate the positions of the smaller circles with rotation applied
  const smallerCircles = Array.from({length: numSmallerCircles}).map(
    (_, index) => {
      const angle = (index * angleStep + rotationAngle) % (Math.PI / 0.2);
      // const angle = (index * angleStep + rotationAngle) % (Math.PI / 0.8);

      
      const smallerCircleRadius = largerCircleRadius; 
      const x = centerX + smallerCircleRadius * Math.cos(angle) - 100;
      const y = centerY - smallerCircleRadius * Math.sin(angle) - 210; 

      return {x, y, label: (index + 1) * 16}; 
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
      marginBottom: -15,
    },
    circleText1b: {
      marginBottom: -15,
    },

    innerCircleText2: {
      color: colors.light,
      textTransform: 'uppercase',
      fontFamily: 'Outfit-Medium',
      fontSize: 20,
    },
    circleText2: {
      marginLeft: -15,
    },
    innerCircleText3: {
      color: colors.light,
      fontFamily: 'Outfit-Medium',
      fontSize: 20,
    },
    dotIcon: {
      color: colors.primary,
      marginRight: 10,
    },
    innerCircleText4: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 22,
    },
    innerCircleText5: {
      color: colors.light,
      fontFamily: 'Outfit-Regular',
      fontSize: 22,
      color: colors.primary,
    },
    circle2Text2: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
    <>
      {smallerCircles.map((circle, index) => (
        <Circle
          key={index}
          color={colors.light}
          // color={index === 1 ? 'black' : 'white'}
          size={36}
          x={circle.x}
          y={circle.y}
          label={circle.label}>
        </Circle>
      ))}
    </>
  );
};

export default CircleModule2;
