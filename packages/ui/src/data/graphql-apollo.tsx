import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentTwitterTweet = {
  __typename?: 'ComponentTwitterTweet';
  author: ComponentTwitterTwitterUser;
  id: Scalars['ID'];
  lang?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  twitter_created_at: Scalars['DateTime'];
  twitter_id: Scalars['String'];
};

export type ComponentTwitterTweetFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTwitterTweetFiltersInput>>>;
  author?: InputMaybe<ComponentTwitterTwitterUserFiltersInput>;
  lang?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTwitterTweetFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTwitterTweetFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  twitter_created_at?: InputMaybe<DateTimeFilterInput>;
  twitter_id?: InputMaybe<StringFilterInput>;
};

export type ComponentTwitterTweetInput = {
  author?: InputMaybe<ComponentTwitterTwitterUserInput>;
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  twitter_created_at?: InputMaybe<Scalars['DateTime']>;
  twitter_id?: InputMaybe<Scalars['String']>;
};

export type ComponentTwitterTwitterUser = {
  __typename?: 'ComponentTwitterTwitterUser';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  profile_image_url?: Maybe<Scalars['String']>;
  twitter_id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type ComponentTwitterTwitterUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTwitterTwitterUserFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTwitterTwitterUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTwitterTwitterUserFiltersInput>>>;
  profile_image_url?: InputMaybe<StringFilterInput>;
  twitter_id?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type ComponentTwitterTwitterUserInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  profile_image_url?: InputMaybe<Scalars['String']>;
  twitter_id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Prediction_Status {
  Falsified = 'falsified',
  Inconclusive = 'inconclusive',
  Pending = 'pending',
  Validated = 'validated'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = ComponentTwitterTweet | ComponentTwitterTwitterUser | I18NLocale | Prediction | Tracker | Tweet | TwitterUser | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPrediction?: Maybe<PredictionEntityResponse>;
  createTracker?: Maybe<TrackerEntityResponse>;
  createTweet?: Maybe<TweetEntityResponse>;
  createTwitterUser?: Maybe<TwitterUserEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deletePrediction?: Maybe<PredictionEntityResponse>;
  deleteTracker?: Maybe<TrackerEntityResponse>;
  deleteTweet?: Maybe<TweetEntityResponse>;
  deleteTwitterUser?: Maybe<TwitterUserEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updatePrediction?: Maybe<PredictionEntityResponse>;
  updateTracker?: Maybe<TrackerEntityResponse>;
  updateTweet?: Maybe<TweetEntityResponse>;
  updateTwitterUser?: Maybe<TwitterUserEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreatePredictionArgs = {
  data: PredictionInput;
};


export type MutationCreateTrackerArgs = {
  data: TrackerInput;
};


export type MutationCreateTweetArgs = {
  data: TweetInput;
};


export type MutationCreateTwitterUserArgs = {
  data: TwitterUserInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeletePredictionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTrackerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTweetArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTwitterUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePredictionArgs = {
  data: PredictionInput;
  id: Scalars['ID'];
};


export type MutationUpdateTrackerArgs = {
  data: TrackerInput;
  id: Scalars['ID'];
};


export type MutationUpdateTweetArgs = {
  data: TweetInput;
  id: Scalars['ID'];
};


export type MutationUpdateTwitterUserArgs = {
  data: TwitterUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Prediction = {
  __typename?: 'Prediction';
  author: ComponentTwitterTwitterUser;
  author_user?: Maybe<TwitterUserEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  original_tweet_id: Scalars['String'];
  source_tweet?: Maybe<TweetEntityResponse>;
  source_tweet_id: Scalars['String'];
  status: Enum_Prediction_Status;
  tweet: ComponentTwitterTweet;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PredictionEntity = {
  __typename?: 'PredictionEntity';
  attributes?: Maybe<Prediction>;
  id?: Maybe<Scalars['ID']>;
};

export type PredictionEntityResponse = {
  __typename?: 'PredictionEntityResponse';
  data?: Maybe<PredictionEntity>;
};

export type PredictionEntityResponseCollection = {
  __typename?: 'PredictionEntityResponseCollection';
  data: Array<PredictionEntity>;
  meta: ResponseCollectionMeta;
};

export type PredictionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PredictionFiltersInput>>>;
  author?: InputMaybe<ComponentTwitterTwitterUserFiltersInput>;
  author_user?: InputMaybe<TwitterUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PredictionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PredictionFiltersInput>>>;
  original_tweet_id?: InputMaybe<StringFilterInput>;
  source_tweet?: InputMaybe<TweetFiltersInput>;
  source_tweet_id?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tweet?: InputMaybe<ComponentTwitterTweetFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PredictionInput = {
  author?: InputMaybe<ComponentTwitterTwitterUserInput>;
  author_user?: InputMaybe<Scalars['ID']>;
  original_tweet_id?: InputMaybe<Scalars['String']>;
  source_tweet?: InputMaybe<Scalars['ID']>;
  source_tweet_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Prediction_Status>;
  tweet?: InputMaybe<ComponentTwitterTweetInput>;
};

export type Query = {
  __typename?: 'Query';
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  prediction?: Maybe<PredictionEntityResponse>;
  predictions?: Maybe<PredictionEntityResponseCollection>;
  tracker?: Maybe<TrackerEntityResponse>;
  trackers?: Maybe<TrackerEntityResponseCollection>;
  tweet?: Maybe<TweetEntityResponse>;
  tweets?: Maybe<TweetEntityResponseCollection>;
  twitterUser?: Maybe<TwitterUserEntityResponse>;
  twitterUsers?: Maybe<TwitterUserEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPredictionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPredictionsArgs = {
  filters?: InputMaybe<PredictionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTrackerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTrackersArgs = {
  filters?: InputMaybe<TrackerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTweetArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTweetsArgs = {
  filters?: InputMaybe<TweetFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTwitterUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwitterUsersArgs = {
  filters?: InputMaybe<TwitterUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tracker = {
  __typename?: 'Tracker';
  createdAt?: Maybe<Scalars['DateTime']>;
  prediction?: Maybe<PredictionEntityResponse>;
  twitter_user?: Maybe<TwitterUserEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TrackerEntity = {
  __typename?: 'TrackerEntity';
  attributes?: Maybe<Tracker>;
  id?: Maybe<Scalars['ID']>;
};

export type TrackerEntityResponse = {
  __typename?: 'TrackerEntityResponse';
  data?: Maybe<TrackerEntity>;
};

export type TrackerEntityResponseCollection = {
  __typename?: 'TrackerEntityResponseCollection';
  data: Array<TrackerEntity>;
  meta: ResponseCollectionMeta;
};

export type TrackerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TrackerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TrackerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TrackerFiltersInput>>>;
  prediction?: InputMaybe<PredictionFiltersInput>;
  twitter_user?: InputMaybe<TwitterUserFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TrackerInput = {
  prediction?: InputMaybe<Scalars['ID']>;
  twitter_user?: InputMaybe<Scalars['ID']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  author: ComponentTwitterTwitterUser;
  createdAt?: Maybe<Scalars['DateTime']>;
  event_data: Scalars['JSON'];
  lang?: Maybe<Scalars['String']>;
  original_tweet: ComponentTwitterTweet;
  original_tweet_data: Scalars['JSON'];
  text: Scalars['String'];
  twitter_created_at?: Maybe<Scalars['DateTime']>;
  twitter_id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TweetEntity = {
  __typename?: 'TweetEntity';
  attributes?: Maybe<Tweet>;
  id?: Maybe<Scalars['ID']>;
};

export type TweetEntityResponse = {
  __typename?: 'TweetEntityResponse';
  data?: Maybe<TweetEntity>;
};

export type TweetEntityResponseCollection = {
  __typename?: 'TweetEntityResponseCollection';
  data: Array<TweetEntity>;
  meta: ResponseCollectionMeta;
};

export type TweetFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TweetFiltersInput>>>;
  author?: InputMaybe<ComponentTwitterTwitterUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event_data?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lang?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TweetFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TweetFiltersInput>>>;
  original_tweet?: InputMaybe<ComponentTwitterTweetFiltersInput>;
  original_tweet_data?: InputMaybe<JsonFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  twitter_created_at?: InputMaybe<DateTimeFilterInput>;
  twitter_id?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TweetInput = {
  author?: InputMaybe<ComponentTwitterTwitterUserInput>;
  event_data?: InputMaybe<Scalars['JSON']>;
  lang?: InputMaybe<Scalars['String']>;
  original_tweet?: InputMaybe<ComponentTwitterTweetInput>;
  original_tweet_data?: InputMaybe<Scalars['JSON']>;
  text?: InputMaybe<Scalars['String']>;
  twitter_created_at?: InputMaybe<Scalars['DateTime']>;
  twitter_id?: InputMaybe<Scalars['String']>;
};

export type TwitterUser = {
  __typename?: 'TwitterUser';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  profile_image_url?: Maybe<Scalars['String']>;
  twitter_id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type TwitterUserEntity = {
  __typename?: 'TwitterUserEntity';
  attributes?: Maybe<TwitterUser>;
  id?: Maybe<Scalars['ID']>;
};

export type TwitterUserEntityResponse = {
  __typename?: 'TwitterUserEntityResponse';
  data?: Maybe<TwitterUserEntity>;
};

export type TwitterUserEntityResponseCollection = {
  __typename?: 'TwitterUserEntityResponseCollection';
  data: Array<TwitterUserEntity>;
  meta: ResponseCollectionMeta;
};

export type TwitterUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TwitterUserFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TwitterUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TwitterUserFiltersInput>>>;
  profile_image_url?: InputMaybe<StringFilterInput>;
  twitter_id?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type TwitterUserInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_image_url?: InputMaybe<Scalars['String']>;
  twitter_id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CollectionMetaFragment = { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } };

export type PredictionDataFragment = { __typename?: 'PredictionEntity', id?: string | null, attributes?: { __typename?: 'Prediction', status: Enum_Prediction_Status, original_tweet_id: string, tweet: { __typename?: 'ComponentTwitterTweet', id: string, twitter_id: string, text: string, twitter_created_at: any, lang?: string | null, author: { __typename?: 'ComponentTwitterTwitterUser', id: string, twitter_id: string, name: string, username: string, url?: string | null, description?: string | null, profile_image_url?: string | null } }, source_tweet?: { __typename?: 'TweetEntityResponse', data?: { __typename?: 'TweetEntity', id?: string | null, attributes?: { __typename?: 'Tweet', author: { __typename?: 'ComponentTwitterTwitterUser', id: string, twitter_id: string, name: string, username: string, url?: string | null, description?: string | null, profile_image_url?: string | null } } | null } | null } | null } | null };

export type PredictionsQueryVariables = Exact<{
  filters?: InputMaybe<PredictionFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type PredictionsQuery = { __typename?: 'Query', predictions?: { __typename?: 'PredictionEntityResponseCollection', data: Array<{ __typename?: 'PredictionEntity', id?: string | null, attributes?: { __typename?: 'Prediction', status: Enum_Prediction_Status, original_tweet_id: string, tweet: { __typename?: 'ComponentTwitterTweet', id: string, twitter_id: string, text: string, twitter_created_at: any, lang?: string | null, author: { __typename?: 'ComponentTwitterTwitterUser', id: string, twitter_id: string, name: string, username: string, url?: string | null, description?: string | null, profile_image_url?: string | null } }, source_tweet?: { __typename?: 'TweetEntityResponse', data?: { __typename?: 'TweetEntity', id?: string | null, attributes?: { __typename?: 'Tweet', author: { __typename?: 'ComponentTwitterTwitterUser', id: string, twitter_id: string, name: string, username: string, url?: string | null, description?: string | null, profile_image_url?: string | null } } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type TweetDataFragment = { __typename?: 'ComponentTwitterTweet', id: string, twitter_id: string, text: string, twitter_created_at: any, lang?: string | null, author: { __typename?: 'ComponentTwitterTwitterUser', id: string, twitter_id: string, name: string, username: string, url?: string | null, description?: string | null, profile_image_url?: string | null } };

export type TwitterUserDataFragment = { __typename?: 'ComponentTwitterTwitterUser', id: string, twitter_id: string, name: string, username: string, url?: string | null, description?: string | null, profile_image_url?: string | null };

export const CollectionMetaFragmentDoc = gql`
    fragment CollectionMeta on ResponseCollectionMeta {
  pagination {
    total
    page
    pageSize
    pageCount
  }
}
    `;
export const TwitterUserDataFragmentDoc = gql`
    fragment TwitterUserData on ComponentTwitterTwitterUser {
  id
  twitter_id
  name
  username
  url
  description
  profile_image_url
}
    `;
export const TweetDataFragmentDoc = gql`
    fragment TweetData on ComponentTwitterTweet {
  id
  twitter_id
  text
  twitter_created_at
  lang
  author {
    ...TwitterUserData
  }
}
    ${TwitterUserDataFragmentDoc}`;
export const PredictionDataFragmentDoc = gql`
    fragment PredictionData on PredictionEntity {
  id
  attributes {
    status
    original_tweet_id
    tweet {
      ...TweetData
    }
    source_tweet {
      data {
        id
        attributes {
          author {
            ...TwitterUserData
          }
        }
      }
    }
  }
}
    ${TweetDataFragmentDoc}
${TwitterUserDataFragmentDoc}`;
export const PredictionsDocument = gql`
    query predictions($filters: PredictionFiltersInput, $sort: [String]) {
  predictions(filters: $filters, sort: $sort) {
    data {
      ...PredictionData
    }
    meta {
      ...CollectionMeta
    }
  }
}
    ${PredictionDataFragmentDoc}
${CollectionMetaFragmentDoc}`;

/**
 * __usePredictionsQuery__
 *
 * To run a query within a React component, call `usePredictionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePredictionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePredictionsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function usePredictionsQuery(baseOptions?: Apollo.QueryHookOptions<PredictionsQuery, PredictionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PredictionsQuery, PredictionsQueryVariables>(PredictionsDocument, options);
      }
export function usePredictionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PredictionsQuery, PredictionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PredictionsQuery, PredictionsQueryVariables>(PredictionsDocument, options);
        }
export type PredictionsQueryHookResult = ReturnType<typeof usePredictionsQuery>;
export type PredictionsLazyQueryHookResult = ReturnType<typeof usePredictionsLazyQuery>;
export type PredictionsQueryResult = Apollo.QueryResult<PredictionsQuery, PredictionsQueryVariables>;