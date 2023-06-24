import { AxiosInstance, AxiosResponse } from "axios";
import React, { FC } from "react";
import { PostsPageProps } from "./types";

const PostsPage: FC<PostsPageProps> = ({ props: { posts } }) => {
  return (
    <div className="container-fluid">
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={`${post.id}-${post.title}`}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

export async function getInitialProps(axios: AxiosInstance) {
  try {
    const posts: AxiosResponse = await axios.get("/posts");
    return { props: { posts: posts.data } };
  } catch (error) {
    console.error(error);
  }
}
