if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let i={};const d=e=>a(e,f),c={module:{uri:f},exports:i,require:d};s[f]=Promise.all(t.map((e=>c[e]||d(e)))).then((e=>(r(...e),i)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/404.html-c2e6da08.js",revision:"cd42fce74f21c8dece16fd42b36b3103"},{url:"assets/ado.html-8c68c94c.js",revision:"02d6ca0e29274e3f620aaab9621ee182"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aggregateroot.html-e9792b18.js",revision:"9f22e720df14c26e3b48a3af4b21cad1"},{url:"assets/aop-freesql-autofac.html-914794db.js",revision:"33976a69250de00fc638c4bcd4f70e44"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-1b691ebd.js",revision:"15f85378107243b8222ccb1b7b7850ef"},{url:"assets/aop.html-7e8f9bd8.js",revision:"73afcd463c8319619658e106e6fa383c"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/api.html-daf0d179.js",revision:"642045242e642ae6dfc5589201df8fa8"},{url:"assets/app-57a23d29.js",revision:"f19a2ce6154774950a54fefcc1907582"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/awesome-freesql.html-6a12086e.js",revision:"18128e36a1b3020291a8818972ffd7a7"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/BaseEntity.html-be439a11.js",revision:"d2797b4f38b749e002f5abd3c4c4c1b7"},{url:"assets/cascade-delete.html-7f99e839.js",revision:"010c0727a5b26041aac6a625a176b579"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/cascade-saving.html-4b1ec4ec.js",revision:"2697595613dc22b80e2714135aafebec"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/Cascade-Saving.html-c182878c.js",revision:"41f5cb86284ff6b896805900592ae436"},{url:"assets/change-log.html-1f837667.js",revision:"d11bde10038db4855f0144305fa1fa9a"},{url:"assets/change-log.html-22db201a.js",revision:"15ec2f2667a1f3f430d4ae9a21ac19b4"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/code-first.html-da1f66b4.js",revision:"39dd23cfffa550a152b1f5065faf0533"},{url:"assets/CodeFirst-Mode.html-5955edcd.js",revision:"46fddccd7ca3597e49c4573824590b5b"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/config-entity-from-db-first.html-ed122a92.js",revision:"8dc70d2c90f7e014fa22ede3f9e3bcb3"},{url:"assets/contributing.html-9adf23db.js",revision:"9bae5aff84f4bec578c2e0b426045a8b"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/custom-attribute.html-ebd73323.js",revision:"e3abc94981287a0d767915943303db36"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-context.html-fdaf1bfb.js",revision:"db82c9381608ac4ea0864f945cdae30a"},{url:"assets/db-first.html-bdf3bf32.js",revision:"6e432104964b39a4729042f774828313"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/Delete-Data.html-c553a9b7.js",revision:"ec14206be167a54a2b3d3b48e31c94d6"},{url:"assets/Delete-Data.html-ef978f95.js",revision:"fea197610122fa5f782dc9910f173037"},{url:"assets/delete.html-0d3d721c.js",revision:"5c7789aace8c129206c8524da03a7f30"},{url:"assets/delete.html-bb10f205.js",revision:"83873218541b1a8af700f0162da656fd"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/donation.html-eb5cf411.js",revision:"568c9ba48d3d9eb2c43398b0f7a1f6c8"},{url:"assets/dynamic.html-35f7f61e.js",revision:"f65a319595ffeb7ccbfa2c22da27bc57"},{url:"assets/dynamic.html-52277777.js",revision:"20196090136746911b5bd75c7fa02421"},{url:"assets/entity-attribute.html-0caf6592.js",revision:"7112a8f38fd87fe37b1fdd6e7894601f"},{url:"assets/entity-attribute.html-9ff79cca.js",revision:"c5a5bf04fa0003c1b8d4f234b28cf1b6"},{url:"assets/Entity-Relationship.html-52a90d0b.js",revision:"3702001f9e5d51910e9255018e9e85b6"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-f65ded19.js",revision:"a21b89497eafa249f743ec8b517ba83e"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-6ee0839d.js",revision:"249ad64329eb50a145740ba29f919c60"},{url:"assets/filters.html-c86ee31a.js",revision:"9ced6bd92460e13353b21dffd5259a34"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/fluent-api.html-ed511289.js",revision:"5336ada593d075d0d5d612f1572603df"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-643343b3.js",revision:"11bdfb3c38ea8e926cf5e5ad885be141"},{url:"assets/freeredis.html-1355d9b4.js",revision:"5b44cc453d09c7ef2f0a8f3ea8a1a375"},{url:"assets/freeredis.html-73d271e2.js",revision:"835c0d8761f561b5cf2d90498c5fe77f"},{url:"assets/freescheduler.html-5ebb4ee0.js",revision:"c814673f2e7dfe60952b5c4cd6d78d45"},{url:"assets/freescheduler.html-9817f4e8.js",revision:"2d2a0a18363f7e23664b5d056a5611df"},{url:"assets/freesql-auditlog.html-703ba84a.js",revision:"d658f66bc555b88df32e6d5e728df7b9"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-cap.html-22cf89a8.js",revision:"8bdde457cbce9c798a39e0a79cf84cfb"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-199a43e1.js",revision:"fbf64a7c5890abe5bfa26609a7c8b4fe"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-44176ef7.js",revision:"55a8bb86f7b12d87f1308b903d3e77c4"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freesql-extensions-jsonmap.html-12ab1d55.js",revision:"624ff03b64af021b3764ce30669fd348"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-c6f8e964.js",revision:"996f89974d76a79e852c73ffbfcc15a5"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-53044dcf.js",revision:"f6b69a5145cc341ed96a4bce6c468415"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-odbc.html-9b66572a.js",revision:"978f61457276772545a7495f30556e30"},{url:"assets/freesql-provider-oracle.html-09825a3c.js",revision:"8f06975ff6e2dbf8a0e927579e820f71"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-postgresql.html-50a8ad25.js",revision:"4ae290b325beda7104b3372cdc295fa9"},{url:"assets/freesql-provider-questdb.html-1e3e24fe.js",revision:"8efaf5195dcc1f03e80593212fc8cc64"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesql-provider-sqlitecore.html-fec8f98a.js",revision:"f9c667a1951445667efeb7af867df2bb"},{url:"assets/freesqladminlte.html-4afa618d.js",revision:"0369c402c6a1d390ab598c96ae8ddf72"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/getting-started.html-2c34805b.js",revision:"9c7b1d0014f874bf88f611d8c38348a5"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-dad75e36.js",revision:"b7155d9e1acf08ff61a886306be3f1da"},{url:"assets/getting-started.html-f9f7f682.js",revision:"7863b934f83ded5eec106b7b281df463"},{url:"assets/Greed-Loading.html-462bb55f.js",revision:"bbc764d8fdb051ed53c3457704be6bc8"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-207192e5.js",revision:"e55f654293031f445edef6d0be34ef24"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/idlebus-freesql.html-e2d9a25e.js",revision:"5ade2037ccd60b592161ca8b68f4a8b0"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/ifreesql-context.html-e39b1a0f.js",revision:"fea3fde48dc4f5ecc713d63b4b4c93ad"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-03697959.js",revision:"00e853bb6318642e0e559b7c37b7d8e8"},{url:"assets/index.html-1344bd39.js",revision:"a62bb8cee0bc655c3646b9bdeea56812"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-2fb319fe.js",revision:"a9d6d751a856171cb018fb1efb536012"},{url:"assets/index.html-6907c7f9.js",revision:"257ac46fbaa8c83cbc02d8fa4f7ebf62"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-763986e5.js",revision:"7013f504e5070f9ad8c9081299557f8c"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-a66ad10b.js",revision:"5a51efbf47fa2b0e5532091325ecb2c4"},{url:"assets/index.html-c973a697.js",revision:"82d9d596f6fda5f6facf69590dd9ac06"},{url:"assets/index.html-fed50d7a.js",revision:"2811fd143973f0ab1312fd36714bf3e4"},{url:"assets/Insert-Data.html-319bcbd0.js",revision:"c3f7d72718a78f3ccda2a3f88b333fe0"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/insert-or-update.html-9a575edd.js",revision:"33def7eaace18cb341431255f78ed70b"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert-or-update.html-fa4ce184.js",revision:"8505f578f3d321da41d1348ab33d3ed5"},{url:"assets/insert.html-7a0b8eb2.js",revision:"7b134d6536a9c6f2e8290af4353bf3a8"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-7aff2b21.js",revision:"2d2340af3dd9f14c416174ba54790f46"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/install.html-fa2af0df.js",revision:"455d8d52b484a7e1be50f8b0c1d8c5d9"},{url:"assets/iselect-depcopy.html-4b635e27.js",revision:"2f427b6db1b6ae6047bdcdc1cb9f5c1b"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-f378d124.js",revision:"958470cd195444302a7ccddc6cab25b1"},{url:"assets/issues-in-valuetype.html-6534f43d.js",revision:"ce584e7a8f158d980f1fd0b72f37664e"},{url:"assets/issues-in-valuetype.html-9dd15629.js",revision:"59036e48d25faf5fe57354015543fb74"},{url:"assets/issues-mysql5_5.html-85fdeebc.js",revision:"c8162c7d7e91388a421e9d558a726b00"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Lazy-Loading.html-7835f7d6.js",revision:"15e443e1588ae47aeebd728a40ef6674"},{url:"assets/Linq-to-Sql.html-843b9512.js",revision:"37d2b4cd8dbeb2949508f056dad949a5"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/linq-to-sql.html-ed9ff65a.js",revision:"c061895ea1dc4fb2e7060439a6c79ce9"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-8721577c.js",revision:"3427a6cb5b58bcdd40bfe6a034af5103"},{url:"assets/multi-tenancy.html-a7926404.js",revision:"cd2b127c4040096b43e9b422434da042"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/navigate-attribute.html-1d0944b7.js",revision:"4772d8a9c888116598e6c0d04519935f"},{url:"assets/navigate-attribute.html-b66c958a.js",revision:"5dc2d07531c6fb2247d942d65b6b618e"},{url:"assets/otherworks.html-bf4cae03.js",revision:"78cdac56a5530ab14035474bee61b4d3"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-36bf600e.js",revision:"b8cb8c60b59aa9c8ffe113c5944f9187"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/paging.html-6da8ffff.js",revision:"ac8c4365aa68eaab0d09dd453e34a167"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/Parent-Child-Relationship-Query.html-ea3d271d.js",revision:"cc083da8812a2aa51294bd1778553dae"},{url:"assets/performance.html-9cd75e45.js",revision:"4c04c062c46975a415f2fd84ffe330cb"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-8c94eea3.js",revision:"7f2923887253c61d51c46c69018a956a"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-119b38f9.js",revision:"aa39262268a7cc79d8fecbca6fda6d8d"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-d905fe4c.js",revision:"26cbdf499fa549c2d51ab88557d47590"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/read-write-splitting.html-8bf9cf56.js",revision:"814e5fc19e2fe301d548772ac053b902"},{url:"assets/Repository-Layer.html-6c703418.js",revision:"54e00e1ff136cf467f11493fc702485c"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/repository.html-6e548389.js",revision:"fd5fe94ba0bd98a7dc3ff068dfac9f65"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/Return-Data.html-b34b7f1b.js",revision:"5b957387490fafced5d378a06ab23b14"},{url:"assets/select-as-tree.html-7d7a9de2.js",revision:"72fa99b15e386f6c0b323929c0b13a50"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-5f4f33c6.js",revision:"11e6c85c46508aa9fd45aade503a5f3b"},{url:"assets/select-group-by.html-ec5c058e.js",revision:"b28e5b39811f873e6d14ec31f77f4a51"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-include.html-c2adde14.js",revision:"01fb17a82f1ecd0ea13da1ea3d0f05ed"},{url:"assets/select-lazy-loading.html-3086a290.js",revision:"3fdfc9560b4c99a3234adece82f050e8"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-multi-table.html-efe763cb.js",revision:"166cc7827efa22827a48e09cf9164aab"},{url:"assets/select-return-data.html-27014671.js",revision:"bcc42b30473e6fd47e580af7237abb13"},{url:"assets/select-return-data.html-96380762.js",revision:"99d87884b9b830cc63b7cf6d3b6bdd62"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select-single-table.html-f3854e04.js",revision:"9035c325d5f986e55271132385e4fa00"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/select.html-ae7aad40.js",revision:"f55d49ce564f3c4b975770ef604eefe8"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-d83e755d.js",revision:"a8d001a09d18a3dc4663a66faf36a3b2"},{url:"assets/sharding.html-05aaddcb.js",revision:"58a9e9260aac188fe5fa66a9a1333608"},{url:"assets/sharding.html-63bd3e81.js",revision:"a68350e377e67963081ae45be21b7cfa"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-256ce041.js",revision:"7961c4201be01ca3b0151c0ee002c040"},{url:"assets/type-mapping.html-7467c6d1.js",revision:"57082f255427b5b8ed572c5c132341ad"},{url:"assets/type-mapping.html-c218846b.js",revision:"72511407af427501e2dec1ea2ff3b9a7"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/unionall.html-d3f5f501.js",revision:"9a64797500b48c675fb485e8cc6c1083"},{url:"assets/Unit-of-Work-Manager.html-6934c965.js",revision:"794e84abbea7ea5d0b9c00682d4e2a2d"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/Unit-of-Work.html-9519ead8.js",revision:"3effc9bf2f00c622eeaf886fbdd97571"},{url:"assets/unit-of-work.html-bbb251a5.js",revision:"b6ef11bf82aa7247d921276dfaf451c6"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/unitofwork-manager.html-fd8c1fed.js",revision:"b3313b8ce53390dd853cf2b54eb9741a"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-207d2ac4.js",revision:"52e5e132414997a605647c76d0a65e91"},{url:"assets/update.html-3455588d.js",revision:"1d3bff585b6b986589c3c3ae20e93e50"},{url:"assets/update.html-57c71f0d.js",revision:"375e4014b942cdc0489d2140e9682a57"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-dapper.html-91a3ab17.js",revision:"71ad668507712a4714bd1b8322eb82ad"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/vs-entity-framework.html-b45a4349.js",revision:"1fb0e9a8e137bf1d38181278ff995c9c"},{url:"assets/With-Sql.html-bb5c0189.js",revision:"8f8f2438290fd60add8e5723b07578a2"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-0e59af14.js",revision:"c953fb9f5fa4282f18cb851992c6d045"},{url:"assets/withsql.html-cfda5b6a.js",revision:"557cbc3700d653b37db886788926f6f7"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"assets/withtempquery.html-e7fb99cc.js",revision:"abdde8ca24baabcb53093f569b28f164"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"f5d3195a390108ff488507985b0526f9"},{url:"404.html",revision:"d2e37143947e87f211c6070692546c7b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
