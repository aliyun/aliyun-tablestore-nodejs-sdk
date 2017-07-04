var client = require('../samples/client');

var roundTimes = 10000;
var completeTimes = 0;

var start = new Date().getTime();

while (roundTimes > 0) {
    client.listTable({}, function (err, data) {
        completeTimes++;
        if (completeTimes >= 10000) {
            var end = new Date().getTime();
            completeTime = end - start;
            console.log('completeTime:' + completeTime);
        }
    });
    roundTimes--;
}

var requestEnd = new Date().getTime();
var requestTime = requestEnd - start;

console.log('requestTime:' + requestTime);




