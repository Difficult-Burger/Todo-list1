<template>
  <div class="listBox mdui-container">
    <div class="content-top">
      <button class="allSelect" @click="selectAll">全选</button>
      <button class="itemAdd" @click="addItem">添加</button>
    </div>
    <MyList :list = "list"></MyList>
    <MyList></MyList>

  </div>

</template>

<script>
  import MyList from './MyList.vue';
  import global from '../global.vue'
  import dayjs from "dayjs"
  export default{
    name: "MyListBox",
    components: { MyList },
    data(){
      return{
        list:[],
        
        my_id: global.id
      }
    },

    methods:{

      selectAll(){

      },
      
      addItem(){
        //console.log("add");
        this.list.unshift({
          id:++global.id,
          isCheck:false,
          text:"",
          time:dayjs(new Date).format("YY-MM-DD HH:mm"),
          }
        )
      }

    }

  }

</script>

<style>
  
  .content-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }
  
  button{
    padding: 5px 10px;
    border:none;
    border-radius: 4px;
  }
  .allSelect{
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
    background: red;
  }
  .itemAdd{
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;

    background: green;
  }
    
</style>