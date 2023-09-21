import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: #121214;
  color: #fff;
  border-radius: 6px;
  padding: 16px;
  font-family: "Roboto_400Regular";
  font-size: 16px;
`;
