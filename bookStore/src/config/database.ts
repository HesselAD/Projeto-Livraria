import { Pool } from "pg";

const connectionString =
  "postgresql://postgres:NWJIPpsJsypjmyliFiCZSRSKUksguNpM@junction.proxy.rlwy.net:54382/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
