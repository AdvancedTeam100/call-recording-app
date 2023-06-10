import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, BackHandler } from 'react-native';
import SpaceDown from './elements/SpaceDownElement';
import NewStartViewStyle from './style/NewStartViewStyle';
import QuestionStyle from './style/QuestionStyle';
import WorkSpaceStyle from './style/WorkSpaceStyle';


const QuestionComponent = () => {
    return (
        <View style={NewStartViewStyle.container}>
            <SpaceUpWithItem />
            <Box />
            <SpaceDown />
        </View>
    );
}

// header part start
const SpaceUpWithItem = () => {
    const handlePress = () => {
        BackHandler.exitApp(); // close the app when the button is pressed
      };
    return <View style={NewStartViewStyle.spaceUp} >
      <TouchableOpacity onPress={handlePress} style={WorkSpaceStyle.headerImg2}>
        <Image source={require('../assets/reset.png')} style={WorkSpaceStyle.headerImgStyle} />
      </TouchableOpacity>
    </View>
  }
// header part end 

// main box part start
const Box = () => {
    return (
        <View style={NewStartViewStyle.box}>
            <View style={NewStartViewStyle.inner}>
                {/* text group start  */}
                <Text style={{ ...NewStartViewStyle.textStyle, color: '#5a00f4' }}>
                    ①バグ・動作不良に対し、誠実に対応します。
                </Text>
                <Text style={{ ...NewStartViewStyle.textStyle, color: '#ee525c' }}>
                    ② 機能追加や要望に対し、簡単または簡素なものには、積極的に対応します。
                </Text>
                <Text style={{ ...NewStartViewStyle.textStyle, color: '#f0ae62' }}>
                    ③お問い合わせは、下記の紙飛行機を タップしてメールからお願いします。
                </Text>
                <Text style={{ ...NewStartViewStyle.textStyle, color: '#98d06d' }}>
                    ④無料で提供しつづけるには皆様からの
                    寄付で成り立っています。
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    ⑤  寄付方法
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    PayPayの「送る・受け取る」で
                </Text>
                <Text style={NewStartViewStyle.textStyle}>
                    電話番号「09044114488」 で検索し、 お気持ちを送信してください。
                </Text>
                {/* text group end  */}
                <View style={QuestionStyle.imgContainer}>

                    <TouchableOpacity style={QuestionStyle.imageView}>
                        <Image
                            source={require('../assets/icon-send.png')}
                            style={QuestionStyle.imgStyle2}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
// main box part end

export default QuestionComponent;