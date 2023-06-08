
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // layout control style start
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    spaceUp: {
        width: "100%",
        height: "7%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ededed',
        opacity: 0.1,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    spaceDown: {
        width: "100%",
        height: "7%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ededed',
        opacity: 0.1,
        borderTopWidth: 1,
        borderTopColor: '#000',
    },
    box: {
        width: "100%",
        height: "86%",
    },
    // layout control style end

    // text group styling start
    inner: {
        flex: 1,
        paddingTop: '10%',
        backgroundColor: "#f1f3f0",
    },
    textStyle: {
        fontSize: 24,
        lineHeight:34.5,
        paddingRight: 10,
        paddingLeft: 10,
        fontFamily: 'MyCustomFont'
    },
    // text group styling end

    // checkBox styling start
    checkBoxStyle: {
        backgroundColor: '#f1f3f0',
        borderWidth: 0,
    },
    checkBoxTextStyle: {
        fontFamily: 'MyCustomFont',
        fontSize: 24,
    },
    // checkBox styling end 
    
    // image layout start
    innerBox: {
        width: "50%"
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageView:{
        marginTop: '10%',
        marginLeft: '25%',
        alignItems: 'center',
        width: "50%", 
        height: '50%',
        aspectRatio: 1
    },
    imgStyle1: {
        width: "40%",
        height: "40%"
    },
    imgStyle2: {
        width:"46%",
        height: "40%"
    }
    // image layout end
    
});

export default styles;