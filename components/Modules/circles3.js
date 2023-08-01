import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import DotIcon from 'react-native-vector-icons/Octicons';

const CircleModule1 = () => {
  const theme = useTheme();
  const {colors} = useTheme();

 
  const largerCircleRadius = 160;
  const numSmallerCircles = 1;

  const angleStep = Math.PI / 5 / 0.5 / numSmallerCircles;

  const centerX = largerCircleRadius;
  const centerY = largerCircleRadius;

  const [rotationAngle, setRotationAngle] = useState(0);

  const smallerCircles = Array.from({length: numSmallerCircles}).map(
    (_, index) => {
      const angle = (index * angleStep + rotationAngle) % (Math.PI / 8);
      

      const smallerCircleRadius = largerCircleRadius; 
      const x = centerX + smallerCircleRadius * Math.cos(angle) - 80; 
      const y = centerY - smallerCircleRadius * Math.sin(angle) - 160; 

      return {x, y, label: (index + 1) * 24}; 
    },
  );

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      position: 'absolute',
      backgroundColor: colors.iconcontainer,
    },
    label: {
      color: 'white',
      fontWeight: 'bold',
    },

  });

  const Circle = ({color, size, x, y, label}) => {
    return (
      <TouchableOpacity
        style={[
          styles.circle,
          {backgroundColor: color, width: size, height: size, left: x, top: y},
        ]}>

      </TouchableOpacity>
    );
  };

  return (
    <>
      {smallerCircles.map((circle, index) => (
        <Circle
          key={index}
          color="black"
          size={20}
          x={circle.x}
          y={circle.y}
          label={circle.label}></Circle>
      ))}
    </>
  );
};

export default CircleModule1;
