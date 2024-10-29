<template>
  <div @click="fire" class=" filter-item" :style="`background-image:url(${전송한이미지})`">
    <slot></slot>
  </div>

  <!-- 
  <slot>은 자식페이지에 공간 생성후  부모 컨테이너에 글 작성
  여러개를 데이터바인딩하고 싶다면 props가 더 편리함
  HTML도 전송가능(slot)
   -->
</template>

<script>
export default {
  // mitt로 데이터 전송하는 법
  // 1.this.emitter.emit()으로 전송
  // 2.this.emitter.on()으로 수신
  methods :{
    fire(){
      this.$emitter.emit('applyFilter',this.필터)
    }
  },
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