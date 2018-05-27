import React from 'react';
import { Text, View, ToastAndroid} from 'react-native';
import Broadcaster from '../../Components/NetworkTasks/Broadcaster';
import { Button } from '../../Components';

export default class BroadcastScreen extends React.Component {

    constructor(props){
        super(props);
        this.broadcastName = this.props.navigation.getParam('broadcastName', 'Trial Run!');
        this.broadcaster = new Broadcaster(this.broadcastName, 15252);
        this.broadcaster.setMessageListener();
        this.broadcaster.bind();
    }


    Broadcast = ()=>{
        this.props.navigation.navigate('Broadcast');
    }

    render() {
        return (
        <View>
            <Text>{this.props.broadcastName}</Text>
        </View>
        );
    }
}