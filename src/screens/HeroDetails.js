import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Context} from "../context/HeroContext";
import Navigation from "../components/Navigation";
import BattleText from "../components/BattleText";

const HeroDetails = (props) =>
{
        const {updateHero,state} = useContext(Context);
        const heroID = props.navigation.getParam("id");
        const hero = state.find((hero) => 
        {
            return heroID === hero.id; 
        
        })

        return <View style ={styles.container}> 
            <View>

                <BattleText />

                <Text style={styles.heroName}> {hero.name}</Text>

      
                <View style={styles.stats}>
                    <Text style={styles.statsText}>Level: {hero.level}</Text>
                    <Text style={styles.statsText}>Health: {hero.currentHealth}/{hero.maxHealth}</Text>
                    <Text style={styles.statsText}>Power: {hero.power}</Text>
                    <Text style={styles.statsText}>Gold: {hero.gold}</Text>
                </View>

            </View>

            <TouchableOpacity style={styles.levelUp} onPress=
                {() => {


                    if (hero.gold >=10)
                        { 
                            hero.gold = hero.gold-10;
                            hero.maxHealth = hero.maxHealth + 10;
                            hero.currentHealth = hero.currentHealth + 10;
                            hero.level = hero.level +1;
                            hero.power = hero.power+3;
                            updateHero(hero.level, hero.power, hero.currentHealth, hero.maxHealth, hero.power, hero.gold);
                    }
                    
        
                    
                }}
        > 
            <Text style={styles.levelUpButton}>Level Up</Text>
        </TouchableOpacity>

        <View style={styles.Nav}>
            <Navigation/>
        </View>
        </View>
        
    
}

/*
HeroDetails.defaultProps =
{
    initialValues:
    {
        gold: hero.gold,
        level: hero.level,
        power: hero.power,
        maxHealth: hero.maxHealth
    }
}
*/


const styles = StyleSheet.create
({
    levelUpButton:
    {
        fontSize:20,
    },
    levelUp:
    {
        marginVertical: 8,
        marginHorizontal: 110,
        alignItems: 'center',
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
        backgroundColor: '#02FFEF'
    },
    container:
    {
        justifyContent: 'space-between',
    },
    heroName:
    {
        alignSelf:'center',
        marginVertical: 50,
        fontSize: 30,
    },
    stats:
    {
        marginVertical: 50,
    },
    statsText:
    {
        fontSize: 20,
    },
})

export default HeroDetails;

