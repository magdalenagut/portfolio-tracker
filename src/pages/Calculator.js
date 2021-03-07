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
    const { currencies, base, amount, convertTo, result} = this.state;
    return (
      <>
        <div className="calculator">
              <p>
                {amount} {base} {`is equal to `}
                {amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {convertTo}
              </p>

              <div className="row">
                  <form>
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form__input"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form__select"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                  
                  <form>
                    <input
                      disabled={true}
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="form__select"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                </div>
                <div>
                  <div className="swap">
                  <IoIosSwap onClick={this.handleSwap}/>
                  </div>
                </div>
              </div>
      </>
    );
  }
}

export default Calculator;
