import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Button } from 'react-native-elements'
import { StyleSheet, Text, Image, View} from 'react-native';


export default function Touren(props){
    
        return(
            
                <Card containerStyle ={styles.container}>
                
                  <Card.Title>
                  <View style={styles.rowStyle}>

                  <Text style={styles.titleLabelSyle}> {props.name} </Text>
                  <Button
                        icon={
                            <Ionicons name="add-outline"
                            size={15}
                            color="#AAAAAA"
                            />
                        }
                        iconRight
                        type="outline"
                        containerStyle={styles.buttonStyle}
                        />
                    </View>
                  </Card.Title>

                  <View style={styles.viewStyle}>

                    <View style={styles.tournCardStyle}>

                      <Image  style={styles.tourImage} source  ={{uri: "https://source.unsplash.com/1024x768/?nature"}}/>

                      <Text style={styles.textSyle}>{props.values[0]} </Text>

                     </View>

                    <View style={styles.tournCardStyle}>

                    <Image  style={styles.tourImage} source  ={{uri: "https://source.unsplash.com/1024x768/?tree"}}/>

                    <Text style={styles.textSyle}> {props.values[1]} </Text>

                    </View>

                    <View style={styles.tournCardStyle}>

                    <Image  style={styles.tourImage} source  ={{uri: "https://source.unsplash.com/1024x768/?tree"}}/>

                    <Text style={styles.textSyle}> {props.values[2]}</Text>

                    </View>


                  </View>


                </Card>
           
            
        )
    }

    const styles = StyleSheet.create({
      container: {
       height:200,
       flexDirection: 'row',
       marginBottom:10
      },
      buttonStyle:{
        height: 40,
        marginRight:30,
        width:40,
      },
      viewStyle :{
        flexDirection: 'row', marginBottom:15,
      },
      textSyle:{
         fontSize:15, textAlign:"center",
         width:95
      },
     
      rowStyle :{
        flexDirection: 'row',height:30
      },
      titleLabelSyle:{
        width:270, fontSize:20, color:"#2596BE"
      },
      
      tournCardStyle:{
      
        width:100,height:20,flex:1, flexDirection:"column"
      },
      tourImage:{
          width:90,
          height:100,
          borderRadius:5,
          marginBottom:7
          
      }
    });