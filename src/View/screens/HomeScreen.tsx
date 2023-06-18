import React from 'react';
import Colors from './../../theme/colors';
import {Flavor} from '../../components/flavor';
import ProductList from '../../components/product';
import { View, SafeAreaView, StyleSheet} from 'react-native'; 
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';







export const HomeScreen = () => {
  return (
    
    <View style={{backgroundColor:Colors.yellowLight}}>
   <SafeAreaView style={{ backgroundColor: Colors.green}}>
      <View style={{marginTop: 30, flexDirection: 'row', marginHorizontal: 20,}}>
        <View style={styles.searchContainer }>
          <Icon name="search" size={23} style={{marginLeft: 20, marginTop: 15, color: Colors.pink}} />
          <TextInput  placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="ellipsis-v" size={30} color={Colors.white} />
        </View>
      </View>

      <Flavor/> 

     <View style={{ backgroundColor: Colors.white}}>
      <ProductList/>
      <ProductList/>
     
     </View>

    </SafeAreaView>
    </View>


  );
};

const styles = StyleSheet.create({

  searchContainer: {
    width: '80%',
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row', 
    marginTop: 30,
  },
  
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.pink,
    marginLeft: 60,
    position: 'absolute',
    marginTop: 15,
  },

  sortBtn: {
    marginLeft: 20,
    height: 50,
    width: 50,
    backgroundColor: Colors.pinkLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  
});


