CREATE TABLE `categories` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `entries` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`link` text,
	`logo` blob
);
