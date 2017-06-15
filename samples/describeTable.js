var client = require('./client');

var params = {
    tableName: 'sampleTable'
};

client.describeTable(params, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

