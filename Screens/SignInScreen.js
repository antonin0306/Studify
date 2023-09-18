import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class SignInScreen extends React.Component {

    render() {
        return(
            <View style = {{flex:1, backgroundColor : "red", alignItems: 'center', justifyContent: 'center',}}>
                <Text>
                    SignInScreen
                </Text>
            </View>
        )
    }
}