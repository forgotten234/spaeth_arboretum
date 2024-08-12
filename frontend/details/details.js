
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImagesSlides from './slide_image/ImagesSlides';
import Function from './functions/function';
import About from './about/about';
import Categorie from './categorie/categorie';
import Touren from './tour/tour';

export default function Details() {
  return (
    <View >
      <ScrollView>
      <ImagesSlides style={styles.slider} ></ImagesSlides>
      <Function></Function>
      <About></About> 
      <Categorie></Categorie>
      <Touren name="Touren" values={dataTouren} ></Touren>
      <Touren name="Weitere Bäume" values={dataBaumen}></Touren>
      </ScrollView>
    </View>
  );
}
const dataTouren =["Alte Bäume", "Geographie", "Jahreszeit" ]
const dataBaumen =["Baum X", "Baum Y", "Baum Z" ]
const styles = StyleSheet.create({
  
  slider:{
    height:300,
    flex:1,

  }
});
