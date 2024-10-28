<template>
  <div class=" filter-item" :style="`background-image:url(${전송한이미지})`"></div>
</template>

<script>
export default {
 props:{
  전송한이미지:Array,
  필터:Array,
 }
}
</script>

<style>
    
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>