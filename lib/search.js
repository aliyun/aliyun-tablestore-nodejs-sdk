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
    EXISTS_QUERY: 16
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
};

TableStore.ColumnReturnType = {
    RETURN_ALL: 1,
    RETURN_SPECIFIED: 2,
    RETURN_NONE: 3
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
