var TableStore = require('./core');
var tsFilterProtos = require('./protocol/tablestore_compiled_proto.js').filter.proto;
var inherit = TableStore.util.inherit;


TableStore.LogicalOperator = {
    NOT: tsFilterProtos.LogicalOperator.LO_NOT,
    AND: tsFilterProtos.LogicalOperator.LO_AND,
    OR: tsFilterProtos.LogicalOperator.LO_OR,
};

TableStore.ColumnConditionType = {
    COMPOSITE_COLUMN_CONDITION: 0,
    SINGLE_COLUMN_CONDITION: 1
};

TableStore.ComparatorType = {
    EQUAL: tsFilterProtos.ComparatorType.CT_EQUAL,
    NOT_EQUAL: tsFilterProtos.ComparatorType.CT_NOT_EQUAL,
    GREATER_THAN: tsFilterProtos.ComparatorType.CT_GREATER_THAN,
    GREATER_EQUAL: tsFilterProtos.ComparatorType.CT_GREATER_EQUAL,
    LESS_THAN: tsFilterProtos.ComparatorType.CT_LESS_THAN,
    LESS_EQUAL: tsFilterProtos.ComparatorType.CT_LESS_EQUAL
};

TableStore.RowExistenceExpectation = {
    IGNORE: 0,
    EXPECT_EXIST: 1,
    EXPECT_NOT_EXIST: 2
};

TableStore.ColumnCondition = inherit({});

TableStore.CompositeCondition = inherit(TableStore.ColumnCondition, {
    constructor: function (combinator) {
        this.sub_conditions = [];
        this.setCombinator(combinator);
    },
    getType: function () {
        return tsFilterProtos.FilterType.FT_COMPOSITE_COLUMN_VALUE;//TableStore.ColumnConditionType.COMPOSITE_COLUMN_CONDITION
    },
    setCombinator: function (combinator) {
        var isValidateValue = false;
        for (pro in TableStore.LogicalOperator) {
            if (TableStore.LogicalOperator[pro] === combinator) {
                isValidateValue = true;
                break;
            }
        }

        if (!isValidateValue) {
            throw new Error("Expect input combinator should be one of TableStore.LogicalOperator");
        }
        this.combinator = combinator;
    },
    getCombinator: function () {
        return combinator;
    },
    addSubCondition: function (condition) {
        if (!condition instanceof TableStore.ColumnCondition) {
            throw new Error("The input condition should be an instance of TableStore.ColumnCondition");
        }

        this.sub_conditions.push(condition);
    },
    clearSubCondition: function () {
        this.sub_conditions = [];
    }
});

TableStore.SingleColumnCondition = inherit(TableStore.ColumnCondition, {
    constructor: function (columnName, columnValue, comparator, passIfMissing, latestVersionOnly) {
        if (passIfMissing === undefined) {
            passIfMissing = true;
        }

        if (latestVersionOnly === undefined) {
            latestVersionOnly = true;
        }

        this.columnName = columnName;
        this.columnValue = columnValue;

        this.comparator = null;
        this.passIfMissing = null;
        this.latestVersionOnly = null;

        this.setComparator(comparator);
        this.setPassIfMissing(passIfMissing);
        this.setLatestVersionOnly(latestVersionOnly);
    },
    getType: function () {
        return tsFilterProtos.FilterType.FT_SINGLE_COLUMN_VALUE; //TableStore.ColumnConditionType.SINGLE_COLUMN_CONDITION;
    },
    setPassIfMissing: function (passIfMissing) {
        /*
        设置```passIfMissing```

        由于OTS一行的属性列不固定，有可能存在有condition条件的列在该行不存在的情况，这时
        参数控制在这种情况下对该行的检查结果。
        如果设置为True，则若列在该行中不存在，则检查条件通过。
        如果设置为False，则若列在该行中不存在，则检查条件失败。
        默认值为True。
        */
        if (!typeof (passIfMissing) === 'boolean') {
            throw new Error("The input passIfMissing should be an instance of Bool");
        }
        this.passIfMissing = passIfMissing;
    },
    getPassIfMissing: function () {
        return this.passIfMissing;
    },
    setLatestVersionOnly: function (latestVersionOnly) {
        if (!typeof (latestVersionOnly) === 'boolean') {
            throw new Error("The input passIfMissing should be an instance of Bool");
        }

        this.latestVersionOnly = latestVersionOnly;
    },
    getLatestVersionOnly: function () {
        return this.latestVersionOnly;
    },
    setColumnName: function (columnName) {
        this.columnName = columnName;
    },
    getColumnName: function () {
        return this.columnName;
    },
    setColumnValue: function (columnValue) {
        this.columnValue = columnValue
    },
    getColumnValue: function () {
        return this.columnValue;
    },
    setComparator: function (comparator) {
        var isValidateValue = false;
        for (pro in TableStore.ComparatorType) {
            if (TableStore.ComparatorType[pro] === comparator) {
                isValidateValue = true;
                break;
            }
        }

        if (!isValidateValue) {
            throw new Error("Expect input comparator should be one of TableStore.ComparatorType");
        }
        this.comparator = comparator;
    },
    getComparator: function () {
        return this.comparator;
    }
});

TableStore.Condition = inherit({
    constructor: function (rowExistenceExpectation, columnCondition) {
        this.rowExistenceExpectation = null;
        this.columnCondition = null;
        if (undefined === columnCondition) {
            columnCondition = null;
        }

        this.setRowExistenceExpectation(rowExistenceExpectation)
        if (columnCondition != null) {
            this.setColumnCondition(columnCondition);
        }
    },
    setRowExistenceExpectation: function (rowExistenceExpectation) {
        var isValidateValue = false;
        for (pro in TableStore.RowExistenceExpectation) {
            if (TableStore.RowExistenceExpectation[pro] === rowExistenceExpectation) {
                isValidateValue = true;
                break;
            }
        }
        if (!isValidateValue) {
            throw new Error("Expect input rowExistenceExpectation should be one of TableStore.RowExistenceExpectation");
        }

        this.rowExistenceExpectation = rowExistenceExpectation;
    },
    getRowExistenceExpectation: function () {
        return this.rowExistenceExpectation;
    },

    setColumnCondition: function (columnCondition) {
        if (!columnCondition instanceof TableStore.ColumnCondition) {
            throw new Error("The input columnCondition should be an instance of TableStore.ColumnCondition");
        }
        this.columnCondition = columnCondition;
    },
    getColumnCondition: function () {
        this.columnCondition;
    }
});

TableStore.ColumnPaginationFilter = inherit({
    constructor: function (limit, offset) {
        this.limit = limit === undefined ? 1 : limit;
        this.offset = offset === undefined ? 0 : offset;;
    },
    getType: function () {
        return tsFilterProtos.FilterType.FT_COLUMN_PAGINATION; //TableStore.ColumnConditionType.SINGLE_COLUMN_CONDITION;
    }
});
