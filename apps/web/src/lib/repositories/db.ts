import type { EntityTable } from "dexie";
import Dexie from "dexie";
import { v4 as uuidv4 } from "uuid";
import type { Note } from "../models/note";

export const db = new Dexie("TabNote") as Dexie & {
  notes: EntityTable<Note, "id">;
};

db.version(1).stores({
  notes: "++id, displayName, &databaseName, createdAt, updatedAt",
});

db.on("populate", (transaction) => {
  transaction.table("notes").add({
    displayName: "First Note",
    tableName: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});

db.notes.hook("creating", (_, obj) => {
  if (!obj.databaseName) {
    obj.databaseName = uuidv4();
  }
});

db.tables.forEach((table) => {
  table.hook("creating", (_, obj) => {
    const now = new Date();

    if (!obj.createdAt) obj.createdAt = now;
    obj.updatedAt = now;
  });

  table.hook("updating", (mods) => {
    return { ...mods, updatedAt: new Date() };
  });
});
