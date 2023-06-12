import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-1e257268.js";const t={},p=e(`<h1 id="freesql-provider-oracle" tabindex="-1"><a class="header-anchor" href="#freesql-provider-oracle" aria-hidden="true">#</a> FreeSql.Provider.Oracle</h1><p>FreeSql 对 Oracle 支持非常友好，是 c#.net ORM 不二之选，提供了 Ado.net/Odbc/Oledb 三种实现包，他们都支持 .NETCore2.1+、.NET4.0+ 等最新或较低的 .NETFramework 版本。</p><p>若想以 Ado.net 驱动访问数据库，请安装：</p><blockquote><p>dotnet add package FreeSql.Provider.Oracle</p></blockquote><p>若想以 ODBC 驱动访问数据库，请安装：</p><blockquote><p>dotnet add package FreeSql.Provider.Odbc</p></blockquote><p>若想以 Oledb 驱动访问数据库，请安装：</p><blockquote><p>dotnet add package FreeSql.Provider.OracleOledb</p></blockquote><hr><p>关于 Oracle US7ASCII 中文乱码的问题，Ado.Net 和 Odbc 无法解决。包括最新的.Net Core、.NET6、.NET7 都无法解决这个问题。</p><p>安装 FreeSql.Provider.OracleOledb 使用 Oledb 驱动解决读取使用 US7ASCII 的 Oracle 数据库中文显示乱码问题。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DB</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> oracleLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Oracle<span class="token punctuation">,</span> <span class="token string">&quot;Provider=OraOLEDB.Oracle;user id=9user;password=123456;data source=//127.0.0.1:1521/XE;Pooling=true;Max Pool Size=2&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseNameConvert</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>Internal<span class="token punctuation">.</span>NameConvertType<span class="token punctuation">.</span>ToUpper<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseNoneCommandParameter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> oracle <span class="token operator">=&gt;</span> oracleLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义 DB.cs 类之后就可以快乐的 CRUD 了。FreeSql 提供多种 CRUD 使用习惯，请根据实际情况选择团队合适的一种：</p><ul><li>要么 FreeSql，原始用法；</li><li>要么 FreeSql.Repository，仓储+工作单元习惯；</li><li>要么 FreeSql.DbContext，很像 EFCore 的使用习惯；</li><li>要么 FreeSql.BaseEntity，充血模式；</li><li>要么 直接像 dapper 那样使用 OracleConnection 扩展方法；</li></ul>`,14),o=[p];function c(l,r){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","freesql-provider-oracle.html.vue"]]);export{d as default};
