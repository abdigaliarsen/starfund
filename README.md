CREATE TABLE `fighter_stats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `wins` int NOT NULL,
  `losses` int NOT NULL,
  `knockouts` int NOT NULL,
  `submissions` int NOT NULL,
  `lastFightDate` date NOT NULL,
  `careerDisclosedEarnings` int NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `fighter_personal_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
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

CREATE TABLE `fighter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ranking` int NOT NULL,
  `fighterStatsId` int NULL,
  `fighterPersonalDataId` int NULL,
  UNIQUE INDEX `REL_5a0e36a153e18834f4acb76ec2` (`fighterStatsId`),
  UNIQUE INDEX `REL_9cb29876fbc59bfb23db95ab2b` (`fighterPersonalDataId`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `fight` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `eventId` int NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `dateAndTime` date NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `fighter` ADD CONSTRAINT `FK_5a0e36a153e18834f4acb76ec22` 
FOREIGN KEY (`fighterStatsId`) REFERENCES `fighter_stats`(`id`) 
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `fighter` ADD CONSTRAINT `FK_9cb29876fbc59bfb23db95ab2be` 
FOREIGN KEY (`fighterPersonalDataId`) REFERENCES `fighter_personal_data`(`id`) 
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE `fight` ADD CONSTRAINT `FK_5b977841fa5df7809fede4adb2b` 
FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) 
ON DELETE NO ACTION ON UPDATE NO ACTION;