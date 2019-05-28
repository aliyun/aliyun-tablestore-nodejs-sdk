import { ColumnValue } from './protocol/plain_buffer_builder';
import { FilterType } from './protos';

export declare enum LogicalOperator {
  NOT = 1,
  AND = 2,
  OR = 3,
}

export declare enum ColumnConditionType {
  COMPOSITE_COLUMN_CONDITION,
  SINGLE_COLUMN_CONDITION,
}

export declare enum ComparatorType {
  EQUAL = 1,
  NOT_EQUAL = 2,
  GREATER_THAN = 3,
  GREATER_EQUAL = 4,
  LESS_THAN = 5,
  LESS_EQUAL = 6,
}

export declare enum RowExistenceExpectation {
  IGNORE = 'IGNORE',
  EXPECT_EXIST = 'EXPECT_EXIST',
  EXPECT_NOT_EXIST = 'EXPECT_NOT_EXIST',
}

export declare class ColumnCondition {}

export declare class CompositeCondition extends ColumnCondition {
  // tslint:disable-next-line
  sub_conditions: ColumnCondition[];
  constructor(combinator: LogicalOperator);
  getType(): FilterType.FT_COMPOSITE_COLUMN_VALUE;
  setCombinator(combinator: LogicalOperator): void;
  getCombinator(): LogicalOperator;
  addSubCondition(condition: ColumnCondition): void;
  clearSubCondition(): void;
}

export declare class SingleColumnCondition<
  T extends ColumnValue = ColumnValue
> extends ColumnCondition {
  columnName: string;
  columnValue: T;
  comparator: ComparatorType;
  passIfMissing: boolean;
  latestVersionOnly: boolean;
  constructor(
    columnName: string,
    columnValue: T,
    comparator: ComparatorType,
    passIfMissing: boolean = true,
    latestVersionOnly: boolean = true,
  );
  getType(): FilterType.FT_SINGLE_COLUMN_VALUE;
  /**
   * 设置 `passIfMissing`
   * 由于OTS一行的属性列不固定，有可能存在有condition条件的列在该行不存在的情况，这时
   * 参数控制在这种情况下对该行的检查结果。
   * 如果设置为True，则若列在该行中不存在，则检查条件通过。
   * 如果设置为False，则若列在该行中不存在，则检查条件失败。
   * 默认值为True。
   */
  setPassIfMissing(passIfMissing: boolean): void;
  getPassIfMissing(): boolean;
  setLatestVersionOnly(latestVersionOnly: boolean): void;
  getLatestVersionOnly(): boolean;
  setColumnName(columnName: string): void;
  getColumnName(): string;
  setColumnValue(columnValue: T): void;
  getColumnValue(): T;
  setComparator(comparator: ComparatorType): void;
}

export declare class Condition {
  columnCondition: ColumnCondition | null;
  rowExistenceExpectation: RowExistenceExpectation;
  constructor(
    rowExistenceExpectation: RowExistenceExpectation,
    columnCondition?: ColumnCondition | null,
  );
  setRowExistenceExpectation(rowExistenceExpectation: RowExistenceExpectation): void;
  getRowExistenceExpectation(): RowExistenceExpectation;
  setColumnCondition(columnCondition: ColumnCondition): void;
  getColumnCondition(): ColumnCondition;
}

export declare class ColumnPaginationFilter {
  constructor(limit: number = 1, offset: number = 0);
  getType(): FilterType.FT_COLUMN_PAGINATION;
}
