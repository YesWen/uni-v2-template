export function inArray(arr, key, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) {
            return i;
        }
    }
    return -1;
}


export function ab2hex(buffer) {
    const hexArr = Array.prototype.map.call(
        new Uint8Array(buffer),
        function (bit) {
            return ('00' + bit.toString(16)).slice(-2)
        }
    )
    return hexArr.join('')
}

//16进制转字符串
export function hexCharCodeToStr(hexCharCodeStr) {
    var trimedStr = hexCharCodeStr.trim();
    var rawStr =
        trimedStr.substr(0, 2).toLowerCase() === "0x"
            ?
            trimedStr.substr(2)
            :
            trimedStr;
    var len = rawStr.length;
    if (len % 2 !== 0) {
        alert("Illegal Format ASCII Code!");
        return "";
    }
    var curCharCode;
    var resultStr = [];
    for (var i = 0; i < len; i = i + 2) {
        curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
        resultStr.push(String.fromCharCode(curCharCode));
    }
    return resultStr.join("");
}
//字符串转16进制
export function strToHexCharCode(str) {
    if (str === "")
        return "";
    var hexCharCode = [];
    for (var i = 0; i < str.length; i++) {
        hexCharCode.push((str.charCodeAt(i)).toString(16));
    }
    return hexCharCode.join("");
}

//16进制转2进制
export function hex_to_bin(str) {
    let hex_array = [{ key: 0, val: "0000" }, { key: 1, val: "0001" }, { key: 2, val: "0010" }, { key: 3, val: "0011" }, { key: 4, val: "0100" }, { key: 5, val: "0101" }, { key: 6, val: "0110" }, { key: 7, val: "0111" },
    { key: 8, val: "1000" }, { key: 9, val: "1001" }, { key: 'a', val: "1010" }, { key: 'b', val: "1011" }, { key: 'c', val: "1100" }, { key: 'd', val: "1101" }, { key: 'e', val: "1110" }, { key: 'f', val: "1111" }]

    let value = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < hex_array.length; j++) {
            if (str.charAt(i).toLowerCase() == hex_array[j].key) {
                value = value.concat(hex_array[j].val)
                break
            }
        }
    }
    console.log(value)
    return value
}

export function htoi(hex) {
    if (hex.length != 2) {
        console.log("参数不正常：" + hex);
    }
    else {
        var a = hex.toLowerCase().charCodeAt(0);
        var b = hex.toLowerCase().charCodeAt(1);
        if (a > 47 && a < 58) {
            a = (a - 48) * 16;
        }
        else if (a > 96 && a < 103) {
            a = (a - 87) * 16;
        }
        else {
            console.log("参数错误");
            return 0;
        }
        if (b > 47 && b < 58) {

        }
        else if (b > 96 && b < 103) {
            a = a + b - 87;
        }
        else {
            console.log("参数错误");
            return 0;
        }
        return a;
    }
}

export function toUtf8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}
export function stringToBytes(str) {
    var ch, st, re = [];
    for (var i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);  // get char  
        st = [];                 // set up "stack"  
        do {
            st.push(ch & 0xFF);  // push byte to stack  
            ch = ch >> 8;          // shift value down by 1 byte  
        }
        while (ch);
        // add stack contents to result  
        // done because chars have "wrong" endianness  
        re = re.concat(st.reverse());
    }
    // return an array of bytes  
    return re;
}

