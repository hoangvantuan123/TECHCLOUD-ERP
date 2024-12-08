module.exports = {
  apps: [{
    name: 'sv1_pda',
    script: 'yarn',
    args: 'start:prod',  // Thực thi lệnh `yarn start:prod`
    instances: 1,
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '2G',
    env: {
      PORT: 8181,
      NODE_ENV: 'development',
    },
    env_production: {
      PORT: 8181,
      NODE_ENV: 'production',
    },
  }],
};
