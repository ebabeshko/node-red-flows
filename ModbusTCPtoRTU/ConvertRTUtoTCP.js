if (msg.payload.length > 0) {
  var resLen = msg.payload.length - 2;
  var respond = [];
  respond[0] = flow.get('MBAP_HEADER')[0];
  respond[1] = flow.get('MBAP_HEADER')[1];
  respond[2] = flow.get('MBAP_HEADER')[2];
  respond[3] = flow.get('MBAP_HEADER')[3];
  respond[4] = flow.get('MBAP_HEADER')[4];
  respond[5] = resLen;

  for (let req = 6; req < resLen+6; req++) {
    respond[req]= msg.payload[req-6];
  }
  msg.payload = Buffer.from(respond);
  return msg;
} else {
   return null;
}
