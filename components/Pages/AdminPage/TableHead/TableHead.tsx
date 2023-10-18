import React, { FC } from "react"

interface TableHeadProps {
  children: any
  className?: string
}
const TableHead: FC<TableHeadProps> = ({ children, className }) => (
  <th
    className={`p-[5px] md:p-4 
        text-left text-center
        uppercase 
        text-[8px] xs:text-[11px] 
        md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
        md:min-w-[100px] ${className}`}
  >
    {children}
  </th>
)

export default TableHead
