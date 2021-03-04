import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Hi extends Component {
    
    render() {
        return (
            <View>
                <Text style={styles.tv}> textInComponent </Text>
                <Text style={{color:"blue"}}>你好</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tv:{
        color:"red"
    }
})
