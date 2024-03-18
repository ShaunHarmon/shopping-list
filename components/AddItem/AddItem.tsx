import React, {FC, useState} from 'react'
import { Text, Pressable, TextInput, View } from 'react-native'
import { ShoppingListItem } from '../ShoppingList/ShoppingList'
import { AddItemStyles } from './AddItemStyles'
import uuid from 'react-native-uuid';

export type AddItemProps = {
    addItem: (item: ShoppingListItem)=>void
}

const AddItem: FC<AddItemProps> = ({addItem})=>{

    const [input, setInput] = useState<string>('')
    

    const clickHandler = ()=>{
        
        if(!input.length) return

        addItem({
            id:  uuid.v4().toString(),
            item: input
        })

        setInput('')
    }

    return (
        <View style={AddItemStyles.container}>
            <TextInput onChange={(e)=>setInput(e.nativeEvent.text)} value={input} style={AddItemStyles.input}/>
            <Pressable  style={AddItemStyles.button} onPress={clickHandler}>
                <Text style={AddItemStyles.buttonText}>Add Item</Text>
            </Pressable>
        </View>
    )
}

export {AddItem}