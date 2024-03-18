import React, { FC } from "react";
import { ShoppingListItem } from "../ShoppingList/ShoppingList";
import { TouchableOpacity, View, Text } from "react-native";
import { ListItemStyles } from "./ListItemStyles";
import Ionicons from '@expo/vector-icons/Ionicons';

export type ListItemProps ={
    item: ShoppingListItem
    deleteItem: (id: string)=> void
}
const ListItem: FC<ListItemProps> = ({item, deleteItem})=>{
  
    return (
        <TouchableOpacity style={ListItemStyles.container}>
            <Text style={ListItemStyles.text}>
                {item.item}
            </Text>
            <Ionicons onPress={()=>deleteItem(item.id)} name="close" size={20} color={'#fc4242'}/>
        </TouchableOpacity>
    )

}

export {ListItem}