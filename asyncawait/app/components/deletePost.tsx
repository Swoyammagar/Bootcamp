import axios from "axios";

export const deletePost = async () => {
  try {
    await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    return { message: 'Post deleted successfully' };
  } catch (err: any) {
    console.error(err);
    return { error: err.message };
  }
};
