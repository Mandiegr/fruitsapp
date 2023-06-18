import React from 'react';
import Colors from '../../consts/colors';
import Sabor from '../../components/sabores';
import Produto from '../../components/produto';
import { View, SafeAreaView, StyleSheet, Text} from 'react-native'; 
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';






export const HomeScreen = () => {
  return (
    
   <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: Colors.pink}}>

      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={23} style={{marginLeft: 20, marginTop: 15, color: Colors.pink}} />
          <TextInput  placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="ellipsis-v" size={30} color={Colors.white} />
        </View>
      </View>

     <Sabor/> 


     <View style={{ backgroundColor: Colors.white}}>

      <Produto/>
     
     </View>

    </SafeAreaView>

    



  );
};

const styles = StyleSheet.create({

  searchContainer: {
    width: '80%',
    height: 50,
    backgroundColor: Colors.dark,
    borderRadius: 10,
    flexdirection: 'row', 
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
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: Colors.pinklight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  
});


