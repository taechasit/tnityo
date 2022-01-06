import { useEffect, useState } from "react";
import styled from "styled-components";

const One = () => {
  const [input, setInput] = useState(1);
  const [select, setSelect] = useState("isPrime");
  const [answer, setAnswer] = useState(null);
  const onChangeHandler = (e) => {
    if (+e.target.value >= 1) {
      setInput(Math.floor(+e.target.value));
    } else if (+e.target.value < 1) {
      setInput(1);
    }
  };
  const onSelectChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    const isPrime = (num) => {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    };

    const isFibonacci = (num, a = 0, b = 1) => {
      if (num === 0 || num === 1) {
        return true;
      }

      let nextNumber = a + b;

      if (nextNumber === num) {
        return true;
      } else if (nextNumber > num) {
        return false;
      }

      return isFibonacci(num, b, nextNumber);
    };
    if (select === "isPrime") {
      if (isPrime(input)) {
        setAnswer(true);
      } else {
        setAnswer(false);
      }
    } else {
      setAnswer(isFibonacci(input));
    }
  }, [select, input, answer]);

  return (
    <QoneDiv>
      <div className="l">
        <input type="text" value={input} onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className="m">
        <select value={select} onChange={(e) => onSelectChangeHandler(e)}>
          <option value="isPrime" key="isPrime">
            isPrime
          </option>
          <option value="isFibonacci" key="isFibonacci">
            isFibonacci
          </option>
        </select>
      </div>
      <div className="r">
        <h1>{answer + ""}</h1>
      </div>
    </QoneDiv>
  );
};

export default One;

const QoneDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  > * {
    border: 1px solid #ccc;
  }
  .l {
    min-width: 200px;
  }
  .m {
    min-width: 100px;
    flex-grow: 1;
  }
  .r {
    width: 300px;
  }
`;
