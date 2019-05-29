import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        alignItems: 'stretch',
        paddingHorizontal: 30
    },

    containerTitle: {
        height: 45,
        paddingHorizontal: 0,
        justifyContent: 'center',
        backgroundColor: '#F8F9F9',
    },

    containerTotal: {
        marginTop: 15,
        marginBottom: 15,
        height: 45,
        paddingHorizontal: 0,
        justifyContent: 'center',
    },

    titleTotal: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 28,
    },

    titleTxt: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 20,
        marginTop: 15,
    },

    picker: {
        height: 50, 
        width: 150, 
        color: '#000',
        borderWidth: 3,
        borderColor: '#999',
        borderRadius: 4
    },

    floatButton: {
        position: 'absolute',
        right: 30,
        //bottom: 30 + getBottomSpace(),
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