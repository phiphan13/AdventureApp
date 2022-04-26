import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Navigation = (props) =>
{
    return<View>

        <View style ={styles.Nav}>

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
   
   Nav:{
       flexDirection:'row',
        marginBottom : 10,
        justifyContent: 'space-around',
        bottom: 0,
       
   },
   RosterButton:
   {
        
        padding: 20, 
      borderWidth: 3,

      
   },
   AdventureButton:
   {
    padding: 20, 
    borderWidth: 3,

   },
   buttonText:
   {
       alignItems:'center',
   }
})

export default Navigation;