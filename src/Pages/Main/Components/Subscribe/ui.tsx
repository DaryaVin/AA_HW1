import React from "react";
import "./style.scss";
import { Button, Input } from "../../../../Shared";

export const Subscrible = () => {
  return (
    <section className="subscrible">
      <h4 className="subscrible__header">GET 50%</h4>
      <form action="#" className="subscrible__form">
        <Input
          className="subscrible__input"
          placeholder="Enter Your Email Address"
        >
          <Button
            className="subscrible__btnSubmit"
            type="submit"
            theme="fillBcg"
          >
            subscribe
          </Button>
        </Input>
      </form>
    </section>
  );
};
