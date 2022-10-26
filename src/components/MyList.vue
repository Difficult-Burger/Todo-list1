<template>
  <div class="item"
    v-for= "(item,index) in list" :key="item.id"
  >

    <div class="checkbox" @click="selectItem(index)">
      <span class="check" :style="item.isCheck ? 'opacity : 1' : 'opacity : 0'"></span>
    </div>
    <input 
      class="input"
      type="text" 
      v-model="item.text"
    >
    <div class="delete" @click="deleteItem(index)">
      <div id="delete-text">删除</div>
    </div>

  </div> 
   
</template>

<script>
  export default{
    name: 'MyList',
    props:['list'],
    
    methods:{
      deleteItem(index){
        //console.log('del')
        this.list.splice(index,1)
      },

      selectItem(index)
      {
        //console.log(index);
        this.list[index].isCheck = !this.list[index].isCheck
      }
    }
  }

</script>

<style>
  .item{
    justify-content: space-between;
    align-items: center;
    display: flex;
    background: darkgray;
    width:1200px;
    height:50px;
    margin-left:20px; 
    margin-top:10px;
    border-radius: 10px;
  }
  .checkbox{
    border: 1px solid purple;
    transform: translate(9px, 0px);
    border-radius: 50%;
    width: 20px;
    height:20px;
    margin-left: 5px;
    margin-right: 20px;
  }
  .check{
    display:flex;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    background-color: purple;
    margin-left: 2.4px;
    margin-top: 2.35px;
    
  }
  .delete{
    border: none;
    background-color: red;
    width: 40px;
    height:20px;
    border-radius: 4px;
    margin-right: 10px;
    margin-left: 10px;
    padding:3px;
  }
  #delete-text{
    margin-top: 2px;
    margin-left: 4px;
    color:white;    
  }
  .input{
    
    flex:1;
    border:none;
    outline:none;
    background-color: transparent;  
    border-bottom: 1px solid black;

  }
</style>