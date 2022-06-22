const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let schema = `
 create table car(
 id integer primary key,name text not null,
 maker_id integer not null);
`

let schema = 
`
create table maker(
    id integer primary key,name text not null);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
