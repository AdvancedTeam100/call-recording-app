import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // image layout start
    
    imgContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageView:{
        marginTop: '5%',
        marginLeft: '25%',
        alignItems: 'center',
        width: "50%", 
        height: '50%',
        aspectRatio: 1
    },
    imgStyle2: {
        width:"60%",
        height: "40%"
    }
    // image layout end
});

export default styles;