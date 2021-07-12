import axios, { AxiosResponse } from 'axios';
import path from 'path';

interface DogResponce {
  fileSizeBytes: number;
  url: string;
}

class ApiService {
  async getDogApi() {
    try {
      const result: AxiosResponse = await axios.get('https://random.dog/woof.json');
      const posts: DogResponce = result.data;
      const format: string = path.extname(posts.url);
      console.log(format);
      if (format != '.jpg') {
        return this.getDogApi();
      }
      console.log(posts);
      return posts;
    } catch (err) {
      return null;
    }
  }
}
export default new ApiService();
