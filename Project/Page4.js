import React, {useState,useEffect} from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'
import {ListItem} from 'react-native-elements'


export default function Page4({navigation}) {

    const[Category, setCategory] = useState([])
    useEffect(() => {
        Categoriesdata();

    },[])

    var Categorieslist = Category;
    
//fetch all the data from th api
    const Categoriesdata =() =>{
        fetch('https://northwind.vercel.app/api/categories')
        .then((res) => res.json())
        .then((data) => {
            setCategory(data);
        })

   }
// delete function ehich is delete the pressed category
//by passing the id when press delete button
//and then fetch specific api according to that id
//and then delete it
   const deletecategory = (idnumber) => {
    let bodycontent = {
        id:idnumber
    }

    let requestoptions = {
        method:'DELETE',
        body:JSON.stringify(bodycontent)
    }

    fetch('https://northwind.vercel.app/api/categories/'+idnumber, requestoptions)
    .then((res) => res.json())
    .then((data) => {
        Categoriesdata();

    })
}
// fuction to go to add category page(page5)
    const gotoaddcategory= () => {
    navigation.navigate('AddCategory');
  
  }
  //fuction to go to update category page(page6)
  const gotoupdatecategory= (idnum) => {
      let data =idnum
    navigation.push('UpdateCategory',data);
      console.log(idnum);
    
  
  }
    return (
        <View  >
            <View style={{margin:15,borderWidth:4,borderColor:'grey'}}>
                <Button  title="Add Category" onPress={() => gotoaddcategory()}></Button>
            </View>    
            {
                Categorieslist.map((item,key) => (

                    <ListItem key={key} >
                        <ListItem.Content style={{backgroundColor:'#FFDB58',margin:15,borderRadius:20,padding:15,borderWidth:7,borderColor:'grey',justifyContent:'center',alignItems:'center'}}>
                            <ListItem.Title style={{fontWeight:"bold" , fontSize:18}} >{item.name}</ListItem.Title>
                            <Text style={{fontSize:16}}>{item.description}</Text>

                            <View style={{flexDirection:'row'}}>

                                <View style={{margin:10}}>
                                    <Button color='#d32f2f' title="delete"  onPress={() => deletecategory(item.id)}></Button>
                                </View>

                                <View style={{margin:10}}>
                                    <Button color='#4fc3f7' title="update" onPress={() => gotoupdatecategory(item.id)}></Button>
                                </View>
                                
                             </View>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}
