# Sample Modbus TCP to Modbus RTU Node-RED flow

Requires [node-red-node-serialport](https://github.com/node-red/node-red-nodes/tree/master/io/serialport)

* Receives Modbus TCP request from Modbus TCP master
* Converts Modbus TCP frame to Modbus RTU frame
* Sends request to Modbus RTU slave
* Receives response from Modbus RTU slave
* Converts Modbus RTU frame to Modbus TCP frame
* Provides Modbus TCP response to Modbus TCP master

![Modbus TCP to RTU Node-RED Flow](https://github.com/ebabeshko/node-red-flows/assets/63898296/2e9830b2-4a02-47d6-b1c3-6cac8be10b36)
