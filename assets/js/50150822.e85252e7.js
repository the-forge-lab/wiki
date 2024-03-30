"use strict";(self.webpackChunkforge_wiki=self.webpackChunkforge_wiki||[]).push([[6378],{5026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=t(4848),o=t(8453);const r={},s="Requirements",l={id:"deployment/requirements",title:"Requirements",description:"Local Configuration",source:"@site/docs/deployment/requirements.md",sourceDirName:"deployment",slug:"/deployment/requirements",permalink:"/wiki/docs/deployment/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/the-forge-lab/wiki/tree/main/docs/deployment/requirements.md",tags:[],version:"current",frontMatter:{},sidebar:"deployment",previous:{title:"Deployment",permalink:"/wiki/docs/deployment/intro"},next:{title:"Pre-deploy configuration (using Ansible)",permalink:"/wiki/docs/deployment/pre-deployment"}},c={},h=[{value:"Local Configuration",id:"local-configuration",level:2},{value:"Host Configuration",id:"host-configuration",level:2},{value:"Clone repository",id:"clone-repository",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.h2,{id:"local-configuration",children:"Local Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To deploy the ",(0,i.jsx)(n.code,{children:"/forge"})," infrastructure, you will need:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ansible.com/",children:"Ansible"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://terraform.io/",children:"Terraform"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This three tools must be installed on your local machine."}),"\n",(0,i.jsx)(n.p,{children:"The installation process installs the following tools on the remote machine:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docker.com/",children:"Docker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://zsh.org/",children:"zsh"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"host-configuration",children:"Host Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The configuration is tested only for ",(0,i.jsx)(n.code,{children:"Debian"}),", I can't guarantee that it will work on other distributions.\nThere are few requirements for the remote hosts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All the hosts must have the same user with root privileges."}),"\n",(0,i.jsxs)(n.li,{children:["All the IPs address must be written in the ",(0,i.jsx)(n.code,{children:"ansible/hosts.yml"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"All the hosts must have SSH keys and the host machine must have the public key."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clone-repository",children:"Clone repository"}),"\n",(0,i.jsx)(n.p,{children:"On the host machine, clone the repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Xavier2p/infra-as-code.git && cd infra-as-code\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);