const fs = require('fs');
const nanoid = require("nanoid");

let data = null;


module.exports = {
    init: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('./db.json', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    data = JSON.parse(result);
                    resolve();
                }
            });
        });
    },
    getData: () => data,
    getDataById: id => {
        return data.find(item => item.id === id);
    },
    addItem: (item) => {
        item.id = nanoid();
        data.push(item);

        let contents = JSON.stringify(data, null, 2);

        return new Promise((resolve, reject) => {
            fs.writeFile('./db.json', contents, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                }
            });
        });
    }
};