import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'

class CameraComponent extends Component {

    componentDidMount = () => {
        console.log("Component has been mounted");
    }

    onCameraReady = () => {
        Alert.prompt("Camera is ready");
        console.log("Camera is ready");
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    style={{ flex: 1, alignItems: 'center' }}
                    type={RNCamera.Constants.Type.front}
                    ref={ref => {
                        this.camera = ref
                    }}
                    onCameraReady={this.onCameraReady}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }
  })
  
export default CameraComponent