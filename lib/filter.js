var TableStore = require('./core');
var tsFilterProtos = require('./protocol/tablestore_filter_proto.js').tablestore.filter.proto;
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
    IGNORE: "IGNORE",
    EXPECT_EXIST: "EXPECT_EXIST",
    EXPECT_NOT_EXIST: "EXPECT_NOT_EXIST"
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
    constructor: function (column_name, column_value, comparator, pass_if_missing, latest_version_only) {
        if (pass_if_missing === undefined) {
            pass_if_missing = true;
        }

        if (latest_version_only === undefined) {
            latest_version_only = true;
        }

        this.column_name = column_name;
        this.column_value = column_value;

        this.comparator = null;
        this.pass_if_missing = null;
        this.latest_version_only = null;

        this.setComparator(comparator);
        this.setPassIfMissing(pass_if_missing);
        this.setLatestVersionOnly(latest_version_only);
    },
    getType: function () {
        return tsFilterProtos.FilterType.FT_SINGLE_COLUMN_VALUE; //TableStore.ColumnConditionType.SINGLE_COLUMN_CONDITION;
    },
    setPassIfMissing: function (pass_if_missing) {
        /*
        设置```pass_if_missing```

        由于OTS一行的属性列不固定，有可能存在有condition条件的列在该行不存在的情况，这时
        参数控制在这种情况下对该行的检查结果。
        如果设置为True，则若列在该行中不存在，则检查条件通过。
        如果设置为False，则若列在该行中不存在，则检查条件失败。
        默认值为True。
        */
        if (!typeof (pass_if_missing) === 'boolean') {
            throw new Error("The input pass_if_missing should be an instance of Bool");
        }
        this.pass_if_missing = pass_if_missing;
    },
    getPassIfMissing: function () {
        return this.pass_if_missing;
    },
    setLatestVersionOnly: function (latest_version_only) {
        if (!typeof (latest_version_only) === 'boolean') {
            throw new Error("The input pass_if_missing should be an instance of Bool");
        }

        this.latest_version_only = latest_version_only;
    },
    getLatestVersionOnly: function () {
        return this.latest_version_only;
    },
    setColumnName: function (column_name) {
        this.column_name = column_name;
    },
    getColumnName: function () {
        return this.column_name;
    },
    setColumnValue: function (column_value) {
        this.column_value = column_value
    },
    getColumnValue: function () {
        return this.column_value;
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
    constructor: function (row_existence_expectation, column_condition) {
        this.row_existence_expectation = null;
        this.column_condition = null;
        if (undefined === column_condition) {
            column_condition = null;
        }

        this.setRowExistenceExpectation(row_existence_expectation)
        if (column_condition != null) {
            this.setColumnCondition(column_condition);
        }
    },
    setRowExistenceExpectation: function (row_existence_expectation) {
        var isValidateValue = false;
        for (pro in TableStore.RowExistenceExpectation) {
            if (TableStore.RowExistenceExpectation[pro] === row_existence_expectation) {
                isValidateValue = true;
                break;
            }
        }
        if (!isValidateValue) {
            throw new Error("Expect input row_existence_expectation should be one of TableStore.RowExistenceExpectation");
        }

        this.row_existence_expectation = row_existence_expectation;
    },
    getRowExistenceExpectation: function () {
        return this.row_existence_expectation;
    },

    setColumnCondition: function (column_condition) {
        if (!column_condition instanceof TableStore.ColumnCondition) {
            throw new Error("The input column_condition should be an instance of TableStore.ColumnCondition");
        }
        this.column_condition = column_condition;
    },
    getColumnCondition: function () {
        this.column_condition;
    }
});
