<template>
  <div class="listBox mdui-container">
    <div class="content-top">
      <div class="content-topleft">
        <button class="allSelect" @click="selectAll">全选</button>
        <button class="reverseSelect" @click="selectReverse">反选</button>
      </div>

      <div class="content-topmid" >
        <t-swiper class="tdesign-demo-block--swiper"
          :navigation="{ showSlideBtn: 'never', type:'hide'}"
        >
          <t-swiper-item v-for="item in list" :key="item">
            <div class="demo-item">{{item.text}}</div>
          </t-swiper-item>
          
        </t-swiper>       
      </div>
      
      <div class="content-topright">
        <button class="itemAdd" @click="addItem">添加</button>
        <button class="theseDelete" @click="deleteThese">批量删除</button>
      </div>
    </div>
    <MyList :list = "list" :finishList="finishList" ></MyList>
  </div>

</template>

<script>
  import MyList from './MyList.vue';
  import global from '../global.vue'
  import dayjs from "dayjs"
  import TDesign from 'tdesign-vue-next';


  export default{
    name: "MyListBox",
    components: {MyList, TDesign},
    data(){
      return{
        list:[],
        finishList:[]
      }
    },
    

    methods:{

      selectAll(){
        for(var i=0; i<this.list.length; i++){
          this.list[i].isCheck = true
        }
      },
      selectReverse(){
        for(var i=0; i<this.list.length; i++){
          this.list[i].isCheck = !this.list[i].isCheck
        }
      },
      addItem(){
        //console.log("add");
        this.list.unshift({
          id: global.id++,
          isCheck: false,
          text: "",
          time: dayjs(new Date).format("YY-MM-DD HH:mm"),
          }
        )
      },
      deleteThese(){
        for(var i=this.list.length-1; i>= 0; i--){
          if(this.list[i].isCheck){
            this.list.splice(i,1)
          }
        }
      },
      

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
  .tdesign-demo-block--swiper{
    margin-left: 50px;
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
  .reverseSelect{
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
    background: green;
  }
  .itemAdd{
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    background: green;
  }
  .theseDelete{
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    background: red;
  }
    
</style>