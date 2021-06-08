import React, { PureComponent } from 'react';
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from 'recharts';
import { Button } from '@material-ui/core';

// valoare {1,0}; actiune {a intrat, a iesit, constant}; timestamp
const initialData = [
  { name: 1, cost: 1},
  { name: 2, cost: 1},
  { name: 3, cost: 1},
  { name: 4, cost: 1},
  { name: 5, cost: 0},
  { name: 6, cost: 0},
  { name: 7, cost: 0},
  { name: 8, cost: 0},
  { name: 9, cost: 1},
  { name: 10, cost: 1},
  { name: 11, cost: 1},
  { name: 12, cost: 1},
  { name: 13, cost: 1},
  { name: 14, cost: 1},
  { name: 15, cost: 0},
  { name: 16, cost: 0},
  { name: 17, cost: 0},
  { name: 18, cost: 0},
  { name: 19, cost: 1},
  { name: 20, cost: 1},
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = initialData.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: initialData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  animation: true,
};

export default class Example extends PureComponent {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 0.1);
    

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
     
    }));
  }

  render() {
    const { data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
        <Button variant="outlined" color="primary" size="small" onClick={this.zoomOut.bind(this)}>
          Zoom Out
        </Button>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
            // eslint-disable-next-line react/jsx-no-bind
            onMouseUp={this.zoom.bind(this)}
          >
            {/* <CartesianGrid horizontal={false} vertical={false} /> */}
            <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number"  />
            <YAxis allowDataOverflow domain={[0, 1.2]} type="number" yAxisId="1" />
            <Tooltip />
            <Line yAxisId="1" type="stepAfter" dataKey="cost" stroke="#8884d8" animationDuration={2000} strokeWidth={3} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.1} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
