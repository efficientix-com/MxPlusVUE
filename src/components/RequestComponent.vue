<template>
  <div>
    <ul v-if="posts && posts.length">
      <li v-for="post in posts" v-bind:key="post">
        <p>
          <strong>Response</strong>
        </p>
        <p>{{ post.resp }}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  // Pulls posts when the component is created.
  created() {
    // axios
    //     .get(`https://jsonplaceholder.typicode.com/posts`)
    //     .then((response) => {
    //         // JSON responses are automatically parsed.
    //         this.posts = response.data;
    //     })
    //     .catch((e) => {
    //         this.errors.push(e);
    //     });
    this.getRequestTest();
  },
  mounted() {},
  methods: {
    getRequestTest() {
      try {
        let self = this;
        console.debug("getRequestTest -self: ", self);
        let str = "";
        (str += "var https=null;"),
          (str += "var urlModule=null;"),
          (str += 'require(["N/url","N/https"], function(urlMode,https){'),
          (str += " var url=urlMode.resolveScript({"),
          (str += ' scriptId:"customscript_tkio_mxplus_testrequest_sl",'),
          (str += ' deploymentId:"customdeploy_tkio_mxplus_testrequest_sl",'),
          (str += "returnExternalUrl:true,"),
          (str += ' params:{test:"successfully sent request from VUE"}'),
          (str += "});"),
          (str += "self.getConfigAxios(url)"),
          (str += "});"),
          eval(str);
      } catch (e) {
        console.error(e);
      }
    },
    getConfigAxios(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "authorization",
        },
      };
      axios
        .request(t)
        .then((b) => {
          console.log("RESP: ", b.data);
          this.posts.push({resp:b.data.resp});
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
  },
};
</script>