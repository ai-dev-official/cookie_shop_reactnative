import { shadow } from "react-native-paper";
import { StyleSheet } from "react-native";

export const bgtheme = {
   bgWhite: opacity => `rgba(255,255,255, ${opacity})`,
}   
export const bgShdow= StyleSheet.create ({

      bgShadow: {
         elevation: 1,
           shadowColor: '#000',
           shadowOffset: {
             width: 0,
             height: 1,
           },
           shadowOpacity: 0.16,
           shadowRadius: 1,
      }
}) 