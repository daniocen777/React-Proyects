import { useEffect } from "react";

import { Layout } from "antd";
import { useDispatch } from "react-redux";

import StoryForm from "../storyForm";
import StoryList from "../storyList";

import styles from "./styles";
import { getStories } from "../../actions/story";

const { Sider, Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <Layout>
      <Sider style={styles.sider} width={400}>
        <StoryForm />
      </Sider>
      <Content style={styles.content}>
        <StoryList />
      </Content>
    </Layout>
  );
};

export default Home;
