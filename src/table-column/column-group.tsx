import React, { useMemo } from 'react';
import { ColumnGroupType } from "./types"
import { FC } from "react"


interface Props {
  column: ColumnGroupType,
  dataSource?: Record<string, any>[],
}

const ColumnGroup: FC<Props> = (props) => {
  const { dataSource, column } = props;
  const { children, title } = column;

  const rows = useMemo(() => {
    const stach = [column];
    const result = [];
    while (stach.length) {
      const item = stach.pop();
      if (item) {
        const { children, rowScope } = item;
        result.push({
          ...item,
        });
      }
    }
  }, [])
  return (
    <>
    </>
  )
}

export default ColumnGroup;