import{o as e,c as t,a,b as s,t as r,d}from"./app.4b24f72f.js";const o='{"title":"Setup","description":"","frontmatter":{"title":"Setup"},"headers":[{"level":2,"title":"Clone the repo","slug":"clone-the-repo"},{"level":2,"title":"Install dependencies","slug":"install-dependencies"},{"level":2,"title":"Start the docker stack","slug":"start-the-docker-stack"},{"level":2,"title":"Stop the docker stack","slug":"stop-the-docker-stack"},{"level":2,"title":"First time database seed","slug":"first-time-database-seed"}],"relativePath":"guide/development/setup/index.md","lastUpdated":1626194494121}',n={},c={id:"frontmatter-title"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=d('<h2 id="clone-the-repo"><a class="header-anchor" href="#clone-the-repo" aria-hidden="true">#</a> Clone the repo</h2><div class="language-bash"><pre><code><span class="token function">git</span> clone git@github.com:metaera/rosterboss.git\n</code></pre></div><h2 id="install-dependencies"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install dependencies</h2><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">install</span>\n</code></pre></div><h2 id="start-the-docker-stack"><a class="header-anchor" href="#start-the-docker-stack" aria-hidden="true">#</a> Start the docker stack</h2><div class="language-bash"><pre><code>docker-compose up\n</code></pre></div><h2 id="stop-the-docker-stack"><a class="header-anchor" href="#stop-the-docker-stack" aria-hidden="true">#</a> Stop the docker stack</h2><div class="language-bash"><pre><code>docker-compose down\n</code></pre></div><h2 id="first-time-database-seed"><a class="header-anchor" href="#first-time-database-seed" aria-hidden="true">#</a> First time database seed</h2><p>Run this firrst time you checkout the repo.</p><div class="language-bash"><pre><code>docker-compose up mongosetup\n</code></pre></div>',11);n.render=function(d,o,n,h,p,u){return e(),t("div",null,[a("h1",c,[i,s(" "+r(d.$frontmatter.title),1)]),l])};export default n;export{o as __pageData};
