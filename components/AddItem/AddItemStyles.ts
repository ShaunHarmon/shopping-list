import { StyleSheet } from "react-native"

const AddItemStyles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        height: 30,
        width: 200,
        borderRadius: 8, 
        borderColor: '#CeCeCe',
        borderWidth: 2,
        marginRight: 10,
        padding: 10
    },
    button: {
        height: 30,
        width: 100,
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#5b96de',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF'
    }
})

export {AddItemStyles}