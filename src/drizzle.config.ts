//6번 경로 확실치 않음.

// import { cwd } from 'node:process'
// import { loadEnvConfig } from '@next/env'

// loadEnvConfig(cwd())

// import { defineConfig } from 'drizzle-kit'
// export default defineConfig({
//   dialect: 'postgresql',
//   schema: './db/schema.ts',
//   out: './drizzle',
//   dbCredentials: {
//     url: 'postgres://postgres.gtaewptzdtmkojkuviej:KST2CBOaC37mJp95@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x',
//   },
// })

import { cwd } from 'node:process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
})
