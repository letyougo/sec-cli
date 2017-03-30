#!/usr/bin/env node
var program = require('commander')

var chalk = require('chalk')
var fs = require('fs');
var path = require('path');
require('shelljs/global');


var log = function (txt) {
    console.log(chalk.magenta.bold(txt))
}

var createProject = require('./create');


program
    .version('1.0.2')

    .option('-i --info','my total resume',function(){
        log('这是MIUI安全组前端模板生成工具')
    })
    .option('-p, --port <port>','wathch port')
    .option('-t, --type <type>','project type')


program

    .command('create <name>')
    .action(function(name){
        var projecttype = program.type
        if(!projecttype){
            log('create project_name -t project_type','jquery','react','vue')
            return
        }

        var projectlist= fs.readdirSync(path.join(__dirname,'projects'))

        if(projectlist.indexOf(projecttype) == -1){
            log('目前只有以下几种模板类型'+projectlist.join(','))
            return
        }
        createProject(name,projecttype)
    })



//npm config set registry http://registry.npmjs.org
program.parse(process.argv);