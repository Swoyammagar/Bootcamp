import axios from "axios";

export const getPost = async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return data;
  } catch (err: any) {
    console.error(err);
    return { error: err.message };
  }
};
