import { mergeTypes } from "merge-graphql-schemas";
import channelTypes from "./channel";
import communityTypes from "./community";
import dummyTypes from "./dummy";
import generalTypes from "./general";
import threadTypes from "./thread";
import userTypes from "./users";

const typesMerged = mergeTypes([
  generalTypes,
  userTypes,
  threadTypes,
  communityTypes,
  channelTypes,
  dummyTypes,
]);

export default typesMerged;
