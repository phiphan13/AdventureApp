import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {Context} from "../context/HeroContext";
import HeroList from "../components/HeroList";
import Navigation from "../components/Navigation";
import BattleText from "../components/BattleText";

const Adventure = (props) =>
{

    const adjectives = ["Spooky", "Miserable", "Deadly"];
    const location = ["Toilet", "Forest", "Tundra"];
    const qualifiers = ["No Will", "No Return", "Sheer Sorrow"];
    const challengeLevel = Math.floor(Math.random() *10) + 1;

    var pickAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    var pickLoc = location[Math.floor(Math.random() * location.length)];
    var pickQual = qualifiers[Math.floor(Math.random() * qualifiers.length)];

    const {updateHero} = useContext(Context);

    return <View>
        <View>
            <Text style = {styles.Welcome}>Current Adventure</Text>

        </View>

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>
                    The {pickAdj} {pickLoc} of {pickQual}!
            </Text>
        </View>

        <Text style = {styles.challengeText}>Challenge Level: {challengeLevel}</Text>




        <HeroList onSubmit={ (hero) => {

                    //if power is greater than challengeLevel
                    if(hero.power > challengeLevel)
                    {
                        hero.currentHealth = hero.currentHealth-4;
                        hero.gold = hero.gold +6;
                        updateHero(hero.gold,hero.currentHealth);

                    //if power is lower than challegeLevel
                    }else if(hero.power <= challengeLevel)
                    {
                        
                        hero.currentHealth = hero.currentHealth-6;
                        hero.gold = hero.gold +3;
                        updateHero(hero.gold,hero.currentHealth);
                    }

                    //character is technically unplayabale and make no progress
                    if(hero.currentHealth <=0 )
                    {
                        hero.currentHealth = 0;
                        hero.power=  0;
                        hero.gold = 0;
                        hero.maxHealth = 0;
                        hero.level = 0;
                        updateHero(hero.gold,hero.currentHealth),hero.maxHealth, hero.power;

                    }
                
            
                }}/>
        <Navigation></Navigation>

    </View>
}

const styles = StyleSheet.create({

    Welcome:
    {
        fontSize:20,
        textAlign: 'center',
    },
    textContainer:
    {
        marginVertical: 8,
        marginHorizontal: 30,
        padding: 20, 
        borderWidth: 3,
        alignContent: "space-around",
        alignItems: 'center',
    
    
    },
    text:
    {
        fontSize: 25,
        fontWeight: 'bold',
    },
   
    challengeText:
    {
        fontSize:15,
        textAlign: 'center',

    },
    pickText:
    {
        fontSize:15,
       
    },

})

export default Adventure;