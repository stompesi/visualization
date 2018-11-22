import {
    AllowNull, 
    Column, 
    DataType, 
    Model, 
    Table, 
    Unique,
    CreatedAt,
    PrimaryKey
} from 'sequelize-typescript'

@Table({
    underscored: true,
    underscoredAll: true,
    updatedAt: false,
    tableName: 'BLOCK'
})
export default class Block extends Model<Block> {
    @PrimaryKey
    @Column({type: DataType.STRING(256), field: 'BLOCK_HASH'})
    blockHash: string;

    @Column({type: DataType.STRING(256), field: 'GAS_LIMIT'})
    gasLimit: string;

    @Column({type: DataType.STRING(256), field: 'NUMBER'})
    number: string;

    @Column({type: DataType.STRING(256), field: 'TIMESTAMP'})
    timestamp: string;

    @Column({type: DataType.STRING(256), field: 'GAS_USED'})
    gasUsed: string;

    @Column({type: DataType.STRING(256), field: 'DIFFICULTY'})
    difficulty: string;

    @Column({type: DataType.STRING(256), field: 'MINER'})
    miner: string;

    @Column({type: DataType.STRING(256), field: 'NONCE'})
    nonce: string;

    @Column({type: DataType.STRING(256), field: 'PARENT_HASH'})
    parentHash: string;

    @Column({type: DataType.STRING(256), field: 'RECEIPTS_ROOT'})
    receiptsRoot: string;

    @Column({type: DataType.STRING(256), field: 'SIZE'})
    size: string;

    @Column({type: DataType.STRING(256), field: 'STATE_ROOT'})
    stateRoot: string;

    @Column({type: DataType.STRING(256), field: 'TOTAL_DIFFICULTY'})
    totalDifficulty: string;

    @Column({type: DataType.STRING(256), field: 'TRANSACTIONS_ROOT'})
    transactionsRoot: string;

    @Column({type: DataType.STRING(256), field: 'EXTRA_DATA'})
    extraData: string;

    @Column({type: DataType.STRING(256), field: 'SHA3_UNCLES'})
    sha3Uncles: string;
}