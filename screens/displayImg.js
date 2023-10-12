// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

// export default function DisplayImg({imgUri}) {
//     // console.log("CHECK")
//     return (
//         <View>
//         {imgUri ? 
//         (<View>
//             <Image source={{imgUri}} ></Image>
//         </View>)
//         :
//         (<Text>No image to display.</Text>)
//         }
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     imageDim: {
//         width:
//     }
// })

import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute from React Navigation

export default function DisplayImg() {
  const route = useRoute(); // Use useRoute to access the route and its parameters
  const imgUri = route.params.imgUri; // Access the imgUri parameter
  console.log(imgUri)
  return (
    <View >
      {imgUri ? (
        <Image source={{ uri: imgUri }}/>
      ) : (
        <Text>No image to display</Text>
      )}
    </View>
  );
}

// ... (styles and other code)
