# zerocho 웹게임

* TIL
  * Case styles
    * 'ch02_끝말잇기' 에서 html 영역은 kebab-case를, script 영역에선 camelCase를 사용. 
  * git rebase
    ```
    git rebase HEAD~[거슬러 올라가고 싶은 커밋 수] -i
    ```
    1. [거슬러 올라가고 싶은 커밋 수] 만큼 log가 나옴
    2. 수정하고 싶은 log앞에 'pick'을 'reowrd'로 변경 (vi 편집기)
    3. 문구 수정 (vi 편집기)
    4. ```git push -f``` 로 마무리 
    > 참조: https://junwoo45.github.io/2019-10-23-rebase/
