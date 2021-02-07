<template>
    <div>
        <h1>{{title}} page</h1>
        <input type="text" v-model="inputVal">
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <button type="button" @click="setShow">show</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="idx" :value="ele.t" v-for="(ele, idx) in options">{{ele.t}}</option>
        </select>

        <table class="table table-bordered" v-show="tableShow">
            <tr :key="idx" v-for="(ele,idx) in options">
                <td>{{ele.v}}</td>
                <td>{{ele.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "개발자의 품격",
            inputVal:"Seoul",
            options: [
                {v: "S", t: "Seoul"},
                {v: "J", t: "Jeju"},
                {v: "B", t: "Busan"}
            ],
            region: "Seoul",
            tableShow: false
        };
    },
    watch: {
        inputVal() {
            console.log(this.inputVal);
        }
    },
    methods: {
        getData() {
            alert(this.inputVal)
        },
        setData() {
            this.inputVal = "12345"
        },
        setShow() {
            this.tableShow = this.tableShow === true ? false : true;
        },
        changeRegion() {
            alert(this.region)
        }
    },
    beforeCreate(){
        console.log("beforeCreate()");
    },
    created(){
        console.log("created()") // db data 설정 부분(?)
    },
    beforeMount(){
        console.log("beforeMount()")
    },
    mounted(){
        console.log("mounted()")
    },
    beforeUpdate() {
        console.log("beforUpdate") // data 변경 전
    },
    updated(){
        console.log("updated()") // data 변경 후
    },
    beforeDestory(){
        console.log("beforeDestory()")
    },
    destroyed(){
        console.log("destroyed()")
    }
};
</script>