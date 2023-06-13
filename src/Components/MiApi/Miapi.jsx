import React, { useState, useEffect } from "react";
import { Card, Badge} from "react-bootstrap";
import './Miapi.css';

const Miapi = ({onLoadData, dataFiltrada}) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if(dataFiltrada.length > 0) {
      setInfo(dataFiltrada);
    } else {
      const consultarApi = async () => {
        const res = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await res.json();
        setInfo(data);
        onLoadData(data);
      };  
      consultarApi();
    }
  }, [dataFiltrada]);

  return (
    <div className="containerCard">
      {info.map((digimon, i) => (
        <Card key={i} className="cardInfo" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={digimon.img} />
          <Card.Body>
          <Badge bg="dark">{digimon.name}</Badge>
            <Card.Text>{digimon.level}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Miapi;