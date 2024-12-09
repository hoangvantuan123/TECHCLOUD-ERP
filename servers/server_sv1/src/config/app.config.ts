export const appConfig = {
    port: parseInt(process.env.PORT, 10) || 8086,
    globalPrefix: 'api',
    corsOptions: {
        origin: ['http://localhost:3030', 'http://192.168.60.50:3030', 'http://192.168.63.93:3030'],
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    },
};
