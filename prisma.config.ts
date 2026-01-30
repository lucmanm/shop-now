import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    // seed: 'tsx ./prisma/seed.ts', //Optional: Command to run your seed script
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})

