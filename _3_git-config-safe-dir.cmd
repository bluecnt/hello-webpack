rem [SGLEE:20230328TUE_230300] Created

rem 드라이브 문자를 반드시 대문자로 해야한다.
rem 디렉터리 구분자는 /로 해야한다.
rem git config --global --add safe.directory D:/dev-proj/hello-react-ts
rem 파일 위치: C:\Users\bluecnt\.gitconfig

setlocal

set dir=%cd%
set new_dir=%dir:\=/%

git config --global --add safe.directory %new_dir%

endlocal

pause