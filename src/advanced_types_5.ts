// class Query {
//   public whereCon: Array<string> = [];

//   public constructor(protected tableName: string = '') { }

//   public andWhere(key: string, value: string) {
//     this.whereCon.push(`${key}=${value}`);
//     return this;
//   }

//   public orWhere(key: string, value: string) {
//     this.whereCon.push(`OR ${key}=${value}`);
//     return this;
//   }
  
//   public inWhere(key: string, value: string) {
//     this.whereCon.push(`AND ${key} IN (${value})`);
//     return this;
//   }

//   public getSQL(): string {
//     return `SELECT * FROM ${this.tableName} WHERE ${this.whereCon.join(' ')}`;
//   }
// }

// let generateSQL = new Query('table_name')
//   .andWhere('key1', 'value1')
//   .orWhere('key2','value2')
//   .inWhere('key3','value3')
//   .getSQL();

// console.log(generateSQL);

// class TQuery extends Query {
//   public constructor(tableName: string = '') {
//     super(tableName);
//   }

//   public getUpdateSql(key: string, value: string) {
//     return `UPDATE ${this.tableName} SET ${key}=${value} WHERE ${this.whereCon.join(' ')}`;
//   }
// }

// generateSQL = new TQuery('table_name')
//   .andWhere('key1', 'value1')
//   .orWhere('key2', 'value2')
//   .inWhere('key3', 'value3')
//   .getUpdateSql('key4', 'value4');

// console.log(generateSQL);
