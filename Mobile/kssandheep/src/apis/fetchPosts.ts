import request from '../utils/request';

export default async function fetchPosts() {

  try {
    const posts = await request(`https://mockend.com/troisinfotech/TalentHub/posts`,
      {
        method: 'GET',
      }
    );

    return posts;
  } catch (error) {
    console.log(error);
  }
}
