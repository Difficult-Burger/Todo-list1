<template>
  <MyHeader></MyHeader>
  <MyListBox></MyListBox>
  

</template>

<script>
  import MyHeader from './components/MyHeader.vue'
  import MyListBox from './components/MyListBox.vue'
  import TDesign from 'tdesign-vue-next';

  export default {
    name: 'App',
    components:{MyHeader, MyListBox, TDesign}

  }
</script>

<style lang="less">
.listBox{
  width: 1300px;
  height: 600px;
  background-color: rgba(47, 20, 20, 0.2);
  border: 1px solid black;
  border-radius: 25px;
  margin: auto;
  margin-top: 10px;
}
  
</style>
