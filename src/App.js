import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Screen from "./components/Screen.jsx";
import Cart from "./components/Cart";
import Section from "./components/Section";

function App() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [sign, setsign] = useState("");
  const [screen, setScreen] = useState("");

  useEffect(() => {
    setScreen(num1 + sign + num2);
  }, [num1, num2, sign]);

  function GetBtnValueHandler(value) {
    if (sign === "") {
      const Val = num1.toString() + value.toString();
      setnum1(Val);
    } else {
      const Val = num2.toString() + value.toString();
      setnum2(Val);
    }
  }

  function SetCalSignHandeler(sign) {
    if (num1 !== "" && sign) {
      setsign(sign);
    }
  }

  function ComputeCal(sign) {
    let number1 = parseInt(num1)
    let number2 = parseInt(num2)
switch (sign) {
  case'+':
    return number1 + number2;
    break;
  case'-':
    return number1 - number2;
    break;
  case'/':
    return number1 / number2;
    break;
  case'*':
    return number1 * number2;
    break;
    default:
    return screen;
    break;
}
    return parseInt(num1) * parseInt(num2)
  }
  function clearScreenHandler() {
    setnum1("");
    setnum2("");
    setsign("");
  }

  return (
    <center className="center">
      <Cart>
        <Screen view={screen} />
        <Grid>
          <Section style1={true}>
            <Button
              value={1}
              onClick={() => {
                GetBtnValueHandler(1);
              }}
            />
            <Button
              value={2}
              onClick={() => {
                GetBtnValueHandler(2);
              }}
            />
            <Button
              value={3}
              onClick={() => {
                GetBtnValueHandler(3);
              }}
            />
            <Button
              value={4}
              onClick={() => {
                GetBtnValueHandler(4);
              }}
            />
            <Button
              value={5}
              onClick={() => {
                GetBtnValueHandler(5);
              }}
            />
            <Button
              value={6}
              onClick={() => {
                GetBtnValueHandler(6);
              }}
            />
            <Button
              value={7}
              onClick={() => {
                GetBtnValueHandler(7);
              }}
            />
            <Button
              value={8}
              onClick={() => {
                GetBtnValueHandler(8);
              }}
            />
            <Button
              value={9}
              onClick={() => {
                GetBtnValueHandler(9);
              }}
            />
          </Section>
          <Section>
            <Button
              Colors="gold"
              value={"-"}
              onClick={() => {
                SetCalSignHandeler("-");
              }}
            />
            <Button
              Colors="skyblue"
              value={"+"}
              onClick={() => {
                SetCalSignHandeler("+");
              }}
            />
            <Button
              Colors="pink"
              value={"*"}
              onClick={() => {
                SetCalSignHandeler("*");
              }}
            />
            <Button
              Colors="orange"
              value={"/"}
              onClick={() => {
                SetCalSignHandeler("/");
              }}
            />
          </Section>
          <Section>
            <Button
              Colors="lightgreen"
              value={"="}
              onClick={() => {
                setScreen(ComputeCal(sign));
              }}
            />
            <Button
              Colors="red"
              value={"C"}
              onClick={() => {
                clearScreenHandler();
              }}
            />
            <Button
              value={0}
              onClick={() => {
                GetBtnValueHandler(0);
              }}
            />
          </Section>
        </Grid>
      </Cart>
    </center>
  );
}

export default App;
