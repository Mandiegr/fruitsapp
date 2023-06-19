import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image,  TouchableOpacity } from 'react-native';
import Colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';






export const DetailsScreen = ( { route } ) => {
  const { productName, image, value, description, buttonLabel } = route.params;


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ backgroundColor: Colors.pink, height: "45%", flexDirection: 'row', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: "space-around" }}>
        <View style={styles.image}>
          <Image source={image} style={{ width: 200, height: 350 }} />
        </View> 

        <View style={styles.icon}>
          <Icon name="ellipsis-v" size={30} color={Colors.white} />
        </View>
      </View>

        <View style={styles.iconHeart}>
          <TouchableOpacity>
          <Icon name="heart" size={30} color={Colors.pink} style={{}} />
         </TouchableOpacity>
         </View>


         <View style={styles.item}>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={{fontSize: 25, marginBottom:20,}}>Lemonada Juice logo</Text>
         
         </View> 

         
         
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, }}> 
          <Text style={styles.value}>{value}</Text>
           <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonLabel}>{buttonLabel}</Text>
            </TouchableOpacity>
        </View>
        

        <View style={styles.aboutProducts}>
          <Text style={styles.aboutProductsText}>About Products</Text>
          <Text style={styles.description}>
            readable content of a page when looking at 
           The point of using Lorem Ipsum is that it has a 
           eadable content of a page when looking at 
           The point of using Lorem Ipsum is that it has a 
           distribution of letters, as opposed
           The point of using Lorem Ipsum is that it has a 
           eadable content of a page when looking at 
           The point of using Lorem Ipsum is that it has a  </Text>
        </View>

            <TouchableOpacity style={styles.buttonAdd}>
              <Text style={styles.buttonText} >Add To Bag</Text>
            </TouchableOpacity>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderShadow: 20,
  },
  icon: {
    marginRight: 20,
    marginTop: 40,
  },

  iconHeart: {
    backgroundColor: Colors.white,
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    marginHorizontal: 40,
  },
  item: {
    marginLeft: 20,

  },
  productName: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10,
  

  },
  value: {
   fontSize: 30,
   fontWeight: 'bold',
   marginRight: 10,
   marginBottom: 30,
  }, 

  button: {
    width: '25%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pink,
    borderRadius: 15,
   
 },

 buttonLabel: {
  fontSize: 20,
  fontWeight: 'bold',
  color: Colors.white,

 },

 buttonAdd: {
  width: '80%',
  height: 70,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.pink,
  borderRadius: 20,
  marginHorizontal: '10%',
  marginTop: 50,
  
 },

buttonText: {
  color: Colors.white,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  
},

 aboutProductsText: {
  fontSize: 25,
  
 },

  aboutProducts: {
    marginLeft: 20,

  },

  description: {
      
      fontSize: 10,
      marginBottom: 15,
      flexWrap: 'wrap',
  }
  
});



  



