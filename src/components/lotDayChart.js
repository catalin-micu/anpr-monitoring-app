import React, { PureComponent } from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';
import useStyle from './../styles';

// index, value, timestamp

const initialData = [];

const getAxisYDomain = (from, to, ref, offset, data) => {
  const refData = data.slice(from - 1, to);
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
  top: 'dataMax+100',
  bottom: 0,
  animation: true,
};

const CustomTooltip = ({ active, payload }) => {
  const classes = useStyle();
  if (active && payload && payload.length) {
    return (
      <Container className={classes.tooltip}>
        <Typography variant="subtitle1" color="secondary">
          { payload[0]['payload']['value'] } vehicles inside
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Time: { payload[0]['payload']['active_time'] }
        </Typography>
        
      </Container>
    );
  }

  return null;
};

export default class LotZoomChart extends PureComponent {

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
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'value', 30, this.state.data);

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
      top: 'dataMax+100',
      bottom: 0,
    }));
  }

  render() {
    this.setState({data: this.props.data})
    const { data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom } = this.state;

    return (
      <div style={{ userSelect: 'none', width: '100%' }}>
        <Button  color="secondary" size="small" onClick={this.zoomOut.bind(this)}>
          Zoom Out
        </Button>

        <ResponsiveContainer width="100%" height={243}>
          <LineChart
          
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
            // eslint-disable-next-line react/jsx-no-bind
            onMouseUp={this.zoom.bind(this)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="index" domain={[left, right]} type="number" ticks={ [5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57] } />
            <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
            <Tooltip content={<CustomTooltip  />} />
            <Line yAxisId="1" type="natural" dataKey="value" stroke="#8884d8" animationDuration={1000} stroke="#984063" />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
