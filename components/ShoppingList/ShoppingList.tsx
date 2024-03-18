import React, {useState} from 'react'
import {View, Text, FlatList, ListRenderItemInfo, ListRenderItem} from 'react-native'
import NoListItems from '../NoListItems/NoListItems'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ListItem } from '../ListItem/ListItem';
import { AddItem } from '../AddItem/AddItem';



export interface ShoppingListItem {
    id: string,
    item: string
}

const ShoppingList = ()=>{

    const [items, setItems] = useState<ShoppingListItem[]>([])


    const renderListItem: ListRenderItem<ShoppingListItem> = ({item})=>{
        return (
            <ListItem deleteItem={deleteListItem} item={item}/>
        )
    }

    const deleteListItem = (id: string)=>{
        setItems(items => items?.filter(item=> item.id != id))
    }

    const addItem = (item: ShoppingListItem)=>{
        setItems(items => {
                return  [...items, item]
            }
        )
    }

    return (
        <View>
            {!items?.length ? <NoListItems/>: <View>
                <FlatList data={items} renderItem={renderListItem}/>
                
            </View>}
            <AddItem addItem={addItem}/>
        </View>
    )

}

export default ShoppingList