import React, { useState } from 'react';
import Colors from './../theme/colors';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface ProductComponentProps {
  imageSource: any;
  value: string;
  description: string;
  name: string;
  bgColorImage: string;
  
}

const ProductList = () => {
  return (
    <View style={styles.container}>
      <ProductComponent
        imageSource={require("../assets/images/rose.png")}
        value="R$ 12,00"
        description="is simply dummy text of the printing "
        name="Apple Juice"
        bgColorImage={Colors.purple}
      />

      <ProductComponent
        imageSource={require("../assets/images/rose.png")}
        value="R$ 12,00"
        description="is simply dummy text of the printing "
        name="Pineapple Juice"
        bgColorImage={Colors.pinkLight}
      />

      <ProductComponent
        name="Grape Juice"
        imageSource={require("../assets/images/rose.png")}
        value="R$ 12,00"
        description="is simply dummy text of the printing "
        bgColorImage={Colors.purple}
      />
    </View>
  );
};

const ProductComponent: React.FC<ProductComponentProps> = ({
  imageSource,
  value,
  description,
  name,
  bgColorImage = Colors.pink,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { navigate } = useNavigation();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const goToDetailsScreen = () => {
    navigate("DetailsScreen"); // Navegar para a página DetailsScreen
  };

  return (
    <View style={styles.productContainer}>
      <View style={{ ...styles.infoContainer, flex: 1 }}>
        <View style={{ paddingRight: 20 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.valueContainer}>
            <Text style={styles.value}>{value}</Text>

            <TouchableOpacity
              onPress={goToDetailsScreen}
              style={[
                styles.quantityContainer,
                styles.borderBtn,
                { borderRadius: 10 },
              ]}
            >
              <Text style={{ ...styles.borderBtnText, fontSize: 15 }}>Go</Text>
            </TouchableOpacity>
            {/* <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.borderBtn}
              onPress={decreaseQuantity}
            >
              <Text style={styles.borderBtnText}>-</Text>
            </TouchableOpacity>
            <View style={styles.borderBtn}>
              <Text style={styles.quantity}>{quantity}</Text>
            </View>

            <TouchableOpacity
              style={styles.borderBtn}
              onPress={increaseQuantity}
            >
              <Text style={styles.borderBtnText}>+</Text>
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: bgColorImage,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: 200,
          maxWidth: 160,
          borderRadius: 25,
        }}
      >
        <Image source={imageSource} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  productContainer: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {},
  image: {
    width: "80%",
    maxWidth: 80,
    height: "90%",
    borderRadius: 20,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  name: {
    color: Colors.dark,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    marginBottom: 15,
  },
  borderBtn: {
    width: 40,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.pink,
  },
  borderBtnText: {
    fontWeight: "bold",
    fontSize: 19,
    color: Colors.white,
  },
  quantityContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: Colors.white,
  },
});

export default ProductList;