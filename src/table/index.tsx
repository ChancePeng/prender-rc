import React from 'react';
import RcTable, { TableProps as RcTableProps } from 'rc-table';
import { PFC } from '../types';

type TableProps = Omit<RcTableProps, 'prefixCls'>

const Table: PFC<TableProps, Record<string, any>[]> = (props) => {
  return <RcTable prefixCls='pfc-table' {...props} />
}

export default Table;