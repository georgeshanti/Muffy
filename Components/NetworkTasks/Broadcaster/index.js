import { byteArrayToString , stringToByteArray } from '../../Tasks';
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
        var screen = this.screen;
        soc.on(('message'), function(msg, rfo){
            var addr = rfo.address;
            var port = rfo.port;
            var msgStr = byteArrayToString(msg).replace('\n','');
            ToastAndroid.show(msgStr, ToastAndroid.LONG);
            var mesObj = JSON.parse(msgStr);
            if((mesObj['type']=='request') && (mesObj['app']=='Muffy')){
                if(mesObj['request']=='broadcast-info'){
                    var JSONData = {
                        "app": "Muffy",
                        "type": "response",
                        "response": "broadcast-info",
                        "name": "Trial Run"
                    };
                    var JSONString = JSON.stringify(JSONData);
                    var buf = stringToByteArray(JSONString);
                    soc.send(buf, 0, buf.length, port, addr, function(err) {
                        if(err)
                            ToastAndroid.show(err, ToastAndroid.SHORT);
                    });
                }
            }
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