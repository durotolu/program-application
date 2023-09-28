import React from "react";
import "./App.css";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Layout,
  Menu,
  MenuProps,
  Select,
  Space,
  Tag,
} from "antd";
import {
  HomeOutlined,
  UsergroupDeleteOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  ProfileOutlined,
  HeartOutlined,
  UserOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
  TagOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
  MailOutlined,
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
    name: "John Doe",
    location: "Boston, USA",
    degree: "PhD",
    hashtags: ["top_candidate", "top_candidate"],
    tags: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Boston, USA",
    degree: "PhD",
    hashtags: ["top_candidate", "top_candidate"],
    tags: ["New York", "Marketing", "London"],
  },
];

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  HomeOutlined,
  UsergroupDeleteOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  ProfileOutlined,
  HeartOutlined,
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

    children: new Array(0).fill(null).map((_, j) => {
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
        <Layout>
          <Sider
            width={50}
            style={{ background: "white", paddingBottom: "20px" }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "90vh", borderRight: 0, paddingLeft: "0" }}
              items={items2}
            />
            <Space
              size={32}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <SettingOutlined />
              <UserOutlined />
            </Space>
          </Sider>
          <Layout>
            <Header
              style={{
                display: "flex",
                alignItems: "center",
                background: "initial",
                padding: "6px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#1D4ED8",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  >
                    London Internship Program
                  </div>
                </div>
                <div>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ color: "#1D5ECD", width: "300px", textAlign:"start" }}
                    value={"Opportunity Browsing"}
                  />
              </div>
                <div>
                  <Button style={{marginRight: "10px"}} icon={<TagOutlined />} />
                  <Button style={{marginRight: "10px"}} icon={<UserAddOutlined />} />
                  <Button style={{marginRight: "10px"}} icon={<UserAddOutlined />} />
                  <Button style={{marginRight: "10px"}} icon={<UserDeleteOutlined />} />
                  <Button style={{marginRight: "10px"}} icon={<UserSwitchOutlined />} />
                  <Button style={{marginRight: "10px"}} icon={<MailOutlined />} />
                  <Button
                    placeholder="Select a person"
                    style={{ backgroundColor: "#1D5ECD", color: "white" }}
                  >
                    Move To Video Interview
                  </Button>
                </div>
              </div>
            </Header>
            <Layout>
              <Sider
                width={350}
                style={{
                  alignItems: "inherit",
                  height: "70%",
                  marginLeft: "20px",
                  textAlign: "initial",
                  background: "initial",
                }}
              >
                <Input
                  size="large"
                  prefix={<SearchOutlined />}
                  suffix={<ExclamationCircleOutlined />}
                  placeholder="Serach by name, edu, exp or #tag"
                  style={{ marginBottom: "24px", background: "white" }}
                />
                <div
                  style={{
                    width: "100%",
                    background: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px 30px",
                  }}
                >
                  <div style={{ fontWeight: "500" }}>Filters</div>
                  <div>0 Selected</div>
                </div>
                <Divider style={{ margin: "0" }} />
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                    borderRight: 0,
                    background: "white",
                  }}
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
                    paddingTop: 24,
                    paddingBottom: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      background: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "16px 24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#1D4ED8",
                      }}
                    >
                      <Checkbox />
                      <div style={{ fontWeight: "500", paddingLeft: "20px" }}>
                        247 Candidates
                      </div>
                    </div>
                    <div>
                      <span style={{ color: "#1D4ED8" }}>Qualified</span>
                      <span style={{ margin: "0 24px" }}>
                        Task <Tag style={{ borderRadius: "45%" }}>25</Tag>
                      </span>
                      <span>
                        Disqualified{" "}
                        <Tag style={{ borderRadius: "45%" }}>78</Tag>
                      </span>
                    </div>
                  </div>
                  <Divider style={{ margin: "0" }} />
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
