<template>
  <MyHeader></MyHeader>
  <MyListBox></MyListBox>
  

</template>

<script>
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue'
  import MyListBox from './components/MyListBox.vue'

  export default {
    name: 'App',
    components:{MyHeader, MyFooter, MyListBox}

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
