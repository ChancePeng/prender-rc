import React from 'react';
import { ColumnType } from "./types"
import { FC } from "react"
import { get, once } from 'lodash-es';


interface Props {
  column: ColumnType,
  dataSource?: Record<string, any>[]
}

const Column: FC<Props> = (props) => {
  const { dataSource, column } = props;
  const { title, rowSpan = 1, onCell, dataIndex, rowScope, render } = column;

  const renderCells = () => {
    return dataSource?.map((item, index) => {
      let origin = dataIndex ? get(item, dataIndex) : undefined;

      const { rowSpan = 1, colSpan = 1 } = onCell?.(origin, index) || {};
      if (render) {
        origin = render(origin, item, index)
      }
      if(colSpan==0 || rowSpan===0){
        return <></>
      }
      return React.createElement(rowScope ? 'th' : 'td', {}, origin)
    })
  }
  return (
    <tr>
      {rowSpan ? <th rowSpan={rowSpan} colSpan={1}>{title}</th> : <></>}
      {
        renderCells()
      }
    </tr>
  )
}

export default Column;