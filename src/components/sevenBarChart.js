import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class SevenBarChart extends PureComponent {
  state = {
    data: [
      {"name": 'Default', "in%": 1, "out%": 1}
    ]
  }

  render() {
    {
      if (this.props.data.length === 7) {
        this.setState({data: this.props.data})
      }
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="in%" stackId="a" fill="#984063" />
          <Bar dataKey="out%" stackId="a" fill="#FE9677" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
