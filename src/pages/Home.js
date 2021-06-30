import React, { useState } from "react"
import { Row, Col } from "antd"

import Layout from "../components/shared/Layout"
import Toggle from "../components/Toggle"
import Content from "../components/shared/Content"
import Table from "../components/Table"

// import Stack from '../utils/stack'

function Home() {
  const [text, setText] = useState("no text")

  const handleTextChange = (evt) => setText(evt.target.value)

  // const arr = new Stack()
  // arr.push({'name': 'tom', 'age': 35})
  // arr.push({'name': 'susan', 'age': 83})
  // arr.push({'name': 'peter', 'age': 13})
  // console.log('arr',arr, arr.getElementAtIndex(1));

  return (
    <Layout>
      <div className="App">
        <Toggle />

        <Content text={text} />

        <input onChange={handleTextChange} />

        <Table />

        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home
