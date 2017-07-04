var TableStore = require('../core');

TableStore.RetryUtil = {

    shouldRetryNoMatterWhichApi: function (exception) {
        var errorCode = exception.code;
        var errorMessage = exception.message;

        if (errorCode == "OTSRowOperationConflict" ||
            errorCode == "OTSNotEnoughCapacityUnit" ||
            errorCode == "OTSTableNotReady" ||
            errorCode == "OTSPartitionUnavailable" ||
            errorCode == "OTSServerBusy" ||
            errorCode == "OTSOperationThrottled") {
            return true;
        }

        if (errorCode == "OTSQuotaExhausted" && errorMessage == "Too frequent table operations.") {
            return true;
        }

        return false;
    },

    isRepeatableApi: function (apiName) {
        apiName = TableStore.util.string.upperFirst(apiName);
        var repeatableApi = ['ListTable', 'DescribeTable', 'GetRow', 'BatchGetRow', 'GetRange'];
        for (var i in repeatableApi) {
            if (repeatableApi[i] === apiName) {
                return true;
            }
        }
    },

    shouldRetryWhenApiRepeatable: function (retry_times, exception, api_name) {
        var errorCode = exception.code;
        var errorMessage = exception.message;

        if (errorCode == "OTSTimeout" ||
            errorCode == "OTSInternalServerError" ||
            errorCode == "OTSServerUnavailable" ||
            errorCode == "NetworkingError") {
            return true;
        }

        if (errorCode == 500 || errorCode == 502 || errorCode == 503) {
            return true;
        }

        return false;
    },

    isServerThrottlingException: function (exception) {
        var errorCode = exception.code
        var errorMessage = exception.message

        if (errorCode == "OTSServerBusy" ||
            errorCode == "OTSNotEnoughCapacityUnit" ||
            errorCode == "OTSOperationThrottled") {
            return true;
        }

        if (errorCode == "OTSQuotaExhausted" && errorMessage == "Too frequent table operations.") {
            return true;
        }

        return false;
    }
}