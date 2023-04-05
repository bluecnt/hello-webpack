rem [SGLEE:20230405WED_110700] Created
rem npm i serve

call npm run build
call explorer "http://bluecnt.iptime.org:7000"
call serve dist -l 7000

pause