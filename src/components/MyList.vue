<template>
  <div class="item">
    <div class="checkbox" @click="selectItem">

    </div>
    <div class="delete" @click="deleteItem">

    </div>

  </div>  
</template>

<script>
  import Item from './MyItem.vue'
  export default{
    name: 'MyList',
    components:{Item}
  }

</script>

<style>
    .item{
      background-color: rgba(211, 211, 211, 0.271);
    }
</style>