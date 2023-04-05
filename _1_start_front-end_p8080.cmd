rem [SGLEE:20230405WED_110700] Created
rem npm i serve

call npm run build
call explorer "http://bluecnt.iptime.org:8080"
call serve dist -l 8080

pause