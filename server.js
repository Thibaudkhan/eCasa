var SerialPort = require("serialport");
var xbee_api = require("xbee-api");
var C = xbee_api.constants;
require("dotenv").config();

const SERIAL_PORT = process.env.SERIAL_PORT;

var xbeeAPI = new xbee_api.XBeeAPI({
  api_mode: 2,
});

let serialport = new SerialPort(
  "COM3",
  {
    baudRate: process.env.SERIAL_BAUDRATE | 9600,
  },
  function (err) {
    if (err) {
      return console.log("Error: ", err.message);
    }
  }
);

serialport.pipe(xbeeAPI.parser);
xbeeAPI.builder.pipe(serialport);

associateRemoteControlWithLed(xbeeAPI, "0013a20041582fb1", [
  "0013a20041a713b4",
]);

function associateRemoteControlWithLed(
  xbeeAPI,
  remoteMacAddress,
  ledMacAddressArray
) {
  xbeeAPI.parser.on("data", function (frame) {
    if (C.FRAME_TYPE.ZIGBEE_IO_DATA_SAMPLE_RX === frame.type) {
      console.log(frame.digitalSamples);
      // Allumer
      if (
        remoteMacAddress === frame.remote64 &&
        frame.digitalSamples.DIO0 == 1
      ) {
        for (var i in ledMacAddressArray) {
          ledMacAddress = ledMacAddressArray[i];
          var commands = ["D0", "D1", "D2", "D3"];

          for (var j in commands) {
            console.log("command : " + commands[j]);

            var frame_obj = {
              // AT Request to be sent
              type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
              destination64: ledMacAddress,
              command: commands[j],
              commandParameter: [4],
            };
            xbeeAPI.builder.write(frame_obj);
          }
        }
      }
      // eteindre
      else if (
        remoteMacAddress === frame.remote64 &&
        frame.digitalSamples.DIO1 == 1
      ) {
        for (var i in ledMacAddressArray) {
          ledMacAddress = ledMacAddressArray[i];
          var commands = ["D0", "D1", "D2", "D3"];

          for (var j in commands) {
            console.log("command : " + commands[j]);

            var frame_obj = {
              // AT Request to be sent
              type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
              destination64: ledMacAddress,
              command: commands[j],
              commandParameter: [5],
            };
            xbeeAPI.builder.write(frame_obj);
          }
        }
      }
    }
  });
}

serialport.on("open", function () {
  var frame_obj = {
    // AT Request to be sent
    type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
    destination64: "0013A20041A713B4",
    command: "AD3",
    commandParameter: [1023],
  };
  xbeeAPI.builder.write(frame_obj);
  // var frame_obj = {
  //   // AT Request to be sent
  //   type: C.FRAME_TYPE.AT_COMMAND,
  //   command: "NI",
  //   commandParameter: [],
  // };
  // xbeeAPI.builder.write(frame_obj);
  // frame_obj = {
  //   // AT Request to be sent
  //   type: C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
  //   destination64: "FFFFFFFFFFFFFFFF",
  //   command: "NI",
  //   commandParameter: [],
  // };
  // xbeeAPI.builder.write(frame_obj);
});

// All frames parsed by the XBee will be emitted here

// xbeeAPI.parser.on("data", function (frame) {
//   //on new device is joined, register it

//   //on packet received, dispatch event
//   //let dataReceived = String.fromCharCode.apply(null, frame.data);
//   if (C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET === frame.type) {
//     console.log("C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET");
//     let dataReceived = String.fromCharCode.apply(null, frame.data);
//     console.log(">> ZIGBEE_RECEIVE_PACKET >", dataReceived);
//   }

//   if (C.FRAME_TYPE.NODE_IDENTIFICATION === frame.type) {
//     // let dataReceived = String.fromCharCode.apply(null, frame.nodeIdentifier);
//     console.log("NODE_IDENTIFICATION");
//   } else if (C.FRAME_TYPE.ZIGBEE_IO_DATA_SAMPLE_RX === frame.type) {
//     console.log("ZIGBEE_IO_DATA_SAMPLE_RX");
//     console.log(frame.remote64);
//     console.log(frame.digitalSamples);
//     //console.log(frame.analogSamples.AD0);
//     //console.log(frame.analogSamples.AD1);
//     //console.log(frame.analogSamples.AD2);
//   } else if (C.FRAME_TYPE.REMOTE_COMMAND_RESPONSE === frame.type) {
//     console.log("REMOTE_COMMAND_RESPONSE");
//   } else {
//     console.debug(frame);
//     let dataReceived = String.fromCharCode.apply(null, frame.commandData);
//     console.log(dataReceived);
//   }
// });
