import React from 'react'
import { View, Text } from 'react-native'
import { headerStyles } from './HeaderStyles'


const Header = ()=>{
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}>
                Shopping List
            </Text>
        </View>
    )
}

export default Header