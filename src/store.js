import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            name : 'kim', // state 보관하고 싶으면 여기에
            age : 99,
            likes : 30,
            likesState : false, // 좋아요가 눌렸지 현재 상태
        }
    },
    mutations : { //state 수정방법 정의하는 곳
        이름변경(state){
            state.name = 'park'
        },
        나이증가(state,data){
            state.age += data
        },
        좋아요증가(state){
            if(state.likesState == false){
                state.likes++
            }else{
                state.likes--
            }
            state.likesState = !state.likesState; // 상태를 반전시킴
        }
    }
})
export default store;