import { Layout, Image, Typography } from "antd";

import styles from "./styles";
import Home from "./components/home";
import Logo from "./images/insta.png";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width={45} preview={false} src={Logo} />
        &nbsp;
        <Title style={styles.title}>Instaverse</Title>
      </Header>
      <Home />
      <Footer style={styles.footer}>2022 Instaverse</Footer>
    </Layout>
  );
};

export default App;
