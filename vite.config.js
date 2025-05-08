import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd());

  // Log which env file is being used
  console.log(`🌱 Running in mode: ${mode}`);
  console.log(
    `📦 Loaded env variables from: .env.${mode} (plus any .env.local or .env.${mode}.local)`
  );

  return {
    plugins: [react()],
    define: {
      'process.env': env
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  };
});
