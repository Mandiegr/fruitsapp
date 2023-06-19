import React from 'react';
import Colors from './../theme/colors';
import Color from '../utils/color';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, ImageSourcePropType } from 'react-native';
import { productListItems } from '../utils/products';
import { useNavigation } from '@react-navigation/native';


export const Product = () => {
  type PropsItem = {
    productName: string;
    image: ImageSourcePropType;
    value: string;
    description: string;
    bgColorImage:  keyof typeof Color;
    buttonLabel: string;
  };

  const ProductItem = ({ productName, image, value, description, bgColorImage = 'pinkLight', buttonLabel }: PropsItem) => {
    
    const navigation = useNavigation();

    const handleButtonPress = () => {
      navigation.navigate('DetailsScreen',{ productName, image, value, description, buttonLabel }); 
    };

  
    

    return (
      <View style={styles.item}>
        <View style={styles.productInfo}>
          <Text style={styles.name}>{productName}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.valueButtonContainer}>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.buttonLabel}>{buttonLabel}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color[bgColorImage],
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            maxWidth: 160,
            marginBottom: 20,
            borderRadius: 25,
          }}
        >
          <Image source={image} style={styles.image} />
        </View>
      </View>
    );
  };

  return (
    <View style={{ width: '100%', marginTop: 30, paddingBottom: 30 }}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            {productListItems.map((productItem: PropsItem) => (
              <ProductItem
                key={productItem.productName}
                productName={productItem.productName}
                image={productItem.image}
                value={productItem.value}
                description={productItem.description}
                buttonLabel={productItem.buttonLabel}
                bgColorImage={productItem.bgColorImage}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.orange,
  },

  description: {
    fontSize: 10,
    marginBottom: 15,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 50,
  },

  image: {
    width: '80%',
    maxWidth: 80,
    borderRadius: 25 ,
    height: '90%',
  },
  name: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },

  button: {
    width: 70,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pink,
    borderRadius: 10,
  },

  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.white,
  
   },

  productInfo: {
    flex: 1,
    marginRight: 10,
  },

  valueButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
