import React, {useState} from 'react'
import { View,Button} from 'react-native'
import {Input} from 'react-native-elements'

export default function Page5({route},{navigation}) {
    const[CategoryName, setCategoryName] = useState('')
    const[Description, setDescription] = useState('')
    
    console.warn(route)
    let data =route.params;
    
    const send =() => {
        // function to update data in the api 
        let requestoptions ={
            method:'PUT',
            body:JSON.stringify({name:CategoryName,description:Description}),
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }

        fetch('https://northwind.vercel.app/api/categories/'+data,requestoptions)
        .then((res) => res.json())
        .then((data) => {
            alert("Category Updated")
        })

    }

    return (
        
         <View> 
            <Input 
                style={{backgroundColor:'#b3e5fc', padding:15}}
                placeholder='Category Name'
                onChangeText={value =>setCategoryName(value)}
                />

            <Input
                style={{backgroundColor:'#b3e5fc', padding:15}}
               placeholder='Description' 
                onChangeText={value => setDescription(value)}
                />

                <Button 
                color='#1a237e'
                 onPress={() => send()} 
                 title='Update' ></Button>
        </View>
    )
        
}
