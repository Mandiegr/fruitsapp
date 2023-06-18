import React from 'react';
import Colors from '../consts/colors';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';




const Sabor = () => {
  return (
    <ScrollView horizontal  style={{width:'100%'}} > 
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Image source={require('../assets/images/manga.png')} style={styles.image} />
          <Text style={styles.text}>manga</Text> 
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/images/abacate.png')} style={styles.image} />
          <Text style={styles.text}>abacate</Text> 
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/images/maca.png')} style={styles.image} />
          <Text style={styles.text}>maça</Text> 
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/images/uva.png')} style={styles.image} />
          <Text style={styles.text}>uva</Text> 
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/images/banana.png')} style={styles.image} />
          <Text style={styles.text}>banana</Text> 
        </View>
       
       
      </View>
    </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 70,
    backgroundColor: 'red',
    
    
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    marginHorizontal: 10,
    
    
  },
  image: {
    width: 60,
    height: 60,
    marginHorizontal: 6,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    fontSize:16,
    color: Colors.white,
    fontWeight: 'bold',
  
  },
});

export default Sabor;
