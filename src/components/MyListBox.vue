<template>
  <MyList></MyList>
  <div class="listBox mdui-container">
    <div class="content-top">
      <button class="allSelect" @click="selectAll">全选</button>
      <button class="itemAdd" @click="addItem">添加</button>
    </div>
  </div>
</template>

<script>
  import MyList from './MyList.vue';

  export default{
    name: "MyListBox",
    components: { MyList },

    methods:{

      selectAll(){

      },
      
      addItem(){

      }

    }
}

</script>

<style>

  .content-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  button{
    padding: 5px 10px;
    border:none;
    border-radius: 4px;
  }
  .allSelect{
    margin-top: 10px;
    margin-left: 10px;
    background: red;
  }
  .itemAdd{
    margin-top: 10px;
    margin-right: 10px;
    background: green;
  }
    
</style>