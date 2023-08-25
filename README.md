![Entity Relationship Diagram](./ERD.png)

```sql
-- Create fighter_stats table
CREATE TABLE `fighter_stats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL,
  `wins` int NOT NULL,
  `losses` int NOT NULL,
  `knockouts` int NOT NULL,
  `submissions` int NOT NULL,
  `lastFightDate` date NOT NULL,
  `careerDisclosedEarnings` int NOT NULL,
  PRIMARY KEY (`id`)
);
```



```sql
-- Create fighter_personal_data table
CREATE TABLE `fighter_personal_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL,
  `fullname` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `dateOfBirth` date NOT NULL,
  `weightClass` varchar(255) NOT NULL,
  `weight` int NOT NULL,
  `height` int NOT NULL,
  `reach` int NOT NULL,
  `born` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```



```sql
-- Create fighter table
CREATE TABLE `fighter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL,
  `fighterStatsId` int NOT NULL,
  `fighterPersonalDataId` int NOT NULL,
  `ranking` int NOT NULL,
  UNIQUE INDEX `REL_fightStats` (`fighterStatsId`),
  UNIQUE INDEX `REL_fightPersonalDataId` (`fighterPersonalDataId`),
  PRIMARY KEY (`id`)
);
```



```sql
-- Create fighters_fights table
CREATE TABLE `fighters_fights` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL,
  `fighterId` int NOT NULL,
  `fightId` int NOT NULL,
  PRIMARY KEY (`id`)
);
```



```sql
-- Create fight table
CREATE TABLE `fight` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL,
  `eventId` int NOT NULL,
  PRIMARY KEY (`id`)
);
```



```sql
-- Create event table
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) NULL,
  `title` varchar(255) NOT NULL,
  `dateAndTime` date NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```



```sql
-- Add foreign key constraints
ALTER TABLE `fighter` ADD CONSTRAINT `FK_fighter_fighterStats` FOREIGN KEY (`fighterStatsId`) REFERENCES `fighter_stats`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `fighter` ADD CONSTRAINT `FK_fighter_fighterPersonalData` FOREIGN KEY (`fighterPersonalDataId`) REFERENCES `fighter_personal_data`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `fighters_fights` ADD CONSTRAINT `FK_fighter_fights_fight` FOREIGN KEY (`fightId`) REFERENCES `fight`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `fighters_fights` ADD CONSTRAINT `FK_fighter_fights_fighter` FOREIGN KEY (`fighterId`) REFERENCES `fighter`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `fight` ADD CONSTRAINT `FK_fight_event` FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
```
