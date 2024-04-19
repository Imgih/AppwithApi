import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#343434',
        alignItems: 'center',
        justifyContent: 'center',
    },

    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#f8eeec',
        margin: 10,
    },

    formInput: {
        borderColor: '#f8eeec',
        borderWidth: 1,
        borderRadius: 12,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
        color: "white",
        placeholderTextColor: "white"
    },

    formButton: {
        backgroundColor: '#2b1b17',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',

    },
    SendButton: {
        backgroundColor: '#2b1b17',
        width: '80%',
        margin: 10,
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',

    },

    textButton: {
        color: 'white',
        fontSize: 20,
        
    },

    forgot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    subButton: {
        padding: 10,

    },

    subTextButton: {
        color: 'white'
    }
})