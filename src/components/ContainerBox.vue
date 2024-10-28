<template>
  <div>
    <PostBox  :인스타데이터="인스타데이터[i]" v-for="(a,i) in 인스타데이터" :key="i"/>
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