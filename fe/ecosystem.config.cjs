module.exports = {
  apps: [
    {
      name: 'itm-erp2',
      script: 'npx',
      args: 'serve dist/ --single -p 3030',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '3G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
