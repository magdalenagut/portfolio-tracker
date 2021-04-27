import React, { Component } from "react";
import { IoIosSwap } from "react-icons/io";
class Calculator extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
  };

  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null,
      },
      this.calculate
    );
  };

  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then((res) => res.json())
        .then((data) => {
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
          });
        });
    }
  };

  handleSwap = (e) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null,
      },
      this.calculate
    );
  };

  render() {
    const { currencies, base, amount, convertTo, result } = this.state;
    return (
      <>
        {" "}
        <div className="calculator_background">
          <div className="wrap">
            <div className="calculator">
            <p className="result">
              {amount} {base} {`is equal to `}
              {amount === ""
                ? "0"
                : result === null
                ? "Calculating..."
                : result}{" "}
              {convertTo}
            </p>

            <div className="row">
              <form className="first_select">
                <input
                  type="number"
                  value={amount}
                  onChange={this.handleInput}
                  placeholder="Enter a number"
                />
                <select
                  name="base"
                  value={base}
                  onChange={this.handleSelect}
                  placeholder="Enter a number"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </form>

              <form className="second_select">
                <input
                  disabled={true}
                  value={
                    amount === ""
                      ? "0"
                      : result === null
                      ? "Calculating..."
                      : result
                  }
                />
                <select
                  name="convertTo"
                  value={convertTo}
                  onChange={this.handleSelect}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </form>



            </div>

            <div className="swap">

<p><IoIosSwap onClick={this.handleSwap} /></p> 
</div>

          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Calculator;
