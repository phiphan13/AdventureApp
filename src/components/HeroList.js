import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Context} from "../context/HeroContext";
import { withNavigation } from 'react-navigation';

const HeroList = (props) =>
{
    
    const {state} = useContext(Context);
    return <View>

            
         <View style = {styles.heroContainer}>
        <FlatList
            data = {state}
            keyExtractor={(hero) => {return hero.id}}
            renderItem={({item}) =>
            {
                //navigate to HeroDetails
                //display details for RosterScreen and Details
                //onSubmit should pass in hero to use it for Adventure
                return <TouchableOpacity style={styles.heroButton}  onPress = { () => 
                    {
                        props.navigation.navigate("HeroDetails", {id: item.id});

                        if(props.onSubmit)
                        {
                            props.onSubmit(item); 
                        }
                    
                    }} >
                    
                    <Text >Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} --- Gold: {item.gold}</Text>
                
                
                </TouchableOpacity>
            }} 

            
        
        />
    </View>
    </View>

}

const styles = StyleSheet.create({
   
    heroButton:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
    },

})

export default withNavigation(HeroList);