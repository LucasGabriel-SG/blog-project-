
export default () => ({
  port: process.env.PORT,
  database: {
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  }
});
