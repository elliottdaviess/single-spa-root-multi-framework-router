import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.admiral.uk",
  appName: "nextgen",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    hostname: "app",
  },
};

export default config;
