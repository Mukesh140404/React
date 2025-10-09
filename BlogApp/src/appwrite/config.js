import conf from "../conf/conf.js";
import { ID, Client, Databases, Query } from "appwrite";

export class Services {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, featueredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featueredImg,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite Error :: CreatePost :: Error : ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featueredImg, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featueredImg,
          status,
        }
      );
    } catch (error) {
      console.error("Appwrite Error :: UpdatePost :: Error : ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite Error :: DeletePost :: Error : ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite Error :: GetPost :: Error : ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite Error :: GetPosts :: Error : ", error);
      return false;
    }
  }

}

const services = new Services();

export default services;
