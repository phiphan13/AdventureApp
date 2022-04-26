import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const heroReducer = (state, action) => {
    switch(action.type){
        case 'get_hero':
            return action.payload;
        case 'add_hero':
            return [...state, { 
                    id: Math.floor(Math.random() * 999999), 
                    name: action.payload.name,
                    currentHealth:action.payload.currentHealth,
                    maxHealth: action.payload.maxHealth,
                    gold: action.payload.gold,
                    power: action.payload.power,
                    level: action.payload.level,
                    
                }
            ]
        case 'delete_hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        
        case 'update_hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return hero;
                }
            })
            
        
        default:
            return state;
    }
}


const addHero = (dispatch) => {
    return (name, level, power, currentHealth, maxHealth, gold, callback) => {
        
        
        dispatch({ type: 'add_hero', payload: { name: name, level:level, power:power, currentHealth:currentHealth, maxHealth: maxHealth,gold:gold } })
       /*
        if(callback)
        {
            callback();
        }
        */
    }
}

const deleteHero = (dispatch) => {
    
    return (id) =>
    {
        dispatch({ type: 'delete_hero', payload: id  })
    }
    
}
 
const updateHero= (dispatch) => {
    
        return (level, power, currentHealth, maxHealth, gold, callback) =>{
        dispatch({type: 'update_hero', payload: { level:level, power:power, currentHealth:currentHealth, maxHealth: maxHealth, gold:gold} })

        
        
    }
        
    
}





export const {Context, Provider} = createDataContext(heroReducer, 
                                    {addHero, deleteHero,  updateHero: updateHero}, 
                                    [ ]
                                );