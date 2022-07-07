import React from "react";

function useLocalStorage(itemName,initialValue){
    const [error,setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item,setItem] = React.useState(initialValue)
    const [user,setUser] = React.useState('none')

    React.useEffect(() => {
      
      function addUser(user) {
        localStorage.setItem('user',user);
        setUser(user)
      }

      async function getMiUsuario(){
        let miUser = await prompt('¿Cual es tu nombre?')
        if(miUser.length >= 1 ){
          addUser(miUser)
        }
      }

      if(!localStorage.getItem('user')){
        getMiUsuario()
      }

      setTimeout(() => {
        try {
          const itemLocalStorage = localStorage.getItem(itemName);
          let parseItem;
    
          if(!itemLocalStorage){
    
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            parseItem = initialValue
    
          }else parseItem = JSON.parse(itemLocalStorage)
    
          setItem(parseItem)
          setLoading(false)
        }catch (err){
          setError(err)
        }
      }, 1000)
    })
  
  
    const saveItem = (newItem) => {
      try{
        const stringfiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringfiedItem)
        setItem(newItem)
      }
      catch(err){
        setError(err)
      }
    }
  
    return{
      item,
      saveItem,
      loading,
      error
    }
  }
  
  export { useLocalStorage }