import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import CalcDisplay from "../CalcDisplay";
import CalcButtonGroup from "../CalcButtonGroup";
import API from "../../utils/API";
import "./Calculator.css";

export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      results: "",
      param1: "",
      param2: "",
      // APIFunction: null,
      onParam1: true,
      error: false,
      operator: ""
    };

    this.resetValues = this.resetValues.bind(this);
    this.getAPIFunction = this.getAPIFunction.bind(this);
    this.performCalculation = this.performCalculation.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  resetValues(error) {
    this.setState({ 
      input: "",
      results: error ? "Error Occurred - Please Clear!" : "",
      param1: "",
      param2: "",
      APIFunction: null,
      onParam1: true,
      error: error ? true : false
    });  
  }

  getAPIFunction(value) {
    let APIFunction = null;

    if (value === "+")
      APIFunction = API.add;
    else if (value === "-") 
      APIFunction = API.subtract;
    else if (value === "*")
      APIFunction = API.multiply;
    else if (value === "/")
      APIFunction = API.divide;
    // else already initialized to null

    return APIFunction;
  }

  performCalculation(usedEqualSign, value) {
    this.state.APIFunction(this.state.param1, this.state.param2)
    .then(response =>
      this.setState({
        input: usedEqualSign ? "" : this.state.input + " " + value + " ",
        results: response.data.result,
        param1: usedEqualSign ? "" : response.data.result,
        param2: "",
        APIFunction: usedEqualSign ? null : this.getAPIFunction(value),
        onParam1: usedEqualSign ? true : false,
        error: false
      })
    )
    .catch(err => {
      console.log(err);
      this.resetValues(true);
    })
  }

  performMathCalculation = async (e) => {
    e.preventDefault();

    const doMathRequest = {
      operand1: this.state.param1,
      operand2: this.state.param2,
      operation: this.state.operator
    }

    await axios.post("http://localhost:8080/api/doMath", doMathRequest)
    .then(response => 
      this.setState({
        results: response.data.result
      }))
  }

  handleOnClick(event) {
    const value = event.target.value;

    switch (value) {
      case '=': {
        if (this.state.param1 === "" || 
            this.state.param2 === "" || 
            this.state.operator === "" ||
            this.state.APIFunction === null) {
          this.resetValues(true);
        }
        else {
          // this.performCalculation(true, null);
          this.performMathCalculation();
        }
        break;
      }
      case "Clear": {
        this.resetValues(false);
        break;
      }
      case "+":
      case "-":
      case "*":
      case "/": {
        if (this.state.param1 === "") {
          this.resetValues(true);
        }
        else if (!this.state.onParam1) {
          // this.performCalculation(false, value);
          this.setState({
            operator: this.state.operator.value
          })
        }
        else {
          this.setState({
            input: this.state.input + " " + value + " ",
            APIFunction: this.getAPIFunction(value),
            onParam1: false
          }) 
        }
        break;
      }
      default: {
        this.setState({
          input: this.state.input + value,
          param1: 
            this.state.onParam1 ? this.state.param1 + value : this.state.param1,
          param2:
            this.state.onParam1 ? this.state.param2 : this.state.param2 + value
        })
      }
    }
  }

  // handleSubmit = async(e) => {
  //   e.preventDefault();

  //   const doMathRequest = {
  //     operand1: this.state.param1,
  //     operand2: this.state.param2,
  //     operation: this.state.operator
  //   }

  //   await axios.post("http://localhost:8080/api/doMath", doMathRequest).then(res => {

  //     if(res.status == 200) {
  //       alert("Calculation Successful");
  //       window.location.reload();
  //     }
  //   }).then(res => {
  //     this.setState({result: res.data.result})
  //   }
  //   )

  // }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col>
            <h1 id="calcTitle">Simple Calculator</h1>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <CalcDisplay value={this.state.input} />
            <CalcDisplay 
              value={this.state.results}
              error={this.state.error}
              data-cy="result"
            />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <CalcButtonGroup
              handleOnClick={this.handleOnClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}