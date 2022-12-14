import React from "react";
import { ButtonGroup, Col } from "react-bootstrap";

import CalcButton from "../CalcButton";

import "./CalcButtonGroup.css";

const CalcButtonGroup = props => {
  return (
    <div>
      <ButtonGroup justified>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="1"
            handleOnClick={props.handleOnClick}
            data-cy="button1"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="2"
            handleOnClick={props.handleOnClick}
            data-cy="button2"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="3"
            handleOnClick={props.handleOnClick}
            data-cy="button3"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="4"
            handleOnClick={props.handleOnClick}
            data-cy="button4"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="info"
            label="-"
            handleOnClick={props.handleOnClick}
            data-cy="buttonSubtract"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="info"
            label="+"
            handleOnClick={props.handleOnClick}
            data-cy="buttonAdd"
          />
        </ButtonGroup>
      </ButtonGroup>

      <ButtonGroup justified>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="5"
            handleOnClick={props.handleOnClick}
            data-cy="button5"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="6"
            handleOnClick={props.handleOnClick}
            data-cy="button6"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="7"
            handleOnClick={props.handleOnClick}
            data-cy="button7"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="primary"
            label="8"
            handleOnClick={props.handleOnClick}
            data-cy="button8"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="info"
            label="*"
            handleOnClick={props.handleOnClick}
            data-cy="buttonMultiply"
          />
        </ButtonGroup>
        <ButtonGroup>
          <CalcButton
            bsStyle="info"
            label="/"
            handleOnClick={props.handleOnClick}
            data-cy="buttonDivide"
          />
        </ButtonGroup>
      </ButtonGroup>
      <Col xs={6} md={6} className="buttonCol">
        <ButtonGroup justified>
          <ButtonGroup>
            <CalcButton
              bsStyle="primary"
              label="9"
              handleOnClick={props.handleOnClick}
              data-cy="button9"
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalcButton
              bsStyle="primary"
              label="."
              handleOnClick={props.handleOnClick}
              data-cy="buttonDecimal"
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalcButton
              bsStyle="primary"
              label="0"
              handleOnClick={props.handleOnClick}
              data-cy="button0"
            />
          </ButtonGroup>
        </ButtonGroup>
      </Col>
      <Col xs={6} md={6} className="buttonCol">
        <ButtonGroup justified>
          <ButtonGroup>
            <CalcButton
              bsStyle="warning"
              label="Clear"
              handleOnClick={props.handleOnClick}
              data-cy="buttonClear"
            />
          </ButtonGroup>
          <ButtonGroup>
            <CalcButton
              bsStyle="success"
              label="="
              handleOnClick={props.handleOnClick}
              data-cy="buttonEquals"
            />
          </ButtonGroup>
        </ButtonGroup>
      </Col>
    </div>
  );
}

export default CalcButtonGroup;