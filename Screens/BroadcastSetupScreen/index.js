import React from 'react';
import { Text, View, ToastAndroid, TextInput} from 'react-native';
import { Button } from '../../Components';

export default class BroadcastSetupScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {broadcastName:''};
    }


    BroadcastScreen = ()=>{
        this.props.navigation.navigate('Broadcast',{broadcastName: this.state.broadcastName});
    }

    render() {
        return (
        <View>
            <TextInput
                onChangeText={(text) => this.setState({broadcastName: text})}
                value={this.state.broadcastName}
            />
            <Button title="Broadcast" onPress={this.BroadcastScreen} />
        </View>
        );
    }
}