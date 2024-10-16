import React, { useMemo } from 'react';
import { ReactNode } from "react"
import { PFC } from "../types";
import classNames from 'classnames';
import { get } from 'lodash-es'



interface Column {
  dataIndex?: string | string[],
  title?: string,
  span?: number,
  align?: 'left' | 'center' | 'right'
  render?: (data: any, record: Record<string, any>, index: number) => ReactNode
}


interface DescriptionsProps {
  column?: number,
  columns?: Column[],
  bordered?: boolean,
}


const prefixCls = 'pfc-descriptions'
const Descriptions: PFC<DescriptionsProps> = (props) => {
  const { column = 3, columns, dataSource, bordered, ...fields } = props;

  const className = classNames(prefixCls, props.className, {
    'pfc-descriptions-bordered': bordered
  })

  const groups = useMemo(() => {
    const result: Column[][] = [];
    let index = 0;
    let sum = 0;
    columns?.forEach(item => {
      const { span = 1 } = item;
      if (span > column) {
        item.span = column;
      } else {
        item.span = 1;
      }
      if (sum + item.span > column) {
        sum = item.span;
        index + 1;
      }
      result[index] ? result[index].push(item) : result[index] = [item];
    })
    return result;
  }, [column, columns])


  const renderCells = (row: Column, index: number) => {
    const { span = 1, title, render, dataIndex, align } = row;
    let origin = dataIndex ? Array.isArray(dataIndex) ? dataIndex.map(item => get(dataSource, item)) : get(dataSource, dataIndex) : undefined;
    if (render) {
      origin = render(origin, dataSource, index)
    }
    return (
      <>
        <th className={`${prefixCls}-cell ${prefixCls}-cell-label`} align={align}>
          {title}
        </th>
        <td className={`${prefixCls}-cell ${prefixCls}-cell-content`} colSpan={span * 2 - 1}>
          {origin}
        </td>
      </>
    )
  }


  const renderRows = (rows: Column[], index: number) => {
    return rows.map(row => {
      return (
        <tr key={`row-${index}`}>
          {
            rows.map(renderCells)
          }
        </tr>
      )
    })
  }




  return (
    <div  {...fields} className={className}>
      <table className={`${prefixCls}-table`}>
        <tbody>
          {
            groups.map(renderRows)
          }
        </tbody>
      </table>
    </div>
  )

}


export default Descriptions;
