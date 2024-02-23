var TableStore = require('./core');
var inherit = TableStore.util.inherit;

TableStore.QueryType = {
    MATCH_QUERY: 1,
    MATCH_PHRASE_QUERY: 2,
    TERM_QUERY: 3,
    RANGE_QUERY: 4,
    PREFIX_QUERY: 5,
    BOOL_QUERY: 6,
    CONST_SCORE_QUERY: 7,
    FUNCTION_SCORE_QUERY: 8,
    NESTED_QUERY: 9,
    WILDCARD_QUERY: 10,
    MATCH_ALL_QUERY: 11,
    GEO_BOUNDING_BOX_QUERY: 12,
    GEO_DISTANCE_QUERY: 13,
    GEO_POLYGON_QUERY: 14,
    TERMS_QUERY: 15,
    EXISTS_QUERY: 16,
    KNN_VECTOR_QUERY: 17,
    FUNCTIONS_SCORE_QUERY: 18,
};

TableStore.ScoreMode = {
    SCORE_MODE_NONE: 1,
    SCORE_MODE_AVG: 2,
    SCORE_MODE_MAX: 3,
    SCORE_MODE_TOTAL: 4,
    SCORE_MODE_MIN: 5,
}

TableStore.SortOrder = {
    SORT_ORDER_ASC: 0,
    SORT_ORDER_DESC: 1,
};

TableStore.SortMode = {
    SORT_MODE_MIN: 0,
    SORT_MODE_MAX: 1,
    SORT_MODE_AVG: 2,
};

TableStore.FieldType = {
    LONG: 1,
    DOUBLE: 2,
    BOOLEAN: 3,
    KEYWORD: 4,
    TEXT: 5,
    NESTED: 6,
    GEO_POINT: 7,
    DATE: 8,
    VECTOR: 9,
};

TableStore.ColumnReturnType = {
    RETURN_ALL: 1,
    RETURN_SPECIFIED: 2,
    RETURN_NONE: 3,
    RETURN_ALL_FROM_INDEX: 4,
};

TableStore.GeoDistanceType = {
    GEO_DISTANCE_ARC: 0,
    GEO_DISTANCE_PLANE: 1
};

TableStore.IndexOptions = {
    DOCS: 1,
    FREQS: 2,
    POSITIONS: 3,
    OFFSETS: 4
};

TableStore.QueryOperator = {
    OR: 1,
    AND: 2
}

TableStore.AggregationType = {
    AGG_AVG: 1,
    AGG_MAX: 2,
    AGG_MIN: 3,
    AGG_SUM: 4,
    AGG_COUNT: 5,
    AGG_DISTINCT_COUNT: 6,
    AGG_TOP_ROWS: 7,
    AGG_PERCENTILES: 8,
}

TableStore.GroupByType = {
    GROUP_BY_FIELD: 1,
    GROUP_BY_RANGE: 2,
    GROUP_BY_FILTER: 3,
    GROUP_BY_GEO_DISTANCE: 4,
    GROUP_BY_HISTOGRAM: 5,
    GROUP_BY_DATE_HISTOGRAM: 6,
    GROUP_BY_GEO_GRID: 7,
    GROUP_BY_COMPOSITE: 8,
}

TableStore.DateTimeUnit = {
    YEAR: 1,
    QUARTER_YEAR: 2, // 一个季度
    MONTH: 3,
    WEEK: 4,
    DAY: 5,
    HOUR: 6,
    MINUTE: 7,
    SECOND: 8,
    MILLISECOND: 9,
}

TableStore.GeoHashPrecision = {
    GHP_5009KM_4992KM_1: 1,
    GHP_1252KM_624KM_2: 2,
    GHP_156KM_156KM_3: 3,
    GHP_39KM_19KM_4: 4,
    GHP_4900M_4900M_5: 5,
    GHP_1200M_609M_6: 6,
    GHP_152M_152M_7: 7,
    GHP_38M_19M_8: 8,
    GHP_480CM_480CM_9: 9,
    GHP_120CM_595MM_10: 10,
    GHP_149MM_149MM_11: 11,
    GHP_37MM_19MM_12: 12,
}

TableStore.FSMScoreMode = {
    FSM_AVG: 1,
    FSM_MAX: 2,
    FSM_SUM: 3,
    FSM_MIN: 4,
    FSM_MULTIPLY: 5,
    FSM_FIRST: 6,
}

TableStore.FSMCombineMode = {
    FCM_MULTIPLY: 1,
    FCM_AVG: 2,
    FCM_MAX: 3,
    FCM_SUM: 4,
    FCM_MIN:5 ,
    FCM_REPLACE: 6,
}

TableStore.MathFunction = {
    GAUSS: 1,
    EXP: 2,
    LINEAR:3,
}

TableStore.MultiValueMode = {
    MVM_MAX: 1,
    MVM_MIN: 2,
    MVM_SUM: 3,
    MVM_AVG: 4,
}

TableStore.DecayFuncParamType = {
    DF_DATE_PARAM: 1,
    DF_NUMERIC_PARAM: 2,
    DF_GEO_PARAM: 3,
}

TableStore.FunctionModifier = {
    FM_NONE: 1,
    FM_LOG: 2,
    FM_LOG1P: 3,
    FM_LOG2P: 4,
    FM_LN: 5,
    FM_LN1P: 6,
    FM_LN2P: 7,
    FM_SQUARE: 8,
    FM_SQRT: 9,
    FM_RECIPROCAL: 10,
}

TableStore.VectorDataType = {
    VD_FLOAT_32: 2,
}

TableStore.VectorMetricType = {
    VM_EUCLIDEAN: 0,
    VM_COSINE: 1,
    VM_DOT_PRODUCT: 2,
}

TableStore.HighlightFragmentOrder = {
    TEXT_SEQUENCE: 1,
    SCORE: 2,
}

TableStore.HighlightEncoder = {
    PLAIN_MODE: 1,
    HTML_MODE: 2,
}

TableStore.IndexStatus = {
    PENDING: 'pending',
    FAILED: 'failed',
    RUNNING: 'running',
    UNKNOWN: 'unknown',
}

TableStore.SyncPhase = {
    INCR: 'INCR',
    FULL: "FULL"
}