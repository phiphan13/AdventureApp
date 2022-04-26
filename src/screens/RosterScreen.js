import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/HeroContext";
import HeroList from "../components/HeroList";
import Navigation from "../components/Navigation";





const RosterScreen = (props) =>
{
    const {addHero} = useContext(Context);
    var heroNames = ["Branson", "John", "Kevin","Candice"];
    var randNames = heroNames[Math.floor(Math.random() * heroNames.length)];


    return <View>
        <Text style={styles.rosterText}> Roster</Text>

        <TouchableOpacity style={styles.hireButton} onPress=
                {() => {
                    addHero(randNames, 1, Math.floor(Math.random() * 5), 10, 10, 100)
                   
                }}
        > 
            <Text>Hire New Heros</Text>
        </TouchableOpacity>

        
        <HeroList />

        <View>
            <Navigation />
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
    
})

export default RosterScreen;

