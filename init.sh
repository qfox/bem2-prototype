#!/bin/bash

echo 'install deps for inner meta modules'
for i in $(ls |grep bem); do
  pushd . > /dev/null;
  echo ' '$i;
  cd $i;
  test -f package.json && npm i;
  popd > /dev/null;
done

echo 'git clone git@github.com:zxqfox/bem-naming.git'

