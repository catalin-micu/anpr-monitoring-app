import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
  {
    name: 'Tuesday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
  {
    name: 'Wednesday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
  {
    name: 'Thursday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
  {
    name: 'Friday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
  {
    name: 'Saturday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
  {
    name: 'Sunday',
    "Average stay in minutes": 'Uncomputed',
    "Maximum numbers of cars in lot": 'Uncomputed',
  },
];

var initialState = {
  data: data
}

export default class LotBar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    if (this.props.data.length > 0) {
      this.setState({data: this.props.data});
    }
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
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
