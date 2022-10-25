import React, { useRef, useState } from 'react';
import Logo from './assets/logo.svg';

import Button from './components/Button';
import H2 from './components/H2';
import P from './components/Paragraph';
import Input from './components/Input';

import * as C from './styles/globalStyles';

function App() {
  const [tipAmout, setTipAmount] = useState('0.00');
  const [totalPerPerson, setTotalPerPerson] = useState('0.00');
  const [grandTotal, setGrandTotal] = useState('0.00');
  const inputBill = useRef();
  const inputPerson = useRef();
  const inputCustom = useRef();

  function catchValues() {
    if (inputBill.current.value === '' || inputPerson.current.value === '') {
      return false;
    }
  }

  function calculateWithValue(value) {
    let tipValue = +value.target.value;
    let valueOfBill = +inputBill.current.value;
    let numberOfPerson = +inputPerson.current.value;
    if (catchValues() !== false) {
      const tipAmount = (valueOfBill * tipValue) / numberOfPerson;
      const totalAmoutPerPerson = tipAmount + valueOfBill / numberOfPerson;
      const grandTotalValue = totalAmoutPerPerson * numberOfPerson;

      setTipAmount(tipAmount.toFixed(2));
      setTotalPerPerson(totalAmoutPerPerson.toFixed(2));
      setGrandTotal(grandTotalValue.toFixed(2));
    }
  }

  function calculateWithCustomValue() {
    let valueOfBill = +inputBill.current.value;
    let numberOfPerson = +inputPerson.current.value;
    let customTip = +inputCustom.current.value / 100;
    if (catchValues() !== false) {
      const tipAmount = (valueOfBill * customTip) / numberOfPerson;
      const totalAmoutPerPerson = tipAmount + valueOfBill / numberOfPerson;
      const grandTotalValue = totalAmoutPerPerson * numberOfPerson;
      setTipAmount(tipAmount.toFixed(2));
      setTotalPerPerson(totalAmoutPerPerson.toFixed(2));
      setGrandTotal(grandTotalValue.toFixed(2));
    }
  }

  function resetValues() {
    inputBill.current.value = '';
    inputPerson.current.value = '';
    inputCustom.current.value = '';
  }

  return (
    <C.Container>
      <C.Image alt='logo' src={Logo} />
      <C.ContainerItens>
        <C.DivLeft>
          <C.DivSon>
            <C.Label>Bill</C.Label>
            <Input
              type='number'
              onChange={catchValues}
              ref={inputBill}
              placeholder='0'
            />
          </C.DivSon>
          <C.ContainerDiv>
            <P>Select Tip %</P>
            <Button value={0.05} onClick={calculateWithValue}>
              5%
            </Button>
            <Button value={0.1} onClick={calculateWithValue}>
              10%
            </Button>
            <Button value={0.15} onClick={calculateWithValue}>
              15%
            </Button>
            <Button value={0.25} onClick={calculateWithValue}>
              25%
            </Button>
            <Button value={0.5} onClick={calculateWithValue}>
              50%
            </Button>
            <C.CustomInput
              onChange={calculateWithCustomValue}
              ref={inputCustom}
              type='number'
              placeholder='Custom'
            ></C.CustomInput>
          </C.ContainerDiv>
          <C.DivSon>
            <C.Label>Number Of People</C.Label>
            <C.InputPerson
              onChange={catchValues}
              type='number'
              ref={inputPerson}
              placeholder='0'
            />
          </C.DivSon>
        </C.DivLeft>
        <C.DivRight>
          <C.DivSon>
            <C.DivParagraphs>
              <P color='#FFF' fontsize='14px' gridrow='1/2'>
                Tip Amount
              </P>
              <P fontsize='10px'>/person</P>
            </C.DivParagraphs>
            <H2>{'$' + tipAmout}</H2>
          </C.DivSon>
          <C.DivSon>
            <C.DivParagraphs>
              <P color='#FFF' fontsize='14px' gridrow='1/2'>
                Total
              </P>
              <P fontsize='10px'>/person</P>
            </C.DivParagraphs>
            <H2>{'$' + totalPerPerson}</H2>
          </C.DivSon>
          <C.DivSon>
            <C.DivParagraphs>
              <P color='#FFF' fontsize='14px' gridrow='1/2'>
                Grand Total
              </P>
              <P fontsize='10px'>/person</P>
            </C.DivParagraphs>
            <H2>{'$' + grandTotal}</H2>
          </C.DivSon>
          <Button onClick={resetValues} isReset={true}>
            RESET
          </Button>
        </C.DivRight>
      </C.ContainerItens>
      <C.Footer>
        <p>
          Challenge by
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor.
          </a>
        </p>
        <p>
          Coded by
          <a href='https://www.linkedin.com/in/alef-reis2022/' target='_blank'>
            Alef Reis.
          </a>
        </p>
      </C.Footer>
    </C.Container>
  );
}

export default App;
