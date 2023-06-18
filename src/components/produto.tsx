import React, { useState } from 'react';
import Colors from '../consts/colors';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface ProductComponentProps {
  imageSource: any;
  value: string;
  description: string;
  name: string;
}

const Produto = () => {
  return (
    <View style={styles.container}>
      <ProductComponent
        imageSource={require('../assets/images/rose.png')}
        value="R$ 12,00"
        description="is simply dummy text of the printing "
        name="Apple Juice"
      />

      <ProductComponent
        imageSource={require('../assets/images/rose.png')}
        value="R$ 12,00"
        description="is simply dummy text of the printing "
        name="Pineapple Juice"
      />

      <ProductComponent
        name="Grape Juice"
        imageSource={require('../assets/images/rose.png')}
        value="R$ 12,00"
        description="is simply dummy text of the printing "
      />
    </View>
  );
};

const ProductComponent: React.FC<ProductComponentProps> = ({ imageSource, value, description, name }) => {
  const [quantity, setQuantity] = useState(1);
  const {navigate} = useNavigation();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const goToDetailsScreen = () => {
    navigate('DetailsScreen'); // Navegar para a página DetailsScreen
  };

  return (
    <TouchableOpacity style={styles.productContainer} onPress={goToDetailsScreen}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>

      <TouchableOpacity style={styles.quantityContainer}>
        <TouchableOpacity style={styles.borderBtn} onPress={decreaseQuantity}>
          <Text style={styles.borderBtnText}>-</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.quantityContainer}>
        <View style={styles.borderBtn}>
          <Text style={styles.quantity}>{quantity}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.quantityContainer}>
        <TouchableOpacity style={styles.borderBtn} onPress={increaseQuantity}>
          <Text style={styles.borderBtnText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.yellowlight,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
   
    backgroundColor: 'green'
  },
  image: {
    width: 120,
    height: 150,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -50,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 20,
  },
  name: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
  },
  borderBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pink,
    marginBottom: -50,
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: Colors.white,
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: Colors.white,
  },
});

export default Produto;
