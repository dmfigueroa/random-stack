CREATE TABLE `entriesToCategories` (
	`entryId` integer NOT NULL,
	`categoryId` integer NOT NULL,
	PRIMARY KEY(`categoryId`, `entryId`),
	FOREIGN KEY (`entryId`) REFERENCES `entries`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
