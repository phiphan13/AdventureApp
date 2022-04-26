import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const BattleText = (props) =>
{
    var descript = <Text></Text>

       
        return <View> 
            <View>
                <Text > {descript} </Text>

            </View>

            
        </View>
    
}

const styles = StyleSheet.create
({
    roomName:
    {
        alignSelf:'center',
        marginVertical: 50,
        fontSize: 30,
    },
    
})

export default BattleText;

