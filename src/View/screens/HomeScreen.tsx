import React from 'react';
import Colors from './../../theme/colors';
import {Flavor} from '../../components/flavor';
import {Product} from '../../components/product';
import { View, SafeAreaView, StyleSheet, ViewBase, ScrollView} from 'react-native'; 
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';







export const HomeScreen = () => {
  return (
    
    
   <SafeAreaView style={{flex:1}}>

    <View style={{backgroundColor:Colors.pink, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, }}>
      <View style={{marginTop: 30, flexDirection: 'row', marginHorizontal: 20,}}>
        <View style={styles.searchContainer }>
          <Icon name="search" size={23} style={{marginLeft: 20, marginTop: 15, color: Colors.pink}} />
          <TextInput  placeholder="Search" placeholderTextColor={Colors.pink} style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="ellipsis-v" size={30} color={Colors.white} />
        </View>
      </View>
      <Flavor/> 
    </View> 
      

     <View >
     <ScrollView>
     <Product/>
    
     </ScrollView>
     </View>

    </SafeAreaView>
 


  );
};

const styles = StyleSheet.create({

  searchContainer: {
    width: '82%',
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
    marginLeft: 30,
    height: 50,
    width: 50,
    backgroundColor: Colors.pinkLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  
  },
  
});


