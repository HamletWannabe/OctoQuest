#!/usr/bin/env bash
set -e

#WILLIAM PUT THIS IN
#yum install -y deltarpm

# update instance
#WILLIAM CHANGED FROM yum -y update TO yum update -y
yum update -y

# install general libraries like Java or ImageMagick
yum -y install default-jre ImageMagick

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
yum -y install nodejs #default-jre ImageMagick

# install pm2 module globaly
npm install -g pm2
pm2 update
