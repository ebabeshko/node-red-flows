var MBAPHeader = [5];
var crc = 0xFFFF;

MBAPHeader[0]= msg.payload[0];
MBAPHeader[1]= msg.payload[1];
MBAPHeader[2]= msg.payload[2];
MBAPHeader[3]= msg.payload[3];
MBAPHeader[4]= msg.payload[4];
flow.set('MBAP_HEADER', MBAPHeader);

var ReqLen = msg.payload[5];
var MBLen = (msg.payload.length)-ReqLen;
var MBReq = [MBLen];

for (let x=0; x < MBLen;x++){
  MBReq[x] = msg.payload[x+ReqLen];
}

for (var req = 0; req < ReqLen; req++) {
  crc ^= MBReq[req];          // XOR byte into least sig. byte of crc
  
  for (var i = 8; i !== 0; i--) {    // Loop over each bit
    if ((crc & 0x0001) !== 0) {      // If the LSB is set
        crc >>= 1;                   // Shift right and XOR 0xA001
        crc ^= 0xA001;
    } else {                          // Else LSB is not set
      crc >>= 1;                     // Just shift right
    }
  }
}

var MyCRC = crc.toString(16);
MBReq[MBLen+1] = parseInt(MyCRC.substring(0,2),16);
MBReq[MBLen] = parseInt(MyCRC.substring(2,4),16);

var buf = Buffer.from(MBReq);
msg.payload = buf;
return msg;
