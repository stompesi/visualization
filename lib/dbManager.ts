import {Sequelize} from 'sequelize-typescript'

import Block from '../models/block'
import Transaction from '../models/transaction'

const dbConfig = {
  "host": "localhost",
  "port": 3306,
  "database": "visualization",
  "user": "root",
  "password": "gkswhdqls"
};

export const sequelize = new Sequelize({
	dialect: 'mysql',

	host: dbConfig.host,
	port: dbConfig.port,

	database: dbConfig.database,
	username: dbConfig.user,
	password: dbConfig.password,

	logging: false,

	storage: ':memory:',
	timezone: '+09:00',
	pool: {
		max: 5,
		min: 5,
		idle: 30
	}
});

sequelize.addModels([Block, Transaction]);