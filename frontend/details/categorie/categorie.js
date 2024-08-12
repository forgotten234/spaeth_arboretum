import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Button } from 'react-native-elements'
import { StyleSheet, Text, CheckBox, View} from 'react-native';


export default function Categorie(){

    
        return(
            
                <Card containerStyle ={styles.container}>
                
                  <Card.Title>
                  <View style={styles.rowStyle}>

                  <Text style={styles.titleLabelSyle}> Kategorien </Text>
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

                      <Text style={styles.textLabelSyle}> Champion Tree: </Text>

                      <CheckBox style={styles.checkBoxStyle}/>     

                  </View>
                  <View style={styles.viewStyle}>

                  <Text style={styles.textLabelSyle}> Botanische Stammesgeschichte:     </Text>
                  
                  <Text style={styles.textSyleDown}> Namer  </Text>
                  </View>

                <View style={styles.viewStyle}>

                <Text style={styles.textLabelSyle}> Nadelbaum: </Text>

                <CheckBox style={styles.checkBoxStyle}/>     
                
                </View>
                
                <View style={styles.viewStyle}>

                <Text style={styles.textLabelSyle}> Laubbaum: </Text>

                <CheckBox  style={styles.checkBoxStyle}/> 

                
                </View>

              


                </Card>
           
            
        )
    }
    const styles = StyleSheet.create({
      container: {
       height:230,
       flexDirection: 'row',
       marginBottom:10,
       fontFamily:"Times New Roman"
      },
      buttonStyle:{
          height: 40, marginRight:30, width:40,
      },
      viewStyle :{
        flexDirection: 'row', marginBottom:15,
      },
      textSyle:{
        justifyContent:"flex-end", fontSize:15,
      },
      textLabelSyle:{
        width:200, fontSize:15,
        color:"#333333"
      },
      rowStyle :{
        flexDirection: 'row',height:30
      },
      textSyleDown:{
        fontSize:15,
        textAlign:"left",
        marginTop:15,
  
      },
      titleLabelSyle:{
        width:270, fontSize:20, color:"#2596BE"
      },
      checkBoxStyle:{
        justifyContent:"flex-end", alignSelf: "center", width:40, height:20, fontSize:15, color: "#2596BE"
      }
    });