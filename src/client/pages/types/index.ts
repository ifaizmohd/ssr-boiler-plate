export interface HomePageProps {
  props?: Object;
}

interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
}

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface users {
  users: Array<user>;
}

interface posts {
  posts: Array<post>;
}

export interface UsersPageProps {
  props: users;
}

export interface PostsPageProps {
  props: posts;
}
