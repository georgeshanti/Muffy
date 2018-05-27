
# Muffy
This is an Android app built on React Native which allows users to stream music from their phones to devices on the same Wifi Network.

# Running on Android device via adb
Connect the android device to the computer via USB cable or have it be on the same WiFi Network. Connect to the phone via adb.

Command to check if it is connected:
```sh
~$ adb devices
```
This will list out all the android devices connect to the machine

Command to connect over Wifi:
```sh
~$ adb connect <IP Address>:<Port>
~$ adb devices
```
You must retrieve the IP Address of the android device on the WiFi Network and the port is most often 5555. After connecting to the device make sure it is listed.

Once you have connect to the android device via adb, go to the repo and run
```sh
~/Muffy$ react-native start
~/Muffy$ react-native run-android
```
