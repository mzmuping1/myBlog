(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{367:function(t,s,a){t.exports=a.p+"assets/img/github1.bea0a30c.png"},368:function(t,s,a){t.exports=a.p+"assets/img/config1.141329c1.png"},369:function(t,s,a){t.exports=a.p+"assets/img/github2.51de2db4.png"},370:function(t,s,a){t.exports=a.p+"assets/img/config2.ad7e7dcd.png"},371:function(t,s,a){t.exports=a.p+"assets/img/github3.436df5be.png"},372:function(t,s,a){t.exports=a.p+"assets/img/github4.2c9362a0.png"},399:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("网上搜了很多教程，包括"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网的教程"),e("OutboundLink")],1),t._v(",但是还是费了一番功夫，"),e("br"),t._v("\n可能使比较笨吧，如果你使用自动化部署脚本部署不成功的话，可以参考我的这个笨方法"),e("br"),t._v(" "),e("a",{attrs:{href:"https://chasellhl.github.io/myBlog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这是部署后的效果"),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),e("p",[t._v("我假设你本地运行OK, 已经准备好要部署了")]),t._v(" "),e("h1",{attrs:{id:"第一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),e("p",[t._v("你的 vuepress 项目是否已经在github上的仓库下"),e("br"),t._v("\n如果是，请跳到第二步"),e("br"),t._v("\n如果不是，想在GitHub新建一个仓库，如图所示："),e("br"),t._v(" "),e("img",{attrs:{src:a(367),alt:"github1"}})]),t._v(" "),e("h2",{attrs:{id:"小坑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小坑"}},[t._v("#")]),t._v(" 小坑")]),t._v(" "),e("p",[t._v("仓库名字要和config.js 里 的 base 属性值一样\n"),e("img",{attrs:{src:a(368),alt:"config1"}}),t._v("\n比如你的仓库名字叫myBlog\nbase就是/myBlog/")]),t._v(" "),e("h2",{attrs:{id:"_1-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1"}},[t._v("#")]),t._v(" 1.1")]),t._v(" "),e("p",[t._v("创建好仓库以后，\n"),e("img",{attrs:{src:a(369),alt:"github2"}}),t._v("\ngit clone <你复制的地址>\n把你的vuepress项目除了node_modules文件夹之外的文件全部复制到git clone下来的文件夹内"),e("br"),t._v("\n然后npm install 或者 yarn"),e("br"),t._v("\n在项目根目录新建文件.gitignore\n"),e("img",{attrs:{src:a(370),alt:"config1"}}),t._v("\n让git 忽略  node_module下的所有文件和打包以后dist下的所有文件")]),t._v(" "),e("h2",{attrs:{id:"_1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2"}},[t._v("#")]),t._v(" 1.2")]),t._v(" "),e("ol",[e("li",[t._v("npm run docs:dev  打包/打包后的文件在docs/.vuepress/dist文件夹下")]),t._v(" "),e("li",[t._v("git add -A")]),t._v(" "),e("li",[t._v("git commit -m 'init'")]),t._v(" "),e("li",[t._v("git push")])]),t._v(" "),e("h1",{attrs:{id:"第二步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),e("p",[t._v("新切一个gh-pages(名字随意)分支并切换到该分支，执行"),e("br")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b gh-pages\n")])])]),e("p",[t._v("该分支用来存打包后的文件")]),t._v(" "),e("ol",[e("li",[t._v("先删除 除了.git文件夹 ， node_module文件夹 ， docs文件夹， .gitignore之外的文件")]),t._v(" "),e("li",[t._v("再把docs/.vuepress/dist文件夹下的所有文件剪切到根目录")]),t._v(" "),e("li",[t._v("再删除docs文件夹")]),t._v(" "),e("li",[t._v("git add -A")]),t._v(" "),e("li",[t._v("git commit -m 'deploy'")]),t._v(" "),e("li",[t._v("git push")])]),t._v(" "),e("h1",{attrs:{id:"第三步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[t._v("#")]),t._v(" 第三步")]),t._v(" "),e("p",[t._v("此时github上你应该可以看到你的分支\n"),e("img",{attrs:{src:a(371),alt:"github3"}})]),t._v(" "),e("p",[t._v("点击settings ,然后往下拉，找到 GitHub Pages")]),t._v(" "),e("p",[e("img",{attrs:{src:a(372),alt:"github4"}})]),t._v(" "),e("p",[t._v("在Source的下拉选中你的分支"),e("br"),t._v("\n出现 Your site is published at 网址"),e("br"),t._v("\n就说明发布成功了，访问这个网址就可以看到你的博客啦")])])}),[],!1,null,null,null);s.default=r.exports}}]);