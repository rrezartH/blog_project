import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export default PostDetailPage;
