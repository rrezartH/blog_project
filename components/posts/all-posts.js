import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  console.log(props);
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      {console.log("posts", props)}
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
