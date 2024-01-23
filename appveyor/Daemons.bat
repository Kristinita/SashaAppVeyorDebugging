@REM @Author: SashaChernykh
@REM @Date:   2024-01-22 16:01:31
@REM @Last Modified by:   SashaChernykh
@REM Modified time: 2024-01-23 08:47:42
rem START /B CMD /K http-server --port 4147
powershell -Command "Start-Process cmd -ArgumentList '/c http-server --port 4147'"
rem START http-server --port 4147
