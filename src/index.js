import Vue from 'vue';
import BlogPost from './vue-components/blog-post';

console.log('Instantiating new Vue app');

const vm = new Vue({
  el: '#app',
  components: {
    'blog-post': BlogPost
  }
});
