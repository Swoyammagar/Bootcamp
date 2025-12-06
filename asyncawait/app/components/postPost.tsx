import axios from "axios";

export const postPost = async () => {
  try {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Swoyammm',
      body: 'Hello i created a new postt..',
      userId: 1,
    });
    return data;
  } catch (err: any) {
    console.error(err);
    return { error: err.message };
  }
};
