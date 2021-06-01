import React , {useState,useEffect} from 'react'
import { View, Text ,Button} from 'react-native'
import {ListItem} from 'react-native-elements'


export default function Page2({navigation}) {
    const[Products,setProducts] = useState([])
    useEffect(() => {
        
       Productsdata();
    },[])

    var productslist = Products;
    //fetch the data from the api
    const Productsdata =() =>{
        fetch('https://northwind.vercel.app/api/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        })
   }
//delete function which is related with the button
   const deleteproducts = (id) =>{
    let requestoptions = {
        method:'DELETE',
        body:JSON.stringify({id:id})
    }

    fetch('https://northwind.vercel.app/api/products/'+id, requestoptions)
    .then((res) => res.json())
    .then((data) => {
        Productsdata();

    })
}
//function to go to the product detail page 
//and pass the id when pressed to product detail page (props)
const gotoproductdetail= (idnum) => {
    let data =idnum
  navigation.push('Productdetail',data);
}
    return (
        <View >
            {
                productslist.map((item,key) => (
                    //display the items after fetched from the api
                    <ListItem key={key}  >
                        <ListItem.Content  style={{backgroundColor:'#98AFC7',margin:15,borderRadius:20,padding:15,borderWidth:7,borderColor:'grey',justifyContent:'center',alignItems:'center'}}>
                            <ListItem.Title style={{fontWeight:"bold" , fontSize:18}} onPress={() => gotoproductdetail(item.id)}>{item.name}</ListItem.Title>
                            <Text style={{fontSize:16}}>QuantityPerUnit: {item.quantityPerUnit}</Text>
                            <Text style={{fontSize:16}}>Price: {item.unitPrice}$</Text>

                            <View style={{margin:10}}>
                                <Button color='#d32f2f' title="delete" onPress={() => deleteproducts(item.id)}></Button>
                            </View>
                        
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            
        </View>
    )
}
