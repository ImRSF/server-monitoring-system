import { initStore } from "../hooks/store";

import { updateObject } from "../utils/helpers";

const configureStore = () => {
  const actions = {
    SWITCH_SERVER: (curState, serverId) => {
      const server = curState.servers.find(
        (server) => server.ServerID === serverId
      );
      return updateObject(curState, { selectedServer: server });
    },
  };
  initStore(actions, {
    selectedServer: {
      ServerID: "1",
      ServerName: "Server 10c",
      IPAddress: "192.168.1.2",
      OS: "Windows 10",
      Location: "Alabel, Sarangani Province",
    },
    servers: [
      {
        ServerID: "1",
        ServerName: "Server 10c",
        IPAddress: "192.168.1.2",
        OS: "Windows 10",
        Location: "Alabel, Sarangani Province",
      },
      {
        ServerID: "2",
        ServerName: "Server 17c",
        IPAddress: "192.168.200.38",
        OS: "Windows 7",
        Location: "Bula sa may basketbolan",
      },
    ],
  });
};

export default configureStore;
