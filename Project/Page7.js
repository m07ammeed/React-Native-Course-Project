import React, {useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import {ListItem} from 'react-native-elements'

export default function Page7() {

    const[Orders,setOrders] = useState([])
    useEffect(() => {
        Ordersdata();
    },[])

    var Orderslist = Orders;
    //fetch data from the api
    const Ordersdata =() =>{
        fetch('https://northwind.vercel.app/api/Orders')
        .then((res) => res.json())
        .then((data) => {
            setOrders(data);
        })
   }
    return (
        <View>
            {
                Orderslist.map((item,key) => (
                    //display the items after fetched from the api
        
                    <ListItem key={key} >
                        <ListItem.Content  style={{backgroundColor:'#FFCBA4',margin:15,borderRadius:20,padding:15,borderWidth:7,borderColor:'grey',justifyContent:'center',alignItems:'center'}}>
                            <ListItem.Title style={{fontWeight:"bold" , fontSize:18}} >CustomerId: {item.customerId}</ListItem.Title>
                            <Text style={{fontSize:16}}>id: {item.id}</Text>
                            <Text style={{fontSize:16}}>Country: {item.shipAddress.country}</Text>
                            <Text style={{fontSize:16}}>City: {item.shipAddress.city}</Text>
                            <Text style={{fontSize:16}}>PostalCode: {item.shipAddress.postalCode}</Text>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}
