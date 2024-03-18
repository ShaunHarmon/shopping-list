import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { AddItem } from '../AddItem/AddItem'
import { ShoppingListItem } from '../ShoppingList/ShoppingList'
import { NoListItemsStyles } from './NoListItemsStyles'


const NoListItems: FC = ()=>{

    return (
        <View style={NoListItemsStyles.container}>
            <Text style={NoListItemsStyles.text}>
                There are no items in your list!
            </Text>       
        </View>
    )
}

export default NoListItems