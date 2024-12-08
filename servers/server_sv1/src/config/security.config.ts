export const jwtConstants = {
  secret: 'P@5sW0rD!$R3c3nT@2024',
};


export const securityConfig = {
  jwtSecret: process.env.JWT_SECRET || 'P@5sW0rD!$R3c3nT@2024',
  saltRounds: 10,
  csrf: {
    cookie: true,
  },
};
