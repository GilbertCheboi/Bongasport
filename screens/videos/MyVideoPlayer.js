import { StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video';
import React from 'react'

export default function MyVideoPlayer() {
  return (
    <View style={{flex: 1}}>
      <Video
        source={{ uri: 'https://example.com/video.mp4' }}
        style={{ flex: 1 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})