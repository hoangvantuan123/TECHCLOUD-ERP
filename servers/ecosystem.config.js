module.exports = {
    apps: [{
            name: 'erp-auth',
            script: './server_sv2/dist/main.js',
            instances: 1,
            exec_mode: 'cluster',
            watch: false,
            max_memory_restart: '2G',
            env: {
                PORT: 8083,
                NODE_ENV: 'development',
            },
            env_production: {
                PORT: 8083,
                NODE_ENV: 'production',
            },
        },
        {
            name: 'erp-warehouse',
            script: './server_sv1/dist/main.js',
            instances: 1,
            exec_mode: 'cluster',
            watch: false,
            max_memory_restart: '5G',
            env: {
                PORT: 8086,
                NODE_ENV: 'development',
            },
            env_production: {
                PORT: 8086,
                NODE_ENV: 'production',
            },
        },

    ],
};