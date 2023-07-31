import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {useTheme} from 'react-native-paper';


const CircleModule = () => {
  const theme = useTheme();
  const {colors} = useTheme();

  // Radius of the larger circle
  const largerCircleRadius = 150; // You can adjust this value to change the size of the larger circle

  // Number of smaller circles
  const numSmallerCircles = 3;

  // Calculate the angle step between each smaller circle (90 degrees for 3 circles, to fit within one quadrant)
  const angleStep = (Math.PI / 2) / numSmallerCircles;

  // Calculate the center of the larger circle
  const centerX = largerCircleRadius;
  const centerY = largerCircleRadius;

  // Rotation angle for the smaller circles
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotationAngle(prevAngle => (prevAngle + angleStep) % (2 * Math.PI)); // Update the rotation angle continuously
    }, 100);

    return () => {
      clearInterval(rotationInterval); // Clear the interval on component unmount
    };
  }, [angleStep]);

  // Calculate the positions of the smaller circles with rotation applied
  const smallerCircles = Array.from({ length: numSmallerCircles }).map((_, index) => {
    const angle = (index * angleStep + rotationAngle) % (Math.PI / 0.8);

    // Calculate the x and y coordinates of the smaller circle based on the angle and radius
    const smallerCircleRadius = largerCircleRadius; // Place the smaller circles on the circumference of the larger circle
    const x = centerX + smallerCircleRadius * Math.cos(angle) -140; // Subtract half of the smaller circle size
    const y = centerY - smallerCircleRadius * Math.sin(angle) - 230; // Subtract half of the smaller circle size (use minus sign for y-axis to position the circles in the first quadrant)

    return { x, y, label: (index + 1) * 8 }; // Set the label for the circle (e.g., 8, 16, 24)
  });

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
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const Circle = ({ color, size, x, y, label }) => {
    return (
      <View style={[styles.circle, { backgroundColor: color, width: size, height: size, left: x, top: y }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { width: largerCircleRadius * 2, height: largerCircleRadius * 2, backgroundColor: colors.iconcontainer }]} />

      {smallerCircles.map((circle, index) => (
        <Circle
          key={index}
          color={index === 1 ? 'black' : 'white'} 
          size={32}
          x={circle.x}
          y={circle.y}
          label={circle.label}
        />
      ))}
    </View>
  );
};


export default CircleModule;
