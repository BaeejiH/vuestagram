<template>
<div style="padding:10px;">
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @input="search($event.target.value)"/>
        <div class="post-header" v-for="(a,i ) in follower" :key="i">
            <div class="profile" :style="`background-image:url(${a.image})`"></div>
            <div class="profile-name">{{a.name}}</div>
        </div>
    </div>
</div>    
</template>

<script>
import {computed, onMounted, reactive, ref, toRefs} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex';
export default { // VUE는 데이터 중심으로 개발..
    name : 'MyPageFollower',
    setup(props){//composition API 
    let follower = ref([]); // 데이터 생성하고 싶으면 ref안에 데이터를 넣어야함./ 나머지 자료형
    function search(검색어) {
        let newFollower = follower.value.filter((a)=>{
            return a.name.indexOf(검색어) != -1
        });
        follower.value = [...newFollower]
    }


    let {one} = toRefs(props);

    let 결과 = computed(()=>{ return 10 })
    console.log(결과.value) // 데이터는 항상 .value로 써야함.
    console.log(one.value)
       
        let test = reactive({name : 'kim'}) // 보통 array, Object집어넣음.
        test;

        let store = useStore();
        console.log(store.state.name)

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
            follower.value = a.data
        })

        })
                return {follower,search}
    },
    data(){
        return{

        }
    },
    props : {
        one : Number,
    }
}
</script>

<style>

</style>