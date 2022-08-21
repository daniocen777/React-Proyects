import { Row } from "antd";
import Story from "../story";

const StoryList = () => {
  return (
    <Row gutter={[48, 32]}>
      <Story />
      <Story />
    </Row>
  );
};

export default StoryList;
