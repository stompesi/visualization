CREATE TABLE `BLOCK` (
  `BLOCK_HASH` varchar(256),
  `GAS_LIMIT` varchar(256),
  `NUMBER` varchar(256),
  `TIMESTAMP` varchar(256),
  `GAS_USED` varchar(256),
  `DIFFICULTY` varchar(256),
  `MINER` varchar(256),
  `NONCE` varchar(256),
  `PARENT_HASH` varchar(256),
  `RECEIPTS_ROOT` varchar(256),
  `SIZE` varchar(256),
  `STATE_ROOT` varchar(256),
  `TOTAL_DIFFICULTY` varchar(256),
  `TRANSACTIONS_ROOT` varchar(256),
  `EXTRA_DATA` varchar(256),
  `SHA3_UNCLES` varchar(256),
  PRIMARY KEY (`BLOCK_HASH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `TRANSACTION` (
  `TRANSACTION_HASH` varchar(256),
  `FROM` varchar(256),
  `TO` varchar(256),
  `INPUT` TEXT,
  `GAS` varchar(256),
  `GAS_PRICE` varchar(256),
  `NONCE` varchar(256),
  `TRANSACTION_INDEX` varchar(256),
  `VALUE` varchar(256),
  `V` varchar(256),
  `R` varchar(256),
  `S` varchar(256),
  `BLOCK_HASH` varchar(256),
  PRIMARY KEY (`TRANSACTION_HASH`),
  FOREIGN KEY (`BLOCK_HASH`) REFERENCES `BLOCK` (`BLOCK_HASH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;