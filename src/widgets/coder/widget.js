import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/v2/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    workspaces: {
      method: "GET",
      endpoint: "workspaces",
    },
  },
};

export default widget;
