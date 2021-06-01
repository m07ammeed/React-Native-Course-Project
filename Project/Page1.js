import React from 'react';
import {View } from 'react-native';
import {Text,Icon} from 'react-native-elements';

export default function  Page1({navigation}) {
//function for product field to go to the products page
  const gotoproducts= () => {
    navigation.navigate('Products');

}
//function for Category field to go to the categories page
const gotocategories= () => {
  navigation.navigate('Categories');

}
//function for order field to go to the orders page
const gotoOrders= () => {
  navigation.navigate('Orders');

}

  return (

    <View style = {{flex:1, padding:20, borderWidth:8,borderColor:'gray',borderStyle:'outset',backgroundColor:'#FBF6D9'}}>
    {/*header*/}
      <View style = {{flex:1,flexDirection:'row',borderBottomWidth:4,borderStyle:'dotted',borderColor:'gray'}}>
        <Text h1>OboOStore</Text>
        
      </View>

      <View style = {{flex:9}}> 
        
          {/*products field*/}
          <View style={{flex:3,backgroundColor:'#98AFC7',justifyContent:'center',alignItems:'center',margin:30,borderRadius:20}}>
          
            <Text h2 style={{color:'white'}} onPress={() => gotoproducts()}>Products</Text>
            <Icon
              reverse
              name='cube-outline'
              type='ionicon'
              color='#517fa4'
              onPress={() => gotoproducts()}
              
            />
            

          </View>
          {/*Category field*/}
          <View style={{flex:3,backgroundColor:'#FFDB58',justifyContent:'center',alignItems:'center',margin:30,borderRadius:20}}>

            <Text h2 style={{color:'white'}} onPress={() => gotocategories()}>Categories</Text>
            <Icon
              reverse
              name='list-outline'
              type='ionicon'
               color='#FBB917'
               onPress={() => gotocategories()}
            />
            

          </View>
          {/*Orders field*/}
          <View style={{flex:3,backgroundColor:'#FFCBA4',justifyContent:'center',alignItems:'center',margin:30,borderRadius:20}}>

            <Text h2 style={{color:'white'}}  onPress={() => gotoOrders()}>Orders</Text>
            <Icon
              reverse
              name='reader-outline'
              type='ionicon'
               color='#E2A76F'
               onPress={() => gotoOrders()}
            />

          </View>

      </View>

    </View>
  );
}
