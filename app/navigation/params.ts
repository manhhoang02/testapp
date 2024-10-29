import {NavigatorScreenParams} from '@react-navigation/native';
import {FeedItemType} from '../type';

export type ParamsBottomTab = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
  Tab4: undefined;
  Tab5: undefined;
  Tab6: undefined;
};

export type ParamsStack = {
  TabScreen: NavigatorScreenParams<ParamsBottomTab>;
  Home: undefined;
  FeedDetail: {item: FeedItemType};
};
