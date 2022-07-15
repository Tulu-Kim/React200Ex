import React, { Component } from "react";

class R013_ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFuc: "React200",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1, 2);
    this.Function3();
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + ". Es5 Funtion");
    }
  }
  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ".Arrow Funtion : " + this.state.arrowFuc);
  };
  Function3() {
    var this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ". Es5 Callback Funtion noBind : ");
      console.log(this.state.arrowFuc);
    }, 5000);
  }

  Function4() {
    setTimeout(
      function () {
        console.log("4. Es5 Callback Funtion Bind : " + this.state.arowFuc);
      }.bind(this),
      3000
    );
  }
  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Funtion : " + this.state.arrowFuc);
    }, 1000);
  };
  render() {
    return <h2>[THIS IS ArrowFuntion]</h2>;
  }
}

export default R013_ArrowFunction;
