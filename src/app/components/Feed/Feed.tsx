import React from "react";
import { Card, Avatar, Carousel, Button, Image } from "antd";
import { LikeOutlined, CommentOutlined, SendOutlined } from "@ant-design/icons";

import data from "@/app/utils/data";

const Feed = () => {
  return (
    <div style={{ height: "200vh", maxWidth: "360px", margin: "20px auto" }}>
      {data.map((post, index) => (
        <Card
          key={index}
          style={{ marginBottom: "20px" }}
          cover={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Avatar src={post.avatar} size={40} />
                <div style={{ marginLeft: "10px" }}>
                  <strong>{post.nickname}</strong>
                  <br />
                  <small>{`${post.location}, ${post.uf}`}</small>
                </div>
              </div>
              <Carousel>
                {post.image.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <Image
                      width="100%"
                      height="400px"
                      src={img}
                      alt={`Post ${index} Image ${imgIndex}`}
                    />
                  </div>
                ))}
              </Carousel>
            </>
          }
          actions={[
            <Button icon={<LikeOutlined />} type="text" key="like">
              {post.likes} Likes
            </Button>,
            <Button icon={<CommentOutlined />} type="text" key="comment">
              {post.comments} Comments
            </Button>,
            <Button icon={<SendOutlined />} type="text" key="comment">
              Msg
            </Button>,
          ]}
        >
          <p>{post.description}</p>
          <p>R${post.price.toFixed(2)}</p>
          <small>Posted on: {new Date(post.posted).toLocaleDateString()}</small>
        </Card>
      ))}
    </div>
  );
};

export default Feed;
