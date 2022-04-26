import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/HeroContext";



const RosterScreen = (props) =>
{
    const {addHero, state} = useContext(Context);
    var heroNames = ["Branson", "John", "Kevin","Candice"];
    var randNames = heroNames[Math.floor(Math.random() * heroNames.length)];

    return <View>
        <Text style={styles.rosterText}> Roster</Text>

        <TouchableOpacity style={styles.hireButton} onPress=
                {() => {addHero(randNames, 1, Math.floor(Math.random() * 5), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 100)
                   
                }}
        > 
            <Text>Hire New Heros</Text>
        </TouchableOpacity>

    <View style = {styles.heroContainer}>
        <FlatList
            data = {state}
            keyExtractor={(hero) => {return hero.id}}
            renderItem={({item}) =>
            {
                return <TouchableOpacity style={styles.heroButton} onPress = { () => {props.navigation.navigate("HeroDetails", {id: item.id})}}>
                    
                    
                    <Text>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.currentHealth} Power: {item.power} --- Gold: {item.gold}</Text>
                
                
                </TouchableOpacity>
            }} 

            
        
        />
    </View>
    
    </View>

    
}

const styles = StyleSheet.create
({
    hireButton:
    {
        alignSelf: 'center',
        borderWidth:3,
        padding:20,
        borderRadius: 10,
        color: '#FFFFFF',
        backgroundColor: '#0DA2FF',

    },
    rosterText:
    {
        alignSelf: 'center',
        fontSize: 30,
    },
    heroButton:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
    },
    
})

export default RosterScreen;

