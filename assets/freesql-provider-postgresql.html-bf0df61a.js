import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,f as u,a as s,b as n,d as t,e as p}from"./app-1e257268.js";const i={},k=p(`<p>nuget 安装：FreeSql.Provider.PostgreSQL</p><h2 id="数组、字典" tabindex="-1"><a class="header-anchor" href="#数组、字典" aria-hidden="true">#</a> 数组、字典</h2><p>PostgreSQL 数据类型丰富，支持 int[]、string[] 数组类型，Dictionary&lt;string, string&gt; 字典类型。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> tagIds <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//映射数组</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> tagNames <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token return-type class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> dict <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//映射 hstore</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支持索引查询</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>tagIds<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>dict<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r={href:"https://www.cnblogs.com/FreeSql/p/16351417.html",target:"_blank",rel:"noopener noreferrer"},d=p(`<h2 id="jsonb" tabindex="-1"><a class="header-anchor" href="#jsonb" aria-hidden="true">#</a> JSONB</h2><p>PostgreSQL JSON 类型的查询性能不输 mongodb，适合做动态结构的数据存储场景。</p><p>FreeSql.Provider.PostgreSQL 默认使用 Newtonsoft.Json.Linq 映射 jsonb 类型，如下三种均可：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">JToken</span> jsonb1 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">JObject</span> jsonb2 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">JArray</span> jsonb3 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支持索引查询</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>jsonb1<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SQL: WHERE coalesce(a.jsonb1, &#39;{}&#39;) ? &#39;key1&#39;</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>jsonb2<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SQL: WHERE coalesce(a.jsonb2-&gt;key1, &#39;{}&#39;) ? &#39;key2&#39;</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>jsonb2<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>JToken<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;{key1:&#39;xxx&#39;}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SQL: WHERE coalesce(a.jsonb2, &#39;{}&#39;) @&gt; &#39;{&quot;key1&quot;:&#39;xxx&#39;}&#39;::jsonb</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>jsonb2<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SQL: WHERE (a.jsonb2-&gt;key1-&gt;key2)::text = &#39;xxx&#39;</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>model<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>jsonb2<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SQL: WHERE (a.jsonb2-&gt;key1-&gt;key2)::text::int4 &gt; 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>lambda 表达式树函数</th><th>PostgreSQL</th><th>功能说明</th></tr></thead><tbody><tr><td>a.Count</td><td>jsonb_array_length(coalesce(a, &#39;[]))</td><td>json数组类型的长度</td></tr><tr><td>a.Any()</td><td>jsonb_array_length(coalesce(a, &#39;[])) &gt; 0</td><td>json数组类型，是否为空</td></tr><tr><td>a.Contains(b)</td><td>coalesce(a, &#39;{}&#39;) @&gt; b::jsonb</td><td>json中是否包含b</td></tr><tr><td>a.ContainsKey(b)</td><td>coalesce(a, &#39;{}&#39;) ? b</td><td>json中是否包含键b</td></tr><tr><td>a.Concat(b)</td><td>coalesce(a, &#39;{}&#39;)</td><td></td></tr><tr><td>JObject.Parse(a)</td><td>a::jsonb</td><td>转化字符串为json类型</td></tr><tr><td>a[&quot;x&quot;][&quot;y&quot;]</td><td>a-&gt;x-&gt;y</td><td>json成员访问</td></tr></tbody></table>`,5),m={href:"https://freesql.net/guide/expression-function.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/dotnetcore/FreeSql/discussions/1071",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="空间地理类型" tabindex="-1"><a class="header-anchor" href="#空间地理类型" aria-hidden="true">#</a> 空间地理类型</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>NpgsqlConnection<span class="token punctuation">.</span>GlobalTypeMapper<span class="token punctuation">.</span><span class="token function">UseLegacyPostgis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// c# 类型：Npgsql.LegacyPostgis.*</span>

<span class="token comment">// 或者</span>
<span class="token comment">// NpgsqlConnection.GlobalTypeMapper.UseNetTopologySuite();</span>
<span class="token comment">// c# 类型：NetTopologySuite.Geometries.*</span>

<span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>PostgreSQL<span class="token punctuation">,</span> <span class="token string">@&quot;Host=192.168.164.10;Port=5432;Username=postgres;Password=123456;Database=tedb;ArrayNullabilityMode=Always;Pooling=true;Maximum Pool Size=2&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseNameConvert</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>Internal<span class="token punctuation">.</span>NameConvertType<span class="token punctuation">.</span>ToLower<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> ogc_fid <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">PostgisPoint</span> geometry <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 NpgsqlConnection.GlobalTypeMapper.UseLegacyPostgis(); 与 FreeSqlBuilder 的顺序</p></blockquote><h2 id="时序数据库" tabindex="-1"><a class="header-anchor" href="#时序数据库" aria-hidden="true">#</a> 时序数据库</h2><p>timescaledb 是 postgresql的一个插件，一个开源的时间序列数据库，为快速获取和复杂查询进行了优化。它执行的是“完整的SQL”，相应地很容易像传统的关系数据库那样使用。</p>`,5);function b(y,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u(" # FreeSql.Provider.PostgreSQL "),k,s("p",null,[n("参考资料："),s("a",r,[n("《PostgreSQL Array 数组类型与 FreeSql 打出一套【组合拳】》"),t(a)])]),d,s("p",null,[n("更多 lambda 表达式树函数，可以看下"),s("a",m,[n("《表达式函数》"),t(a)]),n("文档，支持自定义解析。")]),s("p",null,[n("参考资料："),s("a",g,[n("《PostgreSQL pgsql jsonb 类型 POCO 访问扩展现实方案 #1071》"),t(a)])]),v])}const w=e(i,[["render",b],["__file","freesql-provider-postgresql.html.vue"]]);export{w as default};
