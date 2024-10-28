<template>
  <div>

   <div v-if="step == 0"> 
    <PostBox :필터="필터" :인스타데이터="인스타데이터[i]" :step="step" v-for="(a,i) in 인스타데이터" :key="i"/>
   </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
    <div class="upload-image" :style="`background-image:url(${전송한이미지})`"></div>
    <div class="filters">
        <FilterBoxCon v-for="(a,i) in 필터" :key="i" :전송한이미지="전송한이미지" :class="필터[i]"></FilterBoxCon>
    </div>
    </div>

    <!-- 글작성페이지 -->
    <div  v-if="step == 2">
    <div class="upload-image" :style="`background-image:url(${전송한이미지})`"></div>
    <div class="write">
        <textarea @input="$emit('writetext',$event.target.value)" class="write-box">write!</textarea>
    </div>
    </div> 
    </div>
 
</template>

<script>
import FilterBoxCon from './FilterBoxCon.vue'
import PostBox from './PostBox.vue'
export default {
    data(){
        return{
         필터: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
    
        }
    },
    components:{
        PostBox:PostBox,
        FilterBoxCon:FilterBoxCon
    },
    props:{
        인스타데이터:Array,
        step: Number,
        전송한이미지:String,
    }
}
</script>

<style>

.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>