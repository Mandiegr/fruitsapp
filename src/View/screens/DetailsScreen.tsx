import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'; 
import Produto from './../../components/produto';
import Colors from '../../consts/colors';





const DetailsScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amanda</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});



export default DetailsScreen;

