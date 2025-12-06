import axios from "axios";

export const putPost = async () => {
  try {
    const { data } = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'Swoyam',
      body: 'Helloo i updated the data...',
      userId: 1,
    });
    return data;
  } catch (err: any) {
    console.error(err);
    return { error: err.message };
  }
};
