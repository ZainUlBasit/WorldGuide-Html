(function(){const p="main.af0e6aaa.js",i="https",a="emerald-debug",l="entrypoint.js",u="https://dostavka.dev.k8s.int.avs.io",m="entrypoint_config",c=document.currentScript;function d(t){if(Reflect.has(globalThis,"m10nInfoSink"))return;const r=new Map;r.set("entrypoint_init",!0),r.set("entrypoint_config",{marker:t.marker,trs:t.project.trs,services:structuredClone(t.services)}),Object.defineProperty(globalThis,"m10nInfoSink",{enumerable:!1,get(){return r},set(){return null}})}function f(t){const r=new URL(t);return new URL(window.location.href).searchParams.get(a)==="true"&&!r.searchParams.has(a)}function h(t){const r=document.createElement("script"),n=new URLSearchParams,e=f(c.src);if(!t.marker)return;let s="";e?(n.append(a,"true"),n.append("marker",t.marker),s=`${u}/${l}`):(s=`${i}://${t.assets_domain}/${p}`,r.type="module",r.async=!0,r.onload=()=>{r.customData={config:t,protocol:i}});const o=n.toString();r.src=o?`${s}?${o}`:s,document.head.appendChild(r)}function w(){const t=new URL(c.src),r=t.searchParams.get("marker"),n=t.searchParams.get("t"),e=n?parseInt(n,10):null;return{marker:r,trs:e}}async function _(t,r,n){try{const e=new URL(c.src),s=new URL(`${e.origin}/${m}`);t&&s.searchParams.append("t",t.toString()),r&&s.searchParams.append("marker",r),s.searchParams.append("page_url",n);const o=await fetch(s.toString());if(!o.ok)throw new Error("Failed to fetch config data");return o.json()}catch(e){return console.error("Error fetching config data:",e),null}}async function g(){if(!window.location.protocol.startsWith("http"))return;console.log("[tp] entrypoint init");const{marker:t,trs:r}=w(),n=window.location.href;if(!t&&!r){console.error("Neither marker nor trs provided.");return}const e=await _(r,t,n);e!=null&&e.assets_domain&&e.trace_id&&(d(e),h(e))}g();})()