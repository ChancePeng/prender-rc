import { FC } from "react";

interface RenderProps<T = any> extends Record<string, any> {
  dataIndex?: string | string[],
  dataSource?: T,
}


export type PFC<P = {}, T = any> = FC<P & RenderProps<T>>