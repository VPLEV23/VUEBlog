<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blog</h3>
        <div class="blog-cards">
          <Card :post="post" v-for="(post,index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register for VueBlog <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import Card from "../components/Card.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: {BlogPost, Card, Arrow},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aut repellat dicta praesentium tempora ad excepturi possimus neque. Accusamus molestiae tempora, esse veniam aut nulla error optio recusandae velit doloribus.",
        welcomeScreen: true,
        photo:"coding",
      },
      sampleBlogPost:[
        {
          title: "This is a Filler Title",
          blogHTML: "This is a blog post title!",
          blogCoverPhoto:"beautiful-stories",
        },
        {
          title: "This is a Filler Title",
          blogHTML: "This is a blog post title!",
          blogCoverPhoto:"designed-for-everyone",
        },
      ],
      sampleBlogCards:[
        {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate:"May 1, 2021"},
        {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate:"May 1, 2021"},
        {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate:"May 1, 2021"},
        {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate:"May 1, 2021"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width:800px){
      padding:  125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px){
        margin-left: auto;
      }
    }

    h2{
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width:800px){
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>