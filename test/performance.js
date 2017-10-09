var client = require('../samples/client');

// 测试的时候可以将这个值调大
var testTimes = 1
var roundTimes = testTimes;
var completeTimes = 0;

var start = new Date().getTime();

while (roundTimes > 0) {
    client.listTable({}, function (err, data) {
        completeTimes++;
        if (completeTimes >= testTimes) {
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
