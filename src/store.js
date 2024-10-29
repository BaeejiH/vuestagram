import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            name : 'kim', // state 보관하고 싶으면 여기에
            age : 99,
            likes : [30,60,90],
            likesState : [false,false,false], // 좋아요가 눌렸지 현재 상태
        }
    },
    mutations : { //state 수정방법 정의하는 곳
        이름변경(state){
            state.name = 'park'
        },
        나이증가(state,data){
            state.age += data
        },
        좋아요증가(state,index){
            if(state.likesState[index] == false){
                state.likes[index]++
                state.likesState[index] = true; // 상태를 true로 변경 , 이 코드가 없을시 한번 증가하고 그 이후로는 계속 감소함
            }else{
                state.likes[index]--
                state.likesState[index] = false; // 상태를 false로 변경, =
            }
        }
    }
})
export default store;