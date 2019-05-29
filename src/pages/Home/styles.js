import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30
    },

    tituloTxt: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#4D5656',
        color: '#717D7E',
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 15,
    },

    button: {
        height: 45,
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 15,
        backgroundColor: "#1e88e5",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFF"
    },

    footerContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop : 20
    },

    footerText: {
        color: '#717D7E',
        fontSize: 16,
    },
    footerBold: {
        color: '#717D7E',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    floatButton: {
        position: 'absolute',
        right: 30,
        bottom: 30 + getBottomSpace(),
        bottom: 30,
        width: 60,
        height: 60,
        backgroundColor: '#1e88e5',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;