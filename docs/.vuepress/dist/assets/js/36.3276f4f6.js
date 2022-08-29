(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{439:function(t,s,e){"use strict";e.r(s);var a=e(45),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("###　第一步：下载压缩包并解压")]),t._v(" "),e("p",[t._v("（1）cd /opt ----切换到opt目录下")]),t._v(" "),e("p",[t._v("（2）mkdir software ----创建software文件夹")]),t._v(" "),e("p",[t._v("（3）cd software ----进入到新建的这个文件夹中")]),t._v(" "),e("p",[t._v("（4）"),e("code",[t._v("wget https://nodejs.org/dist/v16.3.0/node-v16.3.0-linux-x64.tar.xz")]),t._v(" ----这个是直接用命令进行下载，需要注意的是，如果连接不上，需要在windows中访问:"),e("code",[t._v("https://nodejs.org/dist/")]),t._v(",然后选择自己需要的node.js版本，再通过xftp软件，上传到 opt/software目录下!")]),t._v(" "),e("p",[t._v("（5）tar xvf node-v15.11.0-linux-x64.tar.xz -----解压，这一步请确保当前所处的位置是在： opt/software/这个目录下")]),t._v(" "),e("p",[t._v("(6) mv node-v16.3.0-linux-x64 node ---改变文件名")]),t._v(" "),e("h3",{attrs:{id:"第二步-配置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步-配置环境变量"}},[t._v("#")]),t._v(" 第二步：配置环境变量")]),t._v(" "),e("p",[t._v("1）vi /etc/profile ----进入配置环境变量的文件中")]),t._v(" "),e("p",[t._v('（2）点击键盘中的 " i "键，进入插入模式')]),t._v(" "),e("p",[t._v("（3）在末尾输入：export PATH=$PATH:/opt/software/node/bin/")]),t._v(" "),e("p",[t._v("（4）按esc键，退出编辑模式，再按shift+“:” 再按wq，回车，保存并退出")]),t._v(" "),e("p",[t._v("（5）sorce /etc/profile -----这个是让配置环境生效，有时候报错（-bash: sorce: command not found）")]),t._v(" "),e("blockquote",[e("p",[t._v("在 /etc/profile 里配置的环境变量只要退出后都需要再 source /etc/profile 才会生效")])]),t._v(" "),e("blockquote",[e("p",[t._v("解决办法：\n编辑vi ~/.bashrc 再最后面增加")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("profile "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" then\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("profile\nfi\n\n")])])]),e("blockquote",[e("p",[t._v("注意：修改完要重启系统")])]),t._v(" "),e("h3",{attrs:{id:"第三步-检查安装环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步-检查安装环境"}},[t._v("#")]),t._v(" 第三步：检查安装环境")]),t._v(" "),e("p",[t._v("1）node -v")]),t._v(" "),e("p",[t._v("（2）npm -v")]),t._v(" "),e("p",[t._v("（3）npm install -g cnpm --registry=https://registry.npm.taobao.org -----这个是换成淘宝镜像，因为连接国外的服务器下载很慢")])])}),[],!1,null,null,null);s.default=o.exports}}]);