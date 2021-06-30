import React, { memo, useState, useEffect } from "react"
import { Skeleton, Row, Col, Tabs, Table, Tag, Space, Empty } from "antd"

function ListTable() {
  const { TabPane } = Tabs
  const { Column } = Table

  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState(1)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  useEffect(() => {
    setTimeout(() => {
      handleLoading()
    }, 1500)
  }, [])

  const handleLoading = () => {
    setLoading(!loading)
  }

  const callback = (key) => {
    console.log(key)
    setTab(key)
  }

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys)

    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  const hasSelected = selectedRowKeys.length > 0

  const isTab1 = tab === "1"
  const isTab2 = tab === "2"

  const [program777, everyday, seasonal] = [
    "777 program",
    "everyday",
    "seasonal",
  ]

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

  const dataColumns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Suplier",
      dataIndex: "suplier",
      key: "suplier",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
  ]

  const data = [
    {
      key: "1",
      productName: "product 1",
      brand: "brand 1",
      supplier: "suplier a",
      address: "New York No. 1 Lake Park",
      tags: [program777, everyday],
    },
    {
      key: "2",
      productName: "product 2",
      brand: "brand 2",
      supplier: "suplier b",
      address: "London No. 1 Lake Park",
      tags: [program777],
    },
    {
      key: "3",
      productName: "product 3",
      brand: "brand 3",
      supplier: "suplier a",
      address: "Sidney No. 1 Lake Park",
      tags: [seasonal],
    },
    {
      key: "4",
      productName: "product 4",
      brand: "brand 4",
      supplier: "suplier c",
      address: "Paris No. 1 Lake Park",
      tags: [everyday],
    },
  ]

  const TabTable = () => (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>

      <Table
        dataSource={data}
        rowSelection={rowSelection}
        columns={dataColumns.map((column) => {
          return {
            ...column,
            render: function renderPlaceholder() {
              return (
                <>
                  <Skeleton
                    loading={isTab1 && loading}
                    key={column.dataIndex}
                    true
                    active
                  />
                </>
              )
            },
          }
        })}
      >
        {!loading && (
          <>
            <Column
              title="Product Name"
              dataIndex="productName"
              key="productName"
            />
            <Column title="Brand" dataIndex="brand" key="brand" />
            <Column title="Supplier" dataIndex="supplier" key="supplier" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={(tags) => (
                <>
                  {tags.map((tag) => (
                    <Tag color="default" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <a>Invite {record.lastName}</a>
                  <a>Delete</a>
                </Space>
              )}
            />
          </>
        )}
      </Table>
    </>
  )

  return (
    <Tabs defaultActiveKey={tab} onChange={callback}>
      <TabPane tab="List" key="1">
        <TabTable />
      </TabPane>
      <TabPane tab="Content" key="2">
        {list.map((itm) => (
          <Row key={itm.title}>
            <Skeleton
              loading={isTab2 && loading}
              paragraph={{ rows: 2 }}
              active
            />

            {!loading && (
              <Col>
                <h4>{itm.title}</h4>
                <p>{itm.text}</p>
              </Col>
            )}
          </Row>
        ))}
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}

export default memo(ListTable)
