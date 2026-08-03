module.exports = {
  apps: [
    {
      name: "atende-vende",
      script: "dist/server/index.mjs",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "127.0.0.1",
      },
      max_memory_restart: "512M",
      autorestart: true,
    },
  ],
};
