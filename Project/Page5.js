import React, {useState} from 'react'
import { View,Button } from 'react-native'
import {Input} from 'react-native-elements'


export default function Page5() {
    const[CategoryName, setCategoryName] = useState('')
    const[Description, setDescription] = useState('')
    //function to send new data to the api
    const send =() => {
        let requestoptions ={
            method:'POST',
            body:JSON.stringify({name:CategoryName,description:Description}),
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }

        fetch('https://northwind.vercel.app/api/categories',requestoptions)
        .then((res) => res.json())
        .then((data) => {

            alert("Success")
        })
    }

    return (
        
        <View> 
             <View style={{backgroundColor:'#FFDB58'}}>
                <Input 
                placeholder='Category name'
                onChangeText={value =>setCategoryName(value)}
                />

                <Input
                placeholder='Description' 
                onChangeText={value => setDescription(value)}
                />
            </View>

                <Button 
                 onPress={() => send()} 
                 title='Send' ></Button>
        </View>
    )
        
}
