import styled from 'styled-components/native';
import { Platform, FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
  background-color: #1c1d29;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #efefef;
  margin: 64px 0 24px;
`;

export const Card = styled.View`
  width: 100%;
  height: 80px;
  background-color: #2d2d39;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 64px;
`;

export const TextCard = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const InterestsList = styled(FlatList)`
  margin-top: 30px;
  width: 100%;
`;

export const InterestCard = styled.View`
  height: 100px;
  flex-direction: row;
  background-color: #2D2D39;
  border-radius: 15px;
  padding: 12px;
  margin-bottom: 10px;
  align-items: center;
`;

export const ContentInterest = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 15px;
`;

export const TitleInterest = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const TextInterest = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const DateInterest = styled.Text`
  font-size: 10px;
  color: #fff;
  align-self: flex-end;
`;

export const MessageView = styled.View`
  margin-top: 50px;
`;

export const MessageText = styled.Text`
  color: #efefef;
  font-size: 22px;
`;
