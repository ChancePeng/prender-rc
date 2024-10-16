import React, { useMemo } from 'react';
import { TableColumnProps, ColumnType } from './types'
import { PFC } from '../types';
import classNames from 'classnames';
import Column from './column';
import ColumnGroup from './column-group';


const prefixCls = 'pfc-table'
const TableColumn: PFC<TableColumnProps, Record<string, any>[]> = (props) => {
  const { columns, dataSource, bordered, ...fields } = props;
  const className = classNames(prefixCls, `${prefixCls}-column`, props.className, {
    [`${prefixCls}-bordered`]: bordered
  })

  const renderRows = (row: ColumnType, index: number) => {
    const { children, rowScope } = row;
    const columnProps = {
      column: row,
      dataSource,
    }
    let isGroup = false;
    switch (rowScope) {
      case 'row': isGroup = false; break;
      case 'rowgroup': isGroup = true; break;
      default: {
        children?.length && (isGroup = true);
      }
    }
    if (isGroup) {
      return <ColumnGroup {...columnProps} />
    }
    return <Column {...columnProps} />
  }

  return (
    <div {...fields} className={className}>
      <table>
        <tbody>
          {
            columns?.map(renderRows)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableColumn;