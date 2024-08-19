import { Button } from "react-native-web"

export default function ProfileScreen{(navigation)}{
return(

<view>
<text>
 Profile Screen</text>

title="Go to Home"
onPress{()=>navigation.navigate('Home')}
</view>

/>

<Button
title= "Goto Profile"
onPress={()=>navigation.navigate(Profile)}
/>


)






}