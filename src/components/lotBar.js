import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    "Average stay in minutes": 75,
    "Maximum numbers of cars in lot": 1750,
  },
  {
    name: 'Tuesday',
    "Average stay in minutes": 90,
    "Maximum numbers of cars in lot": 1804,
  },
  {
    name: 'Wednesday',
    "Average stay in minutes": 68,
    "Maximum numbers of cars in lot": 1629,
  },
  {
    name: 'Thursday',
    "Average stay in minutes": 105,
    "Maximum numbers of cars in lot": 1777,
  },
  {
    name: 'Friday',
    "Average stay in minutes": 135,
    "Maximum numbers of cars in lot": 2187,
  },
  {
    name: 'Saturday',
    "Average stay in minutes": 184,
    "Maximum numbers of cars in lot": 2749,
  },
  {
    name: 'Sunday',
    "Average stay in minutes": 210,
    "Maximum numbers of cars in lot": 2875,
  },
];

export default class LotBar extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#FE9677" />
          <YAxis yAxisId="right" orientation="right" stroke="#984063" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Average stay in minutes" fill="#FE9677" />
          <Bar yAxisId="right" dataKey="Maximum numbers of cars in lot" fill="#984063" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
