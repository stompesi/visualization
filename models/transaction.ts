import {
  AllowNull, 
  Column, 
  DataType, 
  Model, 
  Table, 
  Unique,
  CreatedAt,
  PrimaryKey,
  ForeignKey
} from 'sequelize-typescript'
import Block from './block'

@Table({
  underscored: true,
  underscoredAll: true,
  updatedAt: false,
  tableName: 'TRANSACTION'
})
export default class Transaction extends Model<Transaction> {
  @PrimaryKey
  @Column({type: DataType.STRING(256), field: 'TRANSACTION_HASH'})
  transactionHash: string;

  @ForeignKey(() => Block)
  @Column({type: DataType.STRING(256), field: 'BLOCK_HASH'})
  blockHash: string;

  @Column({type: DataType.STRING(256), field: 'FROM'})
  from: string;

  @Column({type: DataType.STRING(256), field: 'TO'})
  to: string;

  @Column({type: DataType.TEXT, field: 'INPUT'})
  input: string;

  @Column({type: DataType.STRING(256), field: 'GAS'})
  gas: string;

  @Column({type: DataType.STRING(256), field: 'GAS_PRICE'})
  gasPrice: string;

  @Column({type: DataType.STRING(256), field: 'NONCE'})
  nonce: string;

  @Column({type: DataType.STRING(256), field: 'TRANSACTION_INDEX'})
  transactionIndex: string;

  @Column({type: DataType.STRING(256), field: 'VALUE'})
  value: string;

  @Column({type: DataType.STRING(256), field: 'V'})
  v: string;

  @Column({type: DataType.STRING(256), field: 'R'})
  r: string;

  @Column({type: DataType.STRING(256), field: 'S'})
  s: string;
}