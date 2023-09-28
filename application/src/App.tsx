import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Avatar,
  Breadcrumb,
  Card,
  Checkbox,
  Divider,
  Input,
  Layout,
  Menu,
  MenuProps,
  Space,
  Tag,
  theme,
} from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const applicants = [
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    hashtags: ["top_candidate", "top_candidate"],
    tags: ["New York", "Marketing", "London"],
  },
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    hashtags: ["top_candidate", "top_candidate"],
    tags: ["New York", "Marketing", "London"],
  },
];

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
  };
});

const items3: MenuProps["items"] = [
  { icon: FileTextOutlined, title: "Personal Information" },
  { icon: FileTextOutlined, title: "Education" },
  { icon: FileTextOutlined, title: "Work Experience" },
  { icon: FileTextOutlined, title: "Activity Filter" },
  { icon: FileTextOutlined, title: "Advanced Filter" },
].map(({ icon, title }, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: title,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header> */}
        <Layout>
          <Sider
            width={50}
            style={{ background: "white", justifyContent: "space-between" }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "80vh", borderRight: 0, paddingLeft: "0" }}
              items={items2}
            />
            <UserOutlined />
          </Sider>
          <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
              <div className="demo-logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                items={items1}
              />
            </Header>
            <Layout>
              <Sider
                width={350}
                style={{ background: "white", alignItems: "inherit" }}
              >
                <Input />
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                  items={items3}
                />
              </Sider>
              <Layout
                style={{
                  padding: "0 24px 24px",
                  backgroundColor: "white",
                  marginLeft: "24px",
                }}
              >
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  {applicants.map(
                    ({ location, name, tags, hashtags, degree }) => (
                      <>
                        <Card
                          style={{
                            textAlign: "initial",
                          }}
                        >
                          <Checkbox
                            style={{
                              marginRight: "10px",
                            }}
                          />
                          <Meta
                            style={{ display: "flex" }}
                            avatar={
                              <Avatar
                                style={{
                                  margin: "12px",
                                  backgroundColor: "#D0E1FF",
                                  color: "##D0E1FF",
                                }}
                                size={64}
                              >
                                {name[0]}
                              </Avatar>
                            }
                            title={name}
                            description={
                              <Space
                                direction="vertical"
                                size={6}
                                style={{ fontSize: "12px", color: "black" }}
                              >
                                <div style={{ fontWeight: "bold" }}>
                                  {location}
                                </div>
                                <div>{degree}</div>
                                <span>
                                  {hashtags.map((hashtag) => (
                                    <span
                                      style={{
                                        color: "#1D4ED8",
                                        marginRight: "8px",
                                      }}
                                    >
                                      #{hashtag}
                                    </span>
                                  ))}
                                </span>
                                <div>
                                  {tags.map((tag) => (
                                    <Tag color="#F3FAFC">
                                      <span
                                        style={{
                                          color: "#037092",
                                          marginRight: "8px",
                                        }}
                                      >
                                        {tag}
                                      </span>
                                    </Tag>
                                  ))}
                                </div>
                              </Space>
                            }
                          />
                        </Card>
                        <Divider style={{ margin: "0" }} />
                      </>
                    )
                  )}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
