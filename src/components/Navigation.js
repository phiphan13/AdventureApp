import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const Navigation = (props) =>
{
    return<View>


            <View style = {styles.Nav}>
                <TouchableOpacity style={styles.RosterButton} onPress = { () => {props.navigation.navigate("Roster")}}>
                        <Text style={styles.buttonText}>Roster</Text>
                </TouchableOpacity>
          

           
                <TouchableOpacity style={styles.AdventureButton}  onPress = { () => {props.navigation.navigate("Adventure")}}>
                        <Text style={styles.buttonText}>Adventure</Text>
                </TouchableOpacity>
            </View>
    </View>

}

const styles = StyleSheet.create({

    Nav:
    {
        flexDirection: 'row',
        bottom: 0,

        alignItems:'center',
        justifyContent: 'center',
        width:'100%',
    },
   RosterButton:
   {
    backgroundColor: 'grey',
    padding: 20, 
    borderWidth: 3,
    

   },

   AdventureButton:
   {
    backgroundColor: 'grey',
    padding: 20, 
    borderWidth: 3,

   },
   buttonText:
   {
       alignItems:'center',
   }
})

export default withNavigation(Navigation);