export interface RespFeed {
  status: boolean;
  message: string;
  data: FeedItemType[];
}

export interface FeedItemType {
  id: number;
  title: string;
  uid: number;
  attachment: Attachment[];
  like_types: LikeTypes | null;
  type: number;
  app: App;
  hide: number;
  likes: number;
  dislikes: number;
  audio_uri: null;
  data: any[];
  type_feed: TypeFeed;
  layout_feed: string;
  feel_feed: Feed | null;
  location_feed: LocationFeed | null;
  event_feed: Feed | null;
  entity_id: number;
  aid: number;
  created_at: Date;
  updated_at: Date | null;
  friend_feed: string;
  views: number;
  public_status: number;
  privacy: Privacy;
  entity_name: string;
  entity_avatar: string;
  entity_background: string;
  entity_uri: string;
  entity_uid?: number;
  entity_interact: number;
  preview_url: string;
  user_create: UserCreate;
  count_comment: number;
  count_like: number;
  count_share: number;
  liked: boolean;
  type_like: TypeLike;
  saved: number;
  is_follow: number;
  is_me: number;
  is_pinned: number;
  time_created: string;
  stream_share: string;
  list_friend: string;
  group_detail: number;
  fanpage_detail: number;
  u_detail: number;
}

export enum App {
  Videos = 'videos',
}

export interface Attachment {
  id: number;
  link: string;
  thumb: string;
  name: string;
  app: App;
  media_link: string;
  media_thumb: string;
}

export interface Feed {
  id: string;
  content: string;
  icon: string;
  name?: TypeLike;
}

export enum TypeLike {
  Empty = '',
  Haha = 'haha',
  Love = 'love',
}

export interface LikeTypes {
  like: number;
  haha: number;
  love: number;
  sad: number;
  angry: number;
  wow: number;
}

export interface LocationFeed {
  id: string;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  latitude: string;
  longitude: string;
}

export enum Privacy {
  Public = 'public',
}

export enum TypeFeed {
  Group = 'group',
  U = 'u',
}

export interface UserCreate {
  username: string;
  avatar: string;
  fullname: string;
}
