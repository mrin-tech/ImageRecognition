import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function DisplayImg({ route }) {
  const { imgUri } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imgUri }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    resizeMode: 'contain', // You can change the resizeMode based on your preference
  },
});
