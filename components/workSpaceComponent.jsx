import * as React from 'react';
import { View, Image, Dimensions, TouchableOpacity, BackHandler } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewStartViewStyle from './style/NewStartViewStyle';
import WorkSpaceStyle from './style/WorkSpaceStyle';
import SpaceDown from './elements/SpaceDownElement';
import QuestionComponent from './QuestionComponent';
import { Audio } from 'expo-av';

const Stack = createStackNavigator();

const WorkSpaceComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: true,
        headerShown: false,
        animationTypeForReplace: "pop"
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="QuestionComponent"
        component={QuestionComponent}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  const [recording, setRecording] = React.useState(undefined);
  const [sound, setSound] = React.useState(undefined);
  const [waveforms, setWaveforms] = React.useState([]);

  const { height } = Dimensions.get('window');

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await newRecording.startAsync();
      console.log('Recording started');
      setRecording(newRecording);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    if (uri !== null && uri !== undefined) {
      console.log('Recording stopped and stored at', uri);
      const { sound: newSound } = await Audio.Sound.createAsync({ uri });
      setSound(newSound);
    } else {
      console.warn('Recording URI is not available.');
    }
    setRecording(undefined);
  }

  const generateWaveforms = () => {
    setInterval(() => {
      const waveformHeight = 200 * Math.random();
      const newWaveForms = waveforms;
      if (newWaveForms.length < 150) {
        // keep adding waveforms until reaching capacity which is 150
        newWaveForms.unshift(waveformHeight);
      } else {
        // remove the last waveform and insert new one
        newWaveForms.pop();
        newWaveForms.unshift(waveformHeight);
      }
      console.log(newWaveForms.length);
      setWaveforms(newWaveForms);
    }, 20);
  }

  async function playRecording() {
    console.log('Playing recording..'+ sound);
    if (!sound) {
      console.warn('Cannot play recording, no sound instance found.');
      return;
    }
    await sound.playAsync();
    generateWaveforms();
  }

  const SpaceUpWithItem = () => {
    const handlePress = () => {
      BackHandler.exitApp(); // close the app when the button is pressed
    };
    return <View style={NewStartViewStyle.spaceUp} >
      <TouchableOpacity onPress={() => navigation.goBack()} style={WorkSpaceStyle.headerImg1}>
        <Image source={require('../assets/back.png')} style={WorkSpaceStyle.headerImgStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} style={WorkSpaceStyle.headerImg2}>
        <Image source={require('../assets/reset.png')} style={WorkSpaceStyle.headerImgStyle} />
      </TouchableOpacity>
    </View>
  }

  return (
    <View style={NewStartViewStyle.container}>
      <SpaceUpWithItem />

      <View style={NewStartViewStyle.box}>
        <View style={NewStartViewStyle.inner}>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => playRecording()} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-list.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity style={WorkSpaceStyle.inner_box_3}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuestionComponent')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-info.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <TouchableOpacity onPress={() => alert('3')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-notice.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => startRecording()} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-recording.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => stopRecording()} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-stop.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
          </View>

          {
            waveforms.map((waveform, i) => (
              <View
                key={`${waveform}`}
                style={{
                  position: 'absolute',
                  top: height / 2 - waveform / 2,
                  left: i * 3,
                  backgroundColor: 'red',
                  width: 3,
                  height: waveform
                }}
              />
            ))
          }

          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => alert('6')} style={WorkSpaceStyle.inner_box_5}>
              <Image source={require('../assets/control-start.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('6')} style={WorkSpaceStyle.inner_box_5}>
              <Image source={require('../assets/control-10-back.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('6')} style={WorkSpaceStyle.inner_box_5}>
              <Image source={require('../assets/control-playback.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('6')} style={WorkSpaceStyle.inner_box_5}>
              <Image source={require('../assets/control-10-go.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('6')} style={WorkSpaceStyle.inner_box_5}>
              <Image source={require('../assets/control-end.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <SpaceDown />
    </View>
  );
}

export default WorkSpaceComponent;
