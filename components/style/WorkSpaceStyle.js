import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // header image layout start
    headerImg1: {
        position: 'absolute',
        left: '5%',
        bottom: '10%'
    },
    headerImg2: {
        position: 'absolute',
        right: '5%',
        bottom: '10%'
    },
    headerImgStyle: {
        width: 30, 
        height: 30
    },
    // header image layout end
    // main box layout start
    inner_box_3: {
        width: '33%',
        height: 150,
        alignItems: 'center'
    },
    inner_box_img: {
        width: '100%',
        height: '100%', 
        resizeMode:'contain'
    },
    // main box layout end
    // audio player image start
    inner_box_5: {
        width: '20%',
        height: 55,
        alignItems: 'center'
    },
    // audio player image end
});

export default styles;