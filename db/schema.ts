import {
  sqliteTable,
  text,
  blob,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const entry = sqliteTable("entries", {
  id: integer("id").primaryKey(),
  name: text("name"),
  link: text("link"),
  logo: blob("logo"),
  categoryId: integer("categoryId"),
});

export const entryRelations = relations(entry, ({ many, one }) => ({
  dependsOn: many(entriesDependsOn, { relationName: "dependsOn" }),
  category: one(category, {
    fields: [entry.categoryId],
    references: [category.id],
    relationName: "category",
  }),
}));

export const category = sqliteTable("categories", {
  id: integer("id").primaryKey(),
  name: text("name"),
});

export const categoryRelations = relations(category, ({ many }) => ({
  entries: many(entry),
}));

export const entriesDependsOn = sqliteTable(
  "entriesDependsOn",
  {
    entryId: integer("entryId")
      .notNull()
      .references(() => entry.id),
    dependsOnId: integer("dependsOnId")
      .notNull()
      .references(() => entry.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.entryId, t.dependsOnId] }),
  })
);

export const entriesDependsOnRelations = relations(
  entriesDependsOn,
  ({ one }) => ({
    entry: one(entry, {
      fields: [entriesDependsOn.entryId],
      references: [entry.id],
      relationName: "entry",
    }),
    dependsOn: one(entry, {
      fields: [entriesDependsOn.dependsOnId],
      references: [entry.id],
      relationName: "dependsOn",
    }),
  })
);
