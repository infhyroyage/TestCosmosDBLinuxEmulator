import { CosmosClient } from "@azure/cosmos";

const URI = "https://localhost:8081";
const PRIMARY_KEY =
  "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";

const main = async () => {
  const cosmosClient = new CosmosClient({ endpoint: URI, key: PRIMARY_KEY });
  await cosmosClient.databases.create({ id: "TestDatabase" });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
