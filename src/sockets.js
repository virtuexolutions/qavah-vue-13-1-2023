import {io} from "socket.io-client";
//  Socket IO Connection

const connectSocket = async () => {
    console.log(`Socket Connecting...`);

    const socketInstance = await io("ws://localhost:5000/");
    socketInstance.emit('message', 'Connected On Client !')

    socketInstance.on('connect', () => {
        // console.log(`Socket Connection Established ! - ${socketInstance.id}`);
    });

    socketInstance.on('error', (error) => {
        // console.log('Socket Error: ',error)
    })

    socketInstance.on('message', (data) => {
        // console.log('Socket Message Received From Server -> ',data)
    })
}


connectSocket()
  