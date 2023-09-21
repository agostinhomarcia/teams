import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: #29292e;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #c4c4cc;
  font-family: "Roboto_400Regular";
`;

export const Icon = styled(UsersThree)`
  size: 32px;
  color: #00875f;
  margin-right: 20px;
`;
