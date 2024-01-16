CREATE TABLE `entriesDependsOn` (
	`entryId` integer NOT NULL,
	`dependsOnId` integer NOT NULL,
	PRIMARY KEY(`dependsOnId`, `entryId`),
	FOREIGN KEY (`entryId`) REFERENCES `entries`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`dependsOnId`) REFERENCES `entries`(`id`) ON UPDATE no action ON DELETE no action
);
