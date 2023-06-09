import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import NewStartViewStyle from './style/NewStartViewStyle';
import WorkSpaceComponent from './WorkSpaceComponent';
import { createStackNavigator } from '@react-navigation/stack';
import SpaceUp from './elements/SpaceUpElement';
import SpaceDown from './elements/SpaceDownElement';

const Stack = createStackNavigator();


const NewStartViewComponent = () => {
    return (
            <Stack.Navigator screenOptions={{
                animationEnabled: true,
                headerShown: false,
                animationTypeForReplace:"pop"
              }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen name="WorkSpaceComponent" component={WorkSpaceComponent} />
            </Stack.Navigator>
    );
};

// define this screen view start
export const HomeScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
        console.log('checked');
    };

    const handleImage2Click = () => {
        navigation.navigate('WorkSpaceComponent');
    };



    const Box = ({
        checked,
        handleCheck,
        handleImage2Click,
    }) => (
        <View style={NewStartViewStyle.box}>
            <View style={NewStartViewStyle.inner}>
                {/* text group start  */}
                <Text style={NewStartViewStyle.textStyle}>通話を録音しますか?</Text>
                <Text style={NewStartViewStyle.textStyle}>
                    通話を録音する前に法的責任を理解しておく必要があります。
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    これには、通話相手から事前に同意を得る必要があるかどうかも含まれます。
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    同じことが音声を録音するその他の全てのアプリにも適用されます。
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    インストールしたアプリの中には録音したデータにアクセスするものがある点にもご注意ください。
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    当方は録音機能の使用や録音内容について責任を負いません。
                </Text>
                {/* text group end  */}

                {/* checkbox start  */}
                <CheckBox
                    title="次から表示しない"
                    checked={checked}
                    onPress={handleCheck}
                    checkedColor="black"
                    uncheckedColor="black"
                    containerStyle={NewStartViewStyle.checkBoxStyle}
                    titleProps={{ style: { fontSize: 24, fontFamily: 'MyCustomFont' } }}
                />
                {/* checkbox end  */}

                {/* open and close image buttons(box) start  */}
                <View style={NewStartViewStyle.imgContainer}>

                    <TouchableOpacity style={NewStartViewStyle.imageView} onPress={handleImage2Click}>
                        <Image
                            source={require('../assets/images-ok.png')}
                            style={NewStartViewStyle.imgStyle2}
                        />
                    </TouchableOpacity>
                </View>
                {/* open and close image buttons(box) end */}
            </View>
        </View>
    );
    return (
        <View style={NewStartViewStyle.container}>
            <SpaceUp />
            <Box
                checked={checked}
                handleCheck={handleCheck}
                handleImage2Click={handleImage2Click}
            />
            <SpaceDown />
        </View>
    );
}
// define this screen view end


export default NewStartViewComponent;
