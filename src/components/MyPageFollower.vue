<template>
<div style="padding:10px;">
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?"/>
        <div class="post-header">
            <div class="profile"></div>
            <div class="profile-name">{{follower}}</div>
        </div>
    </div>
</div>    
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';
export default {
    name : 'MyPageFollower',
    setup(){//composition API
        let follower = ref([]); // 데이터 생성하고 싶으면 ref안에 데이터를 넣어야함.
        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
            follower.value = a.data
        })

        })
                return {follower}
    },
    data(){
        return{

        }
    },
}
</script>

<style>

</style>