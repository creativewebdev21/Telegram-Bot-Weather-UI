/* eslint-disable react/no-array-index-key */
import React from "react"

const SkeletonTableBody = () => (
  <tbody>
    {Array(4)
      .fill(null)
      .map((_, index) => (
        <tr key={index} className="bg-gray-100">
          <td className="px-4 py-4">
            <div className="w-6 h-3 bg-gray-200 animate-pulse rounded-2xl" />
          </td>
          <td className="px-4 py-4">
            <div className="w-16 h-3 bg-gray-200 animate-pulse rounded-2xl" />
          </td>
        </tr>
      ))}
  </tbody>
)

export default SkeletonTableBody
