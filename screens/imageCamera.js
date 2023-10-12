import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
import { Camera } from 'expo-camera';
import DisplayImg from './displayImg';
import { useNavigation } from '@react-navigation/native'; 

export default function CameraScreen() {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imgURI, setimgURI] = useState(null)
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync()
      setimgURI(uri)
      console.log("----------")
      console.log("imgaeXamera",imgURI)
    }
    
  }


  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={cameraRef}
        ratio="16:9" // Set your preferred aspect ratio
      >
        <View style={styles.buttonContainer}>
        <Button
                title="Take Picture"
                onPress={() => {takePicture(); navigation.navigate("DisplayImg", {imgUri: imgURI})}}
            />
          {/* <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity> */}
        </View>
      </Camera>
      {/* <DisplayImg imgUri={imgURI}></DisplayImg> */}
    </View>
  );
}

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    width: width,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

