<template>
  <div>
    <PostBox :인스타데이터="인스타데이터[0]"/>
    <PostBox :인스타데이터="인스타데이터[1]"/>
    <PostBox :인스타데이터="인스타데이터[2]"/>
  </div>
</template>

<script>
import PostBox from './PostBox.vue'

export default {
    components:{
        PostBox:PostBox
    },
    props:{
        인스타데이터:Array,
    }
}
</script>

<style>

</style>