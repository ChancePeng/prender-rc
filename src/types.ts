import { FC, CSSProperties } from "react";

interface RenderProps<T = any> extends Record<string, any> {
  dataIndex?: string | string[],
  dataSource?: T,
  className?: string,
  style?: CSSProperties
}


export type PFC<P = {}, T = any> = FC<P & RenderProps<T>>