import{_ as o,c as n,b as i,e as t,a as r,r as s,o as l}from"./app-D5qhlgA7.js";const h="/video.png",p={};function c(d,e){const a=s("RepoCard");return l(),n("div",null,[e[0]||(e[0]=i("div",{align:"center"},[i("p",null,[i("img",{src:"https://img.shields.io/badge/Python-3.9+-blue",alt:"Python Version"}),i("img",{src:"https://img.shields.io/github/license/SengokuCola/MaiMBot",alt:"License"}),i("img",{src:"https://img.shields.io/badge/状态-开发中-yellow",alt:"Status"})])],-1)),t(a,{repo:"SengokuCola/MaiMBot"}),e[1]||(e[1]=r('<h2 id="📝-项目简介" tabindex="-1"><a class="header-anchor" href="#📝-项目简介"><span>📝 项目简介</span></a></h2><p><strong>🍔麦麦是一个基于大语言模型的智能QQ群聊机器人</strong></p><ul><li>基于 nonebot2 框架开发</li><li>LLM 提供对话能力</li><li>MongoDB 提供数据持久化支持</li><li>NapCat 作为QQ协议端支持</li></ul><p><strong>最新版本: v0.5.</strong>*</p><div align="center"><a href="https://www.bilibili.com/video/BV1amAneGE3P" target="_blank"><img src="'+h+'" width="300" alt="麦麦演示视频"><br> 👆 点击观看麦麦演示视频 👆 </a></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>项目处于活跃开发阶段，代码可能随时更改</li><li>文档未完善，有问题可以提交 Issue 或者 Discussion</li><li>QQ机器人存在被限制风险，请自行了解，谨慎使用</li><li>由于持续迭代，可能存在一些已知或未知的bug</li><li>由于开发中，可能消耗较多token</li></ul></div><h2 id="💬交流群" tabindex="-1"><a class="header-anchor" href="#💬交流群"><span>💬交流群</span></a></h2><ul><li><a href="https://qm.qq.com/q/VQ3XZrWgMs" target="_blank" rel="noopener noreferrer">一群</a> 766798517 ，建议加下面的（开发和建议相关讨论）不一定有空回复，会优先写文档和代码</li><li><a href="https://qm.qq.com/q/RzmCiRtHEW" target="_blank" rel="noopener noreferrer">二群</a> 571780722 （开发和建议相关讨论）不一定有空回复，会优先写文档和代码</li><li><a href="https://qm.qq.com/q/wlH5eT8OmQ" target="_blank" rel="noopener noreferrer">三群</a> 1035228475（开发和建议相关讨论）不一定有空回复，会优先写文档和代码</li><li><a href="https://qm.qq.com/q/wlH5eT8OmQ" target="_blank" rel="noopener noreferrer">四群</a> 729957033（开发和建议相关讨论）不一定有空回复，会优先写文档和代码</li></ul><h2 id="其他平台版本-请切换到tg分支" tabindex="-1"><a class="header-anchor" href="#其他平台版本-请切换到tg分支"><span>其他平台版本 <strong>请切换到TG分支</strong></span></a></h2>',9)),t(a,{repo:"cablate/MaiMBot"}),e[2]||(e[2]=r('<h2 id="🎯-功能介绍" tabindex="-1"><a class="header-anchor" href="#🎯-功能介绍"><span>🎯 功能介绍</span></a></h2><h3 id="💬-聊天功能" tabindex="-1"><a class="header-anchor" href="#💬-聊天功能"><span>💬 聊天功能</span></a></h3><ul><li>支持关键词检索主动发言：对消息的话题topic进行识别，如果检测到麦麦存储过的话题就会主动进行发言</li><li>支持bot名字呼唤发言：检测到&quot;麦麦&quot;会主动发言，可配置</li><li>支持多模型，多厂商自定义配置</li><li>动态的prompt构建器，更拟人</li><li>支持图片，转发消息，回复消息的识别</li><li>错别字和多条回复功能：麦麦可以随机生成错别字，会多条发送回复以及对消息进行reply</li></ul><h3 id="😊-表情包功能" tabindex="-1"><a class="header-anchor" href="#😊-表情包功能"><span>😊 表情包功能</span></a></h3><ul><li>支持根据发言内容发送对应情绪的表情包</li><li>会自动偷群友的表情包</li></ul><h3 id="📅-日程功能" tabindex="-1"><a class="header-anchor" href="#📅-日程功能"><span>📅 日程功能</span></a></h3><ul><li>麦麦会自动生成一天的日程，实现更拟人的回复</li></ul><h3 id="🧠-记忆功能" tabindex="-1"><a class="header-anchor" href="#🧠-记忆功能"><span>🧠 记忆功能</span></a></h3><ul><li>对聊天记录进行概括存储，在需要时调用，待完善</li></ul><h3 id="📚-知识库功能" tabindex="-1"><a class="header-anchor" href="#📚-知识库功能"><span>📚 知识库功能</span></a></h3><ul><li>基于embedding模型的知识库，手动放入txt会自动识别，写完了，暂时禁用</li></ul><h3 id="👥-关系功能" tabindex="-1"><a class="header-anchor" href="#👥-关系功能"><span>👥 关系功能</span></a></h3><ul><li>针对每个用户创建&quot;关系&quot;，可以对不同用户进行个性化回复，目前只有极其简单的好感度（WIP）</li><li>针对每个群创建&quot;群印象&quot;，可以对不同群进行个性化回复（WIP）</li></ul><h2 id="开发计划todo-list" tabindex="-1"><a class="header-anchor" href="#开发计划todo-list"><span>开发计划TODO：LIST</span></a></h2><p>规划主线 0.6.0：记忆系统更新 0.7.0: 麦麦RunTime</p><ul><li>人格功能：WIP</li><li>群氛围功能：WIP</li><li>图片发送，转发功能：WIP</li><li>幽默和meme功能：WIP的WIP</li><li>让麦麦玩mc：WIP的WIP的WIP</li><li>兼容gif的解析和保存</li><li>小程序转发链接解析</li><li>对思考链长度限制</li><li>修复已知bug</li><li><s>完善文档</s></li><li>修复转发</li><li><s>config自动生成和检测</s></li><li><s>log别用print</s></li><li><s>给发送消息写专门的类</s></li><li>改进表情包发送逻辑</li><li>自动生成的回复逻辑，例如自生成的回复方向，回复风格</li><li>采用截断生成加快麦麦的反应速度</li><li>改进发送消息的触发</li></ul><h2 id="设计理念" tabindex="-1"><a class="header-anchor" href="#设计理念"><span>设计理念</span></a></h2><p><strong>千石可乐说：</strong></p><ul><li>这个项目最初只是为了给牛牛bot添加一点额外的功能，但是功能越写越多，最后决定重写。其目的是为了创造一个活跃在QQ群聊的&quot;生命体&quot;。可以目的并不是为了写一个功能齐全的机器人，而是一个尽可能让人感知到真实的类人存在.</li><li>程序的功能设计理念基于一个核心的原则：&quot;最像而不是好&quot;</li><li>主打一个陪伴</li><li>如果人类真的需要一个AI来陪伴自己，并不是所有人都需要一个完美的，能解决所有问题的helpful assistant，而是一个会犯错的，拥有自己感知和想法的&quot;生命形式&quot;。</li><li>代码会保持开源和开放，但个人希望MaiMbot的运行时数据保持封闭，尽量避免以显式命令来对其进行控制和调试.我认为一个你无法完全掌控的个体才更能让你感觉到它的自主性，而视其成为一个对话机器.</li></ul><h2 id="📌-注意事项" tabindex="-1"><a class="header-anchor" href="#📌-注意事项"><span>📌 注意事项</span></a></h2><p>SengokuCola纯编程外行，面向cursor编程，很多代码史一样多多包涵</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本应用生成内容来自人工智能模型，由 AI 生成，请仔细甄别，请勿用于违反法律的用途，AI生成内容不代表本人观点和立场。</p></div><h2 id="致谢" tabindex="-1"><a class="header-anchor" href="#致谢"><span>致谢</span></a></h2><p><a href="https://github.com/nonebot/nonebot2" target="_blank" rel="noopener noreferrer">nonebot2</a>: 跨平台 Python 异步聊天机器人框架<br><a href="https://github.com/NapNeko/NapCatQQ" target="_blank" rel="noopener noreferrer">NapCat</a>: 现代化的基于 NTQQ 的 Bot 协议端实现</p><h3 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者"><span>贡献者</span></a></h3><p>感谢各位大佬！</p><a href="https://github.com/SengokuCola/MaiMBot/graphs/contributors"><img src="https://contrib.rocks/image?repo=SengokuCola/MaiMBot"></a><h2 id="star人数统计" tabindex="-1"><a class="header-anchor" href="#star人数统计"><span>Star人数统计</span></a></h2><p><a href="https://starchart.cc/SengokuCola/MaiMBot" target="_blank" rel="noopener noreferrer"><img src="https://starchart.cc/SengokuCola/MaiMBot.svg?variant=adaptive" alt="Stargazers over time"></a></p>',29))])}const u=o(p,[["render",c]]),b=JSON.parse('{"path":"/docs/description/","title":"项目介绍","lang":"zh-CN","frontmatter":{"permalink":"/docs/description/","title":"项目介绍","icon":"mdi:tooltip-text-outline","createTime":"2025/03/16 12:00:42","description":"Python Version License Status","head":[["meta",{"property":"og:url","content":"https://maimbot.pages.dev/docs/description/"}],["meta",{"property":"og:site_name","content":"MaiMBot WiKi"}],["meta",{"property":"og:title","content":"项目介绍"}],["meta",{"property":"og:description","content":"Python Version License Status"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/badge/Python-3.9+-blue"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T15:02:16.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-18T15:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目介绍\\",\\"image\\":[\\"https://img.shields.io/badge/Python-3.9+-blue\\",\\"https://img.shields.io/github/license/SengokuCola/MaiMBot\\",\\"https://img.shields.io/badge/状态-开发中-yellow\\",\\"https://starchart.cc/SengokuCola/MaiMBot.svg?variant=adaptive\\"],\\"dateModified\\":\\"2025-03-18T15:02:16.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.37,"words":1310},"git":{"updatedTime":1742310136000,"contributors":[{"name":"Ziphyrien","username":"Ziphyrien","email":"111620796+Ziphyrien@users.noreply.github.com","commits":20,"avatar":"https://avatars.githubusercontent.com/Ziphyrien?v=4","url":"https://github.com/Ziphyrien"},{"name":"Ziphyrien","username":"Ziphyrien","email":"Hanson132567@outlook.com","commits":5,"avatar":"https://avatars.githubusercontent.com/Ziphyrien?v=4","url":"https://github.com/Ziphyrien"}],"changelog":[{"hash":"e65a10752e1ce241e9d1b2fa6a91ae2c6d6eb4b5","date":1741446927000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Add files via upload","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/e65a10752e1ce241e9d1b2fa6a91ae2c6d6eb4b5"},{"hash":"a31d9b665b14a2e9f91d7dba286be6e3fce36f22","date":1741446980000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Rename README.md to 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/a31d9b665b14a2e9f91d7dba286be6e3fce36f22"},{"hash":"f959737d64627cf8865ab81367ce20625cc21225","date":1741447387000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/f959737d64627cf8865ab81367ce20625cc21225"},{"hash":"08a65013e674f0ffeedbd22aad9b408308a70718","date":1741449941000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/08a65013e674f0ffeedbd22aad9b408308a70718"},{"hash":"0f07154e882902e98720244b2712a20b61bc8a43","date":1741450015000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/0f07154e882902e98720244b2712a20b61bc8a43"},{"hash":"979ac10e591f567be4e7aea07845fb56e6b12f77","date":1741450049000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/979ac10e591f567be4e7aea07845fb56e6b12f77"},{"hash":"f48711e30d00898ccb78ce9842a13b52bdd93df2","date":1741450076000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/f48711e30d00898ccb78ce9842a13b52bdd93df2"},{"hash":"5e27df33c5b25fd38d164809176fcf2dfa419eac","date":1741455387000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/5e27df33c5b25fd38d164809176fcf2dfa419eac"},{"hash":"2e4b9d2e80eca569327036edc84e703022441075","date":1741457466000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/2e4b9d2e80eca569327036edc84e703022441075"},{"hash":"6ae495957a26c10a5691a7233172a4045110672e","date":1741457769000,"email":"111620796+Ziphyrien@users.noreply.github.com","author":"Ziphyrien","message":"Update 1.项目介绍.md","commitUrl":"https://github.com/Ziphyrien/MaiMBOT-WiKi/commit/6ae495957a26c10a5691a7233172a4045110672e"}]},"autoDesc":true,"filePathRelative":"notes/项目介绍.md","bulletin":true}');export{u as comp,b as data};
