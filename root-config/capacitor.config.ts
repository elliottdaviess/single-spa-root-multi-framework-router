import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.admiral.uk",
  appName: "nextgen",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    hostname: "app",
    cleartext: true,
    allowNavigation: [
      "cqa81dpon01.admiral.non-prod.bolt.admiral.uk",
      "*cqa81dpon01.admiral.non-prod.bolt.admiral.uk",
      "*cqa81dpon01.admiral.non-prod.bolt.admiral.uk*"
    ]
  },
  
};

export default config;
