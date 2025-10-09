import { Client, Storage } from "appwrite";
import conf from "../conf/conf.js";

export class Buckets {
  client = new Client();
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }

  async uploadImage(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite Error :: UploadImage :: Error : ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite Error :: DeleteFile :: Error : ", error);
      return false;
    }
  }

  getPreview(fileId) {
    return this.bucket.getFilePrevirew(conf.appwriteBucketId, fileId);
  }
}

const bucket = new Buckets();
export default bucket;