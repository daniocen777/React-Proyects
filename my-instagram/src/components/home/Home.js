import { useEffect, useState } from "react";

import { Layout } from "antd";
import { useDispatch } from "react-redux";

import StoryForm from "../storyForm";
import StoryList from "../storyList";

import styles from "./styles";
import { getStories } from "../../actions/story";

const { Sider, Content } = Layout;

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <Layout>
      <Sider style={styles.sider} width={400}>
        <StoryForm selectedId={selectedId} setSelectedId={setSelectedId} />
      </Sider>
      <Content style={styles.content}>
        <StoryList setSelectedId={setSelectedId} />
      </Content>
    </Layout>
  );
};

export default Home;
