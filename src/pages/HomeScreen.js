import {view} from "react-native"
import { Button } from "react-native-web"

 export default function HommeScreen(){
    return(
<view>
   <text> Home Screen </text>

   <Button
    title="go to Details"
    onPress={()=> NavigationPreloadManager.navigate('Details')}
    />

    <Button
    title="go to Profile"
    onPress={()=> NavigationPreloadManager.navigate('Details')}/>
    </view>

    )
}