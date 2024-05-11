import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin, { EnvVars } from "vite-plugin-environment";

const envConfig: EnvVars = ["VITE_GRAPHQL_SERVER_URI"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(envConfig)],
});
