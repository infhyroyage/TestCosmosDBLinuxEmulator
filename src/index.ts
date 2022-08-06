import { CosmosClient } from "@azure/cosmos";
import { Item } from "../types/Item";

const URI = "https://localhost:8081";
const PRIMARY_KEY =
  "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";

const main = async () => {
  const cosmosClient = new CosmosClient({ endpoint: URI, key: PRIMARY_KEY });

  const { database } = await cosmosClient.databases.createIfNotExists({
    id: "TestDatabase",
  });

  const { container } = await database.containers.createIfNotExists({
    id: "TestContainer",
  });

  const newItem: Item = {
    id: "1",
    num: 1,
    name: "one",
  };
  const res = await container.items.upsert<Item>(newItem);
  console.log(res.statusCode);
  console.log(res.substatus);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
