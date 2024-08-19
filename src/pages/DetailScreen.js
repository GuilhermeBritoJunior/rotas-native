import { Button,Text,Vew } from "react-native-web"


const a={
nome: 'oi',
numeber: 1

}

const{nome, }= a

export default function DetailScreen(){
    return(
<View>
   
<text>Detail Screen</text>
<Button
title="Go to Home"
onPress={()=> NavigationPreloadManager.navigate('Home')}
/>
<Button
title= "Go to Profile"
onPress={()=> NavigationPreloadManager.navigate('Profile')}
/>

</View>




    )
}