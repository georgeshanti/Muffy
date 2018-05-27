import { stringToByteArray, byteArrayToString } from '../../Tasks';
import { ToastAndroid } from 'react-native';

var dgram = require('react-native-udp');

export default class Searcher{
    static NOT_PLAYING = 0;
    static PLAYING = 1;
    static PAUSED = 2;

    constructor(port){
        this.socket = dgram.createSocket('udp4');
        this.port = port;
        this.foundHandler = null;
        var searcher = this;
        this.socket.on(('message'), function(msg, rfo){
            var addr = rfo.address;
            var port = rfo.port;
            var msgStr = byteArrayToString(msg);
            var mesObj = JSON.parse(msgStr);
            if((mesObj['type']=='response') && (mesObj['app']=='Muffy') && (mesObj['response']=='broadcast-info')){
                var broadcastDetails = {
                    name: mesObj['name'],
                    host: addr,
                    port: port
                }
                searcher.foundHandler(broadcastDetails);
            }
            ToastAndroid.show(msgStr, ToastAndroid.LONG);
        });
    }

    registerBroadcastHandler(broadcastHandler){
        this.foundHandler = broadcastHandler;
    }

    bind(){
        this.socket.bind(this.port);
    }

    ping(){
        var remotePort = this.port;
        var remoteHost = '255.255.255.255';
        var JSONData = {
            app: 'Muffy',
            type: 'request',
            request: 'broadcast-info'
        };
        var buf = stringToByteArray(JSON.stringify(JSONData));
        this.socket.send(buf, 0, buf.length, remotePort, remoteHost, function(err) {
            if(err)
                ToastAndroid.show(err, ToastAndroid.SHORT);
        });
    }

}