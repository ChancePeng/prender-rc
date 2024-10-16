import { ReactNode } from "react"


export interface ColumnType {
  dataIndex?: string,
  title?: string,
  children?: ColumnType[],
  rowSpan?: number,
  align?: 'center' | 'left' | 'right',
  width?: number | string,
  rowScope?: 'row' | 'rowgroup'
  render?: (data: any, record: Record<string, any>, index: number) => ReactNode,
  onCell?: (data: any, index: number) => { colSpan?: number, rowSpan?: number }
}

export interface ColumnGroupType {
  title?: string,
  children?: (ColumnGroupType | ColumnType)[]
  rowScope?: 'row' | 'rowgroup'
}

export interface TableColumnProps {
  columns?: (ColumnType | ColumnGroupType)[],
  bordered?: boolean,
}