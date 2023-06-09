import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewStartViewStyle from './style/NewStartViewStyle';
import WorkSpaceStyle from './style/WorkSpaceStyle';
import SpaceDown from './elements/SpaceDownElement';
import QuestionComponent from './QuestionComponent';

const Stack = createStackNavigator();

const WorkSpaceComponent = () => {
  return (
    <Stack.Navigator screenOptions={{
      animationEnabled: true,
      headerShown: false,
      animationTypeForReplace: "pop"
    }}>
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

// define this screen view start
const HomeScreen = ({ navigation }) => {

  const SpaceUpWithItem = () => {
    return <View style={NewStartViewStyle.spaceUp} >
      <TouchableOpacity onPress={() => navigation.goBack()} style={WorkSpaceStyle.headerImg1}>
        <Image source={require('../assets/back.png')} style={WorkSpaceStyle.headerImgStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Reset button pressed')} style={WorkSpaceStyle.headerImg2}>
        <Image source={require('../assets/reset.png')} style={WorkSpaceStyle.headerImgStyle} />
      </TouchableOpacity>
    </View>
  }
  return (
    <View style={NewStartViewStyle.container}>
      <SpaceUpWithItem />
      {/* main box start  */}
      <View style={NewStartViewStyle.box}>

        <View style={NewStartViewStyle.inner}>
          {/* first line start */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => alert('1')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-list.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity style={WorkSpaceStyle.inner_box_3}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuestionComponent')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-info.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
          </View>
          {/* first line end  */}

          {/* second line start  */}
          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <TouchableOpacity onPress={() => alert('4')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-notice.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('5')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-recording.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('6')} style={WorkSpaceStyle.inner_box_3}>
              <Image source={require('../assets/icon-stop.png')} style={WorkSpaceStyle.inner_box_img} />
            </TouchableOpacity>
          </View>
          {/* second line end  */}
          
        </View>
      </View>
      {/* main box end  */}
      <SpaceDown />
    </View>
  );
}



export default WorkSpaceComponent;