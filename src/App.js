import "./App.css";
import Table from "./Table";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      array: [],
    };
  }

  changeNum1 = (event) => {
    this.setState({ num1: event.target.value });
  };

  changeNum2 = (event) => {
    this.setState({ num2: event.target.value });
  };

  // return random 1 or 2
  random = () => {
    return Math.random() > 0.5 ? 1 : 2;
  };

  generate = () => {
    let col = parseInt(this.state.num1) + 1;
    let row = parseInt(this.state.num2);
    let a = Array(row);
    for (var i = 0; i < row; i++) {
      a[i] = new Array(col);
      let sum = 0;
      for (var j = 0; j < col; j++) {
        if (j === col - 1) {
          //last field in array for sum
          a[i][j] = sum;
        } else {
          a[i][j] = this.random();
          sum += a[i][j];
        }
      }
      this.setState({ array: a });
    }
  };

  sortAsc = (a, b) => {
    if (a[a.length - 1] === b[b.length - 1]) {
      return 0;
    } else {
      return a[a.length - 1] < b[b.length - 1] ? -1 : 1;
    }
  };

  sortDesc = (a, b) => {
    if (a[a.length - 1] === b[b.length - 1]) {
      return 0;
    } else {
      return a[a.length - 1] > b[b.length - 1] ? -1 : 1;
    }
  };

  asc = () => {
    let a = this.state.array;
    a.sort(this.sortAsc);
    this.setState({ array: a });
  };

  desc = () => {
    let a = this.state.array;
    a.sort(this.sortDesc);
    this.setState({ array: a });
  };

  average = (a) => {
    let sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum += a[i][a[i].length - 1];
    }
    return sum / a.length;
  };

  filter = () => {
    let a = this.state.array;
    let avg = this.average(a);
    a = a.filter((array) => array[array.length - 1] < avg);
    this.setState({ array: a });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="number"
            name="num1"
            min="1"
            value={this.state.num1}
            onChange={this.changeNum1}
          />
          <input
            type="number"
            name="num2"
            min="1"
            value={this.state.num2}
            onChange={this.changeNum2}
          />
          <input type="button" value="GENERATE" onClick={this.generate} />
          <input type="button" value="ASC" onClick={this.asc} />
          <input type="button" value="DESC" onClick={this.desc} />
          <input type="button" value="FILTER" onClick={this.filter} />
        </form>
        <Table array={this.state.array} />
        <p>{this.state.sum}</p>
      </div>
    );
  }
}

export default App;
