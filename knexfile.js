let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/q3-api' : 'postgres://localhost/q3-api'

  module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL || connectionString,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  