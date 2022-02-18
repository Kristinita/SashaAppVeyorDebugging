START /B CMD /C "choco install html-tidy -y -ignoredependencies"
START /B CMD /C "pip install pipenv & pipenv install --dev & pipenv run peru sync"
START /B CMD /C "choco install nodejs phantomjs -y & npm install -g grunt-cli & npm install"
