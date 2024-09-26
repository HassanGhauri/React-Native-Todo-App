import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'teal'
    },
    title:{
        textAlign:'center',
        fontSize:30,
        color:'whitesmoke',
        fontStyle:"italic"
    }

})