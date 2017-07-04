var TableStore = require('../core');

TableStore.DefaultRetryPolicy = {
    /*
     默认重试策略
     最大重试次数为20，最大重试间隔为3秒，对流控类错误以及读操作相关的服务端内部错误进行了重试。
    */

    // 最大重试次数
    maxRetryTimes: 20,

    //最大重试间隔，单位为秒
    maxRetryDelay: 3,

    //每次重试间隔的递增倍数
    scaleFactor: 2,

    //两种错误的起始重试间隔，单位为秒
    serverThrottlingExceptionDelayFactor: 0.5,
    stabilityExceptionDelayFactor: 0.2,

    _maxRetryTimeReached: function (retryTimes, exception, apiName) {
        return retryTimes >= TableStore.DefaultRetryPolicy.maxRetryTimes;
    },

    isRepeatableApi: function (apiName) {
        return TableStore.RetryUtil.isRepeatableApi(apiName);
    },

    _canRetry: function (retryTimes, exception, apiName) {

        if (TableStore.RetryUtil.shouldRetryNoMatterWhichApi(exception)) {
            return true;
        }

        if (TableStore.DefaultRetryPolicy.isRepeatableApi(apiName)
            && TableStore.RetryUtil.shouldRetryWhenApiRepeatable(retryTimes, exception, apiName)) {
            return true;
        }

        return false;
    },

    getRetryDelay: function (retryTimes, exception) {
        var delayFactor;
        if (TableStore.RetryUtil.isServerThrottlingException(exception)) {
            delayFactor = TableStore.DefaultRetryPolicy.serverThrottlingExceptionDelayFactor;
        } else {
            delayFactor = TableStore.DefaultRetryPolicy.stabilityExceptionDelayFactor;
        }

        var delayLimit = delayFactor * Math.pow(TableStore.DefaultRetryPolicy.scaleFactor, retryTimes);

        if (delayLimit >= TableStore.DefaultRetryPolicy.maxRetryDelay) {
            delayLimit = TableStore.DefaultRetryPolicy.maxRetryDelay;
        }

        var realDelay = delayLimit * 0.5 + delayLimit * 0.5 * Math.random();
        return realDelay;
    },

    shouldRetry: function (retryTimes, exception, apiName) {

        if (TableStore.DefaultRetryPolicy._maxRetryTimeReached(retryTimes, exception, apiName)) {
            return false;
        }

        if (TableStore.DefaultRetryPolicy._canRetry(retryTimes, exception, apiName)) {
            return true;
        }

        return false;
    }
}
