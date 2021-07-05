import "antd/dist/antd.css";
import React from "react";
import { Input, Typography, Row, Col, Button } from "antd";
import useForm from "./useForm";
import "./styles.css";

const { Title } = Typography;

function Form() {
  // Define your state schema
  const stateSchema = {
    first_name: { value: "Vincent", error: "" },
    last_name: { value: "", error: "" },
    tags: { value: "", error: "" }
  };

  // Create your own validationStateSchema
  // stateSchema property should be the same in validationStateSchema
  // in-order a validation to works in your input.
  const stateValidatorSchema = {
    first_name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid first name format."
      }
    },
    last_name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid last name format."
      }
    },
    tags: {
      required: true,
      validator: {
        func: value => /^(,?\w{3,})+$/.test(value),
        error: "Invalid tag format."
      }
    }
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const {
    values,
    errors,
    dirty,
    handleOnChange,
    handleOnSubmit,
    disable
  } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

  const { first_name, last_name, tags } = values;

  return (
    <form className="my-form" onSubmit={handleOnSubmit}>
      <Title level={3}>Registration</Title>
      <Row>
        <Col span={4}>First Name</Col>
        <Col span={18}>
          <Input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleOnChange}
          />
          {errors.first_name && dirty.first_name && (
            <p className="error">{errors.first_name}</p>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={4}>Last Name</Col>
        <Col span={18}>
          <Input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleOnChange}
          />
          {errors.last_name && dirty.last_name && (
            <p className="error">{errors.last_name}</p>
          )}
        </Col>
      </Row>

      <Row>
        <Col span={4}>Tags</Col>
        <Col span={18}>
          <Input
            type="text"
            name="tags"
            value={tags}
            onChange={handleOnChange}
          />{" "}
          {errors.tags && dirty.tags && <p className="error">{errors.tags}</p>}
        </Col>
      </Row>
      <Row>
        <Col span={18} push={4}>
          <Button htmlType="submit" type="primary" disabled={disable}>
            Submit
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default Form;
