import { useEffect, useState } from "react";
import styled from "styled-components";

const Two = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://api.publicapis.org/categories", {
        method: "GET",
      });
      let rjon = await res.json();
      let filtered = rjon.filter((item) => {
        return item.includes(input);
      });
      setData(filtered);
    }
    fetchData();
  }, [input]);

  let dayaList;
  if (data[0]) {
    dayaList = data.map((item) => {
      return <div className="datas">{item}</div>;
    });
  }

  return (
    <QtwoDiv>
      <input
        className="item"
        type="text"
        value={input}
        onChange={(e) => onChangeHandler(e)}
      />
      <div className="container"> {dayaList}</div>
    </QtwoDiv>
  );
};

export default Two;

const QtwoDiv = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  .datas {
    margin: 12px;
    padding: 12px;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px #ccc;
    text-align: center;
  }
`;
