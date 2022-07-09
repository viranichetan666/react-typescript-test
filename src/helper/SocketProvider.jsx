import React, { createContext, useEffect, useState } from "react";
import socketClient from "socket.io-client";
//   import { SOCKET_BASE } from 'helper/settings';

const socketContext = createContext();

const SocketProvider = (props) => {
  const [client, setClient] = useState(null);

  const connectSocket = () => {
    var socket = socketClient("", {
      //add "" SOCKET_BASE here
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 10 * 1000,
      autoConnect: true,
      transports: ["polling"],
      rejectUnauthorized: true,
    });
    socket.on("connection", () => {
      console.log(`I'm connected with the back-end`);
      setClient(socket);
    });
    // socket.on("user-request", (data) => {
    //     console.log('from send request server', data);
    // });
    socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        socket.connect();
      }
    });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <socketContext.Provider value={client}>
      {props.children}
    </socketContext.Provider>
  );
};

export { SocketProvider, socketContext };
