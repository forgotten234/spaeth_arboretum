import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Button } from 'react-native-elements'
import { StyleSheet, Text, View} from 'react-native';

export default function About(){

    
        return(
            
                <Card containerStyle ={styles.container}>
                
                  <Card.Title>
                    
                  <View style={styles.rowStyle}>

                  <Text style={styles.titleLabelSyle}> About </Text>
                  <Button
                        icon={
                            <Ionicons name="add-outline"
                            size={15}
                            color="#2596BE"
                            />
                        }
                        iconRight
                        type="outline"
                        containerStyle={styles.buttonStyle}
                        />
                    </View>
                  </Card.Title>

                  <View style={styles.viewStyle}>

                  <Text style={styles.textLabelSyle}> Name:     </Text>
                  
                  <Text style={styles.textSyle}> Namer der Baume </Text>
                  </View>

                  <View style={styles.viewStyle}>

                  <Text style={styles.textLabelSyle}> Alter: </Text>

                  <Text style={styles.textSyle}> Alter der Baume </Text>
                  </View>

                  
                  
                  <View style={styles.viewStyle}>

                  <Text style={styles.textLabelSyle}> Ökologische Informationen:     </Text>

                  <Text style={styles.textSyleDown}> 120g </Text> 
                  </View>

              


                </Card>
           
            
        )

        
    }

const styles = StyleSheet.create({
    container: {
     height:200,
     flexDirection: 'row',
     fontFamily:"Times New Roman"
    },
    buttonStyle:{
        height: 40, marginRight:30, width:40,
    },
    viewStyle :{
      flexDirection: 'row', marginBottom:15,
    },
    textSyle:{
      fontSize:15,
      textAlign:"left",
     
    },
    textSyleDown:{
      fontSize:15,
      textAlign:"left",
      marginTop:15,

    },
    textLabelSyle:{
      width:150, fontSize:15,
      color:"#333333"
    },
    titleLabelSyle:{
      width:270, fontSize:20, color:"#2596BE",
     
    },
    rowStyle :{
      flexDirection: 'row',height:30
    },
    titleLabelSyle:{
      width:270, fontSize:20, color:"#2596BE"
    },
  });