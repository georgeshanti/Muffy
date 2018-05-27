import { byteArrayToString } from '../../Tasks';
import { ToastAndroid } from 'react-native';

var dgram = require('react-native-udp');

export default class Broadcaster{
    static NOT_PLAYING = 0;
    static PLAYING = 1;
    static PAUSED = 2;

    constructor(name, port){
        this.socket = dgram.createSocket('udp4');
        this.port = port;
        this.name = name;
        this.mediaFile = null;
        this.mediaStatus = 0;
    }

    setMessageListener(){
        var soc = this.socket;
        soc.on(('message'), function(msg, rfo){
            var addr = rfo.address;
            var port = rfo.port;
            var msgStr = byteArrayToString(msg);
            ToastAndroid.show(msgStr, ToastAndroid.SHORT);
            // var mesObj = JSON.parse(msg);
            // if(mesObj['request']=='stream'){

            // }
        });

    }

    bind(){
        this.socket.bind(this.port);
    }

    setMediaFile(uri){
        this.mediaFile = uri;
    }

    startBroadcasting(){
        this.socket.bind(this.port);
    }

}