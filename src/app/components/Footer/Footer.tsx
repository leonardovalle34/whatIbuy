import {
  HomeOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const AppFooter = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        color: "black",
        borderTop: "1px solid #e8e8e8",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        zIndex: 1000,
      }}
    >
      <HomeOutlined style={{ fontSize: "24px" }} />
      <SearchOutlined style={{ fontSize: "24px" }} />
      <PlusCircleOutlined style={{ fontSize: "24px" }} />
      <HeartOutlined style={{ fontSize: "24px" }} />
      <UserOutlined style={{ fontSize: "24px" }} />
    </div>
  );
};

export default AppFooter;
