<template>
  <div class="top mdui-container">
    <div class="mdui-row mdui-valign">

      <div class="hyperlink-left mdui-col-xs-3">
        <router-link to="/ListPage">
          <a href="" class="mdui-btn">列表视图</a>
        </router-link>
      </div>

      <div class="title mdui-col-xs-6">
        <h1>My Todo-list</h1>
      </div>

      <div class="hyperlink-right mdui-col-xs-3">
        <router-link to="/CalendarPage"> 
         <a href="" class="mdui-btn">日历视图</a>
        </router-link>
      </div>
    </div>   
  </div>
  <RouterView></RouterView>

</template>

<script>
  export default{
    name: 'MyHeader'

  }

</script>

<style>
  .top{
    align-items: center;
    border-bottom: 1px solid black;
    background-color: rgba(0, 174, 255, 0.1);
  }  
  .title{
    text-align: center;
    margin-top: 0;
  }

  .hyperlink-left{
    text-align: left;
  }

  .hyperlink-right{
    text-align: right;
  }

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
