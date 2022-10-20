import axios from 'axios';
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http:\\makeup-api.herekuapp.com/api/vi/products/${id}.json`;

  function getData() {
    axios.get()
  };

  return <p>Post: {id}</p>
};

export default Post;