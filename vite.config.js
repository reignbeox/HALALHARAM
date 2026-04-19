import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file from the current directory
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // This tells Vite your site is at reignbeox.github.io/HALALHARAM/
    base: '/HALALHARAM/', 
    plugins: [react()],
    define: {
      // This forces the variable into the global scope of your app
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
      // We also map it to the Vite standard just in case
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    }
  };
});