import { stringToByteArray } from '../../Tasks';
import { ToastAndroid } from 'react-native';

var dgram = require('react-native-udp');

export default class Searcher{
    static NOT_PLAYING = 0;
    static PLAYING = 1;
    static PAUSED = 2;

    constructor(port){
        this.socket = dgram.createSocket('udp4');
        this.port = port;
    }

    bind(){
        this.socket.bind(this.port);
    }

    ping(){
        var remotePort = this.port;
        var remoteHost = '255.255.255.255';
        var buf = stringToByteArray("Onnu poda");
        this.socket.send(buf, 0, buf.length, remotePort, remoteHost, function(err) {
            ToastAndroid.show(err, ToastAndroid.SHORT);
        })
    }

    setMediaFile(uri){
        this.mediaFile = uri;
    }

    startBroadcasting(){
        this.socket.bind(this.port);
    }

}