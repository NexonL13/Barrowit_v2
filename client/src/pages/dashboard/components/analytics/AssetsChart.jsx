import React from 'react'
import { Card, Title, LineChart } from "@tremor/react"

const chartdata = [
  {
      year: 2022,
      'Borrowed Growth Rate': 2.04,
      'Returned Growth Rate': 1.53,
  },
  {
      year: 2023,
      'Borrowed Growth Rate': 1.96,
      'Returned Growth Rate': 1.58,
  },
  {
      year: 2024,
      'Borrowed Growth Rate': 1.96,
      'Returned Growth Rate': 1.61,
  },
  {
      year: 2025,
      'Borrowed Growth Rate': 1.93,
      'Returned Growth Rate': 1.61,
  },
  {
      year: 2026,
      'Borrowed Growth Rate': 1.88,
      'Returned Growth Rate': 1.67,
  },
    //...
]


const AssetsChart = () => {
  return (
    <div className='w-full'>
    <Card className='p-10'>
      <Title>Assets</Title>
      <LineChart
          className="mt-6 h-60"
          data={ chartdata }
          index="year"
          categories={ ['Borrowed Growth Rate', 'Returned Growth Rate'] }
          colors={ ['emerald', 'gray'] }
          yAxisWidth={ 40 }
          showLegend={ false }
      />
  </Card>
  </div>
  )
}

export default AssetsChart