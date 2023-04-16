rem [SGLEE:20230405WED_110700] Created
rem [SGLEE:20230410MON_164400] Added Host, Port
rem npm i serve

setlocal

set Host=http://bluecnt.iptime.org
set Port=7000

call npm run build
call explorer %Host%:%Port%
call serve dist -l %Port%

endlocal

pause