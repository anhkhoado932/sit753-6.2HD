# 6.2HD

## Clone the project
```
git clone https://github.com/anhkhoado932/sit753-6.2HD
```

## Deploy Jenkins on EC2
- Install Jenkins on EC2
https://www.jenkins.io/doc/tutorials/tutorial-for-installing-jenkins-on-AWS/
- Install Git, Heroku CLI, Docker on EC2 instance

## Setup Github Webhook
For Jenkin to automatically trigger build on new commit:
- Go to Settings > Webhooks
- Create new webhook
- add URL as \<jenkins-ec2-url\>/github-webhook/

## In Heroku, create new app
- Github Student Pack gives 13$/month, which mean this project shouldn't cost anything
- The name of the app should be adjusted accordingly in Jenkinfiles `HEROKU_APP_NAME`
- Go to setting, retrieved the API Keys. This will be used for EC2 Heroku CLI
# Done
- On new commit with successful build, the application should automatically be deployed