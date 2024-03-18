import { StyleSheet } from "react-native";


const ListItemStyles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#cfcfcf',
        borderBottomWidth: 2,
        borderBottomColor: '#9c9c9c'
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
})

export {ListItemStyles}