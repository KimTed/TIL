# 한시간만에 끝내는 Vue.js 입문

* TIL
  * vueJS 의 builtin 혹은 사전에 정의 되어있는 HTML element 알기
    ```
    vue.runtime.esm.js?2b0e:619 [Vue warn]: Do not use built-in or reserved HTML elements as component id: header
    ```
    > Header.vue에서 ```export default { name: "header" }``` 이 부분 때문

  