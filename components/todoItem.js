import React,{ useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={24} color="teal" />
            <Text style={styles.txt}>
                {item.text}
            </Text>
            </View>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        padding:16,
        marginTop:16,
        borderColor:"teal",
        borderWidth:2,
        borderStyle:"dashed",
        borderRadius:10
    },
    txt:{
        fontSize:20,
        fontStyle:"italic",
        color:"teal",
        marginLeft:5
    }
})