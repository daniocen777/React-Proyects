import { Layout } from "antd";

import StoryForm from "../storyForm";
import StoryList from "../storyList";

import styles from "./styles";

const { Sider, Content } = Layout;

const Home = () => {
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
