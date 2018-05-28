import React, { Component } from 'react';
import { Loader } from 'core/components/Loader';
import { fetchPolygon, createPolygon } from 'api.js';



class SuperChart extends Component {

  mutation(){
    setTimeout(function() { this.setState({isLoaded: true}); }.bind(this), 1000);
  }

  getPolygon(){
    // Записываю в state
     this.setState((prevState) => {
         let polygon = createPolygon();

        // Цикл по массиву
         const list = polygon.map(function(item, index) {
           return item;
         });
         return {polygon: list};
       });
    }

  getPolygonMaxValues(){
    setTimeout(function() { this.setState((prevState) => {
      let arr = this.state.polygon;

      // Возвращает массив x
      const Num = arr.map(function(item) {
        return item[0];
      });

      // Возвращает xMax и y Max
      var largest = Math.max.apply(Math, Num);
      return {polygonMaxValues: {xMax: largest, yMax: largest}};
    });}.bind(this), 500);  
  }

  calcPolygonSquare(){
    setTimeout(function() { this.setState((prevState) => {
      let xMax = this.state.polygonMaxValues.xMax;
      let yMax = this.state.polygonMaxValues.yMax;
      let area = xMax * yMax;
      return {area: area};
    }); }.bind(this), 500);  
  }

  start(){
    this.getPolygon();
    fetchPolygon();
    this.getPolygonMaxValues();
    this.calcPolygonSquare();
    this.mutation();
  }

  onKeyPressed(e) {
    if (e.keyCode === 13){
     this.setState({ size: !this.state.size });
    }
   }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  static numberToPixels(number) {
    return `${number}px`;
  }

  static polygonToSVGPoints(polygon) {
    return polygon
            .map(point => `${point[0]},${point[1]}`)
            .reduce((a, b) => `${a} ${b}`);
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      polygon: [],
      polygonMaxValues: {
        xMax: 0,
        yMax: 0,
      },
      area: 0,
      size: true
    };
    this.getPolygon = this.getPolygon.bind(this);
    this.getPolygonMaxValues = this.getPolygonMaxValues.bind(this);
    this.calcPolygonSquare = this.calcPolygonSquare.bind(this);
  }


  // Загрузка компонента
  componentDidMount() {
    this.start();
  }


  render() {
    const { width, height } = this.props;
    const { isLoaded, polygon, polygonMaxValues, area, size } = this.state;

    return (
      <div
        className="super-chart"
        onKeyDown={this.onKeyPressed}
        style={ size ?{
          width:  this.constructor.numberToPixels(width),
          height: this.constructor.numberToPixels(height),}
          : 
        { width:  this.constructor.numberToPixels(width * 1.5),
          height: this.constructor.numberToPixels(height * 1.5),} 
        }
      >
        <h1>Super Chart</h1>
        {isLoaded
          ? <svg
              width='100%'
              height='100%'
              viewBox={`0 15 ${polygonMaxValues.xMax} ${polygonMaxValues.yMax}`}
              preserveAspectRatio="xMidYmid meet"
            >
              <polyline
                points={this.constructor.polygonToSVGPoints(polygon)}
                fill="#4E5A7D"
                stroke="#7E91C9"
                strokeWidth="0.5"
              />
            </svg>
          : <Loader.loading size={35} />
        }
        <div className="super-chart__analytics">
          {isLoaded && <div>max <span className="super-chart__analytics__value">{polygonMaxValues.yMax}</span></div>}
          {isLoaded && <div>area <span className="super-chart__analytics__value">{area}</span></div>}
        </div>
      </div>
    );
  }
};

export default SuperChart;
