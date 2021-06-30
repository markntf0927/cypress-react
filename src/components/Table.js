import React, { memo, useState, useEffect } from "react"
import { Skeleton, Row, Col, Button } from "antd"

function Table() {
  const [loading, setLoading] = useState(true)

  const handleLoading = () => {
    setLoading(!loading)
  }

  useEffect(() => {
    setTimeout(() => {
      handleLoading()
    }, 2000)
  }, [])


  const list = [
    {
      title: "Ant Design, a design language",
      text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    },
    {
      title: "Ant Design",
      text: "We supply a series of design principles.",
    },
    {
      title: "Ant",
      text: "A series of design principles.",
    },
  ]

  return (
    <div className="article">
      {list.map((itm) => (
        <Row key={itm.title}>
          <Skeleton loading={loading} paragraph={{ rows: 2 }} active />

          {!loading && (
            <Col>
              <h4>{itm.title}</h4>
              <p>{itm.text}</p>
            </Col>
          )}
        </Row>
      ))}

    </div>
  )
}

export default memo(Table)
