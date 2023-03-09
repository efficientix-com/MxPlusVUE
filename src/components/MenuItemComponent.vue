
<script>
export default {
  props: ["item", "collapsed"],
  data() {
    return {
      item1: this.item,
      collapsed1: this.collapsed,
      subMenuOpen: false,
    };
  },
  //   const props = defineProps(["item", "collapsed"]);
};
</script>



<template>
  <a class="subMenuOpen" v-on:click="item1.onClick()"
  @mouseover="subMenuOpen = true"
  @mouseleave="subMenuOpen=false"
  >
    <div class="item" 
    >
      <div class="icon">
        <font-awesome-icon :icon="['fa-solid', item1.icon]" size="1x" />
      </div>
      <div
        
        class="title"
        v-if="!this.collapsed"
      >
        <a :href="item1.path" v-if="item1.hasChildren==false">{{ item1.title }}</a>
        <a v-if="item1.hasChildren==true">{{ item1.title }}</a>
      </div>
    </div>
    <div v-if="!this.collapsed && subMenuOpen">
      <div  class="subtitle" v-for="child in item1.children" :key="child.id">
        <a :href="child.path">{{ child.name }}</a>
      </div>
    </div>
  </a>
</template>
<style scoped>
.subMenuOpen {
  color: white;
  text-decoration: none;
  display: block;
  position: relative;
  margin-bottom: 30px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
}
.subMenuOpen:hover {
  border-color: white;
  margin-right: -1px;
  background-color: white;
  margin-left: 15px;
  color: #009f6d;
}
.subMenuOpen:hover .item .title a{
  color:#009f6d;
}
.subMenuOpen:hover::before {
  content: "";
  position: absolute;

  background-color: transparent;
  bottom: -29.5px;
  height: 30px;
  right: 1px;
  width: 60px;
  border-top-right-radius: 50px;
  box-shadow: 30px -0.5px 0 0 white;
}
.subtitle {
  padding-bottom: 10px;
  font-size: 16px;
}
.subtitle a{
  text-decoration: none;
  color:#009f6d;
}
.subtitle a:hover {
  color: #1a1a1a;
}
.subMenuOpen:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  top: -30px;
  height: 30px;
  right: 1px;
  width: 60px;
  border-bottom-right-radius: 50px;
  box-shadow: 30px 1px 0 0 white;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 16px;
}
.item .icon {
  margin-left: 20px;
  display: flex;
  justify-content: center;
}
.collapsed .item .icon {
  margin: auto;
  display: flex;
  justify-content: center;
}
.collapsed a:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: 36px;
  height: 30px;
  right: 1px;
  width: 60px;
  border-bottom-right-radius: 50px;
  box-shadow: 30px 1px 0 0 white;
}
.title a{
  text-decoration: none;
  color:white;
}

/* .title a:hover{
  color:#009f6d;
} */
</style>