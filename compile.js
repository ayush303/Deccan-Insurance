const path = require('path');
const fs = require('fs');
const solc = require('solc');
const inboxpath_1 = path.resolve(_dirname, 'contracts', 'HealthCare.sol');
const inboxpath_2 = path.resolve(_dirname, 'contracts', 'Migrations.sol');
const source_1 = fs.readFileSync(inboxpath_1, 'utf8');
const source_2 = fs.readFileSync(inboxpath_2,'utf8');

module.exports = solc.compile(source_1, 1).contracts[':HealthCare'];
module.exports = solc.compile(source_2, 1).contracts[':Migrations'];