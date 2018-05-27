function stringToByteArray(str){
    var arr = [];
    for(var i=0;i<str.length;i++)
        arr.push(str.charCodeAt(i));
    return arr;
}

function byteArrayToString(arr){
    var str = '';
    for(var i=0;i<arr.length;i++)
        str += String.fromCharCode(arr[i]);
    return str;
}

module.exports = { stringToByteArray, byteArrayToString };