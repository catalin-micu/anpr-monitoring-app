import React, { PureComponent } from 'react';
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from 'recharts';
import { Button, Container, Typography } from '@material-ui/core';
import useStyle from './../styles';
import { CreateData } from './../webpages/residential';


// valoare {1,0}; actiune {a intrat, a iesit, constant}; timestamp

// var data2 = [];
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// for (let i = 1; i < 336; i ++) {
//   data2.push( {name: i, cost: getRandomInt(2), action: 'in parcare', timestamp: 'acum'} )
// }
var data2 = CreateData();

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data2.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: data2,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  animation: true,
};


const CustomTooltip = ({ active, payload }) => {
  const classes = useStyle();
  if (active && payload && payload.length) {
    return (
      <Container className={classes.tooltip}>
        <Typography variant="subtitle1" color="secondary">
          Status: { payload[0]['payload']['action'] }
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Timestamp: { payload[0]['payload']['timestamp'] }
        </Typography>
        
      </Container>
    );
  }

  return null;
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
        <Button variant="outlined" color="secondary" size="small" onClick={this.zoomOut.bind(this)}>
          Zoom Out
        </Button>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
            // eslint-disable-next-line react/jsx-no-bind
            onMouseUp={this.zoom.bind(this)}
          >
            {/* <CartesianGrid horizontal={false} vertical={false} /> */}
            <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" ticks={ [48, 96, 144, 192, 240, 288, 336] } />
            <YAxis allowDataOverflow domain={[0, 1.2]} type="number" yAxisId="1" />
            <Tooltip content={<CustomTooltip  />} />
            <Line yAxisId="1" type="stepAfter" dataKey="cost" stroke="#8884d8" animationDuration={100} strokeWidth={3} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.1} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
