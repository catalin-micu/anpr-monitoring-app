import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    time: 'Default',
    in: 1,
    out: 1
  }
];

var initialState = {
  data: data
}

const toPercent = (decimal) => `${(decimal * 100).toFixed(1)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: '#000000' }}>
            {`${entry.name}:${getPercent(entry.value, total)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default class LotAreaChart extends PureComponent {

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
        <AreaChart
          width={500}
          height={400}
          data={this.state.data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="in" stackId="1" stroke="#984063" fill="#984063" />
          <Area type="monotone" dataKey="out" stackId="1" stroke="#FE9677" fill="#FE9677" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
