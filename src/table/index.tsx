import React from 'react';
import RcTable, { TableProps as RcTableProps } from 'rc-table';
import { PFC } from '../types';
import classNames from 'classnames';

import './index.less';
type TableProps = Omit<RcTableProps, 'prefixCls'|'data'> & {
  bordered?: boolean
}

const prefixCls = 'pfc-table'
const Table: PFC<TableProps, Record<string, any>[]> = (props) => {
  const { className, bordered ,dataSource,...fields} = props;
  const classes = classNames({
    [`${prefixCls}-bordered`]: bordered
  })
  
  return <RcTable className={classes} prefixCls={prefixCls} data={dataSource}  {...fields} />
}

export default Table;