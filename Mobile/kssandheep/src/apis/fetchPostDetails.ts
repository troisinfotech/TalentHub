import request from '../utils/request';

export default async function fetchPostDetails(id: number) {

  try {
    const posts = await request(`https://mockend.com/troisinfotech/TalentHub/posts/${id}`,
      {
        method: 'GET',
      }
    );

    return posts;
  } catch (error) {
    console.log(error);
  }
}
