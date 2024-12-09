import { defineConfig } from "drizzle-kit";

import { env } from "~/env";

export default defineConfig({
    schema: "./src/server/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: env.POSTGRES_URL,
        ssl: true,
    },
});
