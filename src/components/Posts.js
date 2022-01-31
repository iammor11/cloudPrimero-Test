import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/post";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Posts = (props) => {
  const { posts, initialPosts, getPosts } = props;

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={posts || initialPosts}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text={`${Math.floor(Math.random() * 100)}K`}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text={`${Math.floor(Math.random() * 100)}K`}
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text={`${Math.floor(Math.random() * 100)}K`}
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.body}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};
const mapStateToProps = ({ post: { posts, initialPosts } }) => ({
  posts,
  initialPosts,
});
const mapDispatchToProps = { getPosts };
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
