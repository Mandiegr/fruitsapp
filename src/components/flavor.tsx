import React from 'react';
import Colors from '../theme/colors';
import { View, Image, StyleSheet, Text, ScrollView, ImageSourcePropType} from 'react-native';
import { flavorListItems } from "../utils/flavors";
    
    export const Flavor = () => {
      type PropsItem = {
        flavorName: string;
        image: ImageSourcePropType;
      };
      const FlavorItem = ({ flavorName, image }: PropsItem) => (
        <View style={styles.item}>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>{flavorName}</Text>
        </View>
      );
    
      return (
        <View style={{ width: "100%", marginTop: 30,paddingBottom: 30, }}>


          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginHorizontal: 20,}}>
            <View style={styles.container}>
              <View style={styles.row}>                                                                                                                              
                {flavorListItems.map((flavorItem: PropsItem) => (
                  <FlavorItem
                    key={flavorItem.flavorName}
                    flavorName={flavorItem.flavorName}
                    image={flavorItem.image}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        alignItems: "center",
        backgroundColor: Colors.pink,
        alignContent: 'center',
        justifyContent: 'center'
      },
      row: {
        flexDirection: "row",
      },
      item: {
        alignItems: "center",
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
        textAlign: "center",
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
      },
    });


