var client = require('./client');
var domain = TableStore.util.nodeRequire('domain');

//https://nodejs.org/api/domain.html#domain_domain_enter
//https://shapeshed.com/uncaught-exceptions-in-node/
domainSample = domain.create();
domainSample.on('error', function (err) {
    console.log('error:', err);
    console.log('Exit your application!')
})
domainSample.run(function () {
    client.listTable({}, function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }
        throw new Error('test')
    });
})