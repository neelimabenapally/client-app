import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { storiesOf } from "@storybook/react";
import HomePage from "../components/HomePage";
import { MemoryRouter } from "react-router";

storiesOf( "Home Page", module )
    .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
    <HomePage/>
  ));
