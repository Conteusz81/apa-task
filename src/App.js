import React from 'react';
import './styles/main.css';
import MainTemplate from "./components/MainTemplate";
import { mockupData } from "./util/mockup";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <MainTemplate>
        {
          mockupData.map(({ id, content, status }) => <Card key={id} id={id} content={content} status={status} />)
        }
      </MainTemplate>
    </div>
  );
}

export default App;
