<template>
  <div class="item" >

    <div class="mdui-checkbox">
      <input type="checkbox" @click="selectItem" />
      <i class="mdui-checkbox-icon"></i>
    </div>
    <input class="input">
    <div class="delete" @click="deleteItem">
      <div id="delete-text">删除</div>
    </div>

  </div>  
</template>

<script>
  export default{
    name: 'MyList',
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