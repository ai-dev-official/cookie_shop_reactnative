import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Circle = ({ color, size, x, y, onPress }) => {
  return (
    <TouchableOpacity style={[styles.circle, { backgroundColor: color, width: size, height: size, left: x, top: y }]} onPress={onPress} />
  );
};

const CircleModule = () => {
  // Get the screen width and height
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // Radius of the larger circle (half of the screen width)
  const largerCircleRadius = screenWidth / 2;

  // Number of smaller circles
  const numSmallerCircles = 3;

  // Calculate the angle step between each smaller circle (120 degrees for 3 circles)
  const angleStep = (2 * Math.PI) / numSmallerCircles;

  // Calculate the center of the larger circle (center of the screen)
  const centerX = screenWidth / 2;
  const centerY = screenHeight / 2;

  // Calculate the positions of the smaller circles
  const smallerCircles = Array.from({ length: numSmallerCircles }).map((_, index) => {
    const angle = index * angleStep;

    // Calculate the x and y coordinates of the smaller circle based on the angle and radius
    const x = centerX + largerCircleRadius * Math.cos(angle);
    const y = centerY + largerCircleRadius * Math.sin(angle);

    return { x, y };
  });

  // Initialize the state for the smaller circles' color and size
  const [color, setColor] = useState('blue');
  const [size, setSize] = useState(10);

  // Define a function to handle the press event on the smaller circles
  const handlePress = () => {
    // Generate a random color from a list of colors
    const colors = ['red', 'green', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Set the new color and size for the smaller circles
    setColor(randomColor);
    setSize(size + 5);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { width: largerCircleRadius * 2, height: largerCircleRadius * 2 }]} />

      {smallerCircles.map((circle, index) => (
        <Circle key={index} color={color} size={size} x={circle.x - size / 2} y={circle.y - size / 2} onPress={handlePress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  circle: {
    borderRadius: 1000, // Make sure this is a large enough value to get a perfect circle
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default CircleModule;
