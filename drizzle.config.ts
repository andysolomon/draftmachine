import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["draftmanager_*"],
  verbose: true,
  strict: true,
  out: "./drizzle",
} satisfies Config;
