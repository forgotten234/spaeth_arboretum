import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Button, ButtonGroup } from 'react-native-elements'
import { StyleSheet } from 'react-native';
import { View } from 'react-native'


export default function Function(){

    
        return(
            
           
                <Card containerStyle ={styles.container}>
                 <View style={{flex: 1, flexDirection: 'row'}}>

                     
                 <Button
                        icon={
                            <Ionicons name={options[0].img}
                            size={20}
                            color="#2596BE"
                            />
                        }
                        iconRight
                        type="outline"
                        containerStyle={styles.buttonStyle}
                        />

                <Button
                        icon={
                            <Ionicons name={options[1].img}
                            size={20}
                            color="#2596BE"
                            />
                        }
                        iconRight
                        type="outline"
                        containerStyle={styles.buttonStyle}
                        />

                <Button
                        icon={
                            <Ionicons name={options[2].img}
                            size={20}
                            color="#2596BE"
                            />
                        }
                        iconRight
                        type="outline"
                        containerStyle={styles.buttonStyle}
                        />
                 </View>
               
                </Card>
           
            
        )
    }
const options =[{img:"map-outline"}, 
    {img:"bookmark-outline"},
    {img:"heart-outline"},
]

const styles = StyleSheet.create({
    container: {
     height:80,
     flexDirection: 'row',

    },
    buttonStyle:{
        height: 80, marginRight:35, borderRadius:2, width:80, color:"#AAAAAA"
    }
  });