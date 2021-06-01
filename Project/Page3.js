import React, {useState,useEffect} from 'react'
import { View, Text } from 'react-native'

export default function Page3({route}) {
    const[Productdetail, setProductdetail] = useState([])
    useEffect(() => {
        Productdetaildata();

    },[])

    var detail = Productdetail;
    
    //take the data that we passed from the past page
    console.warn(route)
    let data =route.params;
    
    //fetch the data from the api with specific id 
    //id when pressed the product detail in the past page
    const Productdetaildata =() =>{
        fetch('https://northwind.vercel.app/api/products/'+data)
        .then((res) => res.json())
        .then((data) => {
            setProductdetail(data);
        })
   }
    return (
        <View style={{backgroundColor:'#98AFC7',margin:15,borderRadius:20,padding:15,borderWidth:7,borderColor:'grey'}}>
            <Text style={{fontSize:16}}>Id: {detail.id}</Text>
            <Text style={{fontSize:16}}>SupplierId: {detail.supplierId}</Text>
            <Text style={{fontSize:16}}>CategoryId: {detail.categoryId}</Text>
            <Text style={{fontSize:16}}>UnitsInStock: {detail.unitsInStock}</Text>
            <Text style={{fontSize:16}}>UnitsOnOrder: {detail.unitsOnOrder}</Text>
            
        </View>
    )
}
