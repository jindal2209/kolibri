
const ContentScopes = {
  ROOT: 'root',
  TOPIC: 'topic',
  CONTENT: 'content',
};

const UserScopes = {
  FACILITY: 'facility',
  CLASSROOM: 'classroom',
  LEARNERGROUP: 'learnergroup',
  USER: 'user',
};

const AllOrRecent = {
  ALL: 'all',
  RECENT: 'recent',
};

const ViewBy = {
  LEARNERS: 'user_view',
  CONTENT: 'content_view',
};

const TableColumns = {
  NAME: 'name',
  EXERCISE: 'exercise_progress',
  CONTENT: 'content_progress',
  DATE: 'date',
};

const SortOrders = {
  ASCENDING: 'asc',
  DESCENDING: 'desc',
  NONE: 'none',
};

module.exports = {
  ContentScopes,
  UserScopes,
  AllOrRecent,
  ViewBy,
  TableColumns,
  SortOrders,
};
