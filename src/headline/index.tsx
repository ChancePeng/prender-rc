import classNames from "classnames";
import { PFC } from "../types";
import React, { PropsWithChildren } from 'react';

interface HeadlineProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}


const Headline: PFC<PropsWithChildren<HeadlineProps>> = (props) => {
  const { type = 'h1', dataIndex, dataSource, children, ...fields } = props;
  const className = classNames('pfc-headline', `pfc-headline-${type}`, props.className);
  const headline = React.createElement(type, {
    ...fields,
    className
  }, dataSource)
  return (
    <>
      {headline}
      {children}
    </>
  )
}

export default Headline;