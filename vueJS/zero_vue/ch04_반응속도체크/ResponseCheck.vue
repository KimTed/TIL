<template>
    <div>
        <div id="screen">{{message}}</div>
        <div>
            <div>평균시간: {{}}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '클릭해서 시작하세요~'
        }
    },
    methods: {
        onReset() {}
    }
}
</script>

<style>

</style>