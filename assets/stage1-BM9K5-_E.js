import"./normalize-jCL-TTtM.js";import{$ as t}from"./haze-CHzfAIZx.js";const l=(o,c)=>o%c!==c-1,k=(o,c)=>o%c!==0,p=(o,c)=>o>c-1,f=(o,c,s)=>o<c*(s-1),I=(o,c,s)=>l(o,s)&&c[o+1][0]===0,D=(o,c,s)=>k(o,s)&&c[o-1][0]===0,u=(o,c,s)=>p(o,s)&&c[o-s][0]===0,x=(o,c,s,a)=>f(o,s,a)&&c[o+s][0]===0,H=(o,c)=>c[0]===o[0]&&c[1]===o[1],m=(o,c)=>{H(o,c)&&(t(".displayClear").css("display","block"),setTimeout(()=>alert("Number: 5"),500))},i=(o,c,s,a,r,b)=>{t(".box").css("border","1px solid black"),c[o][0]===0?t(".box").css("background-color","white"):t(".box").css("background-color","black"),c[o][1]!==0?t(".box").text(c[o][1]):t(".box").text(""),l(o,s)?c[o+1][0]===1&&t(".box").css("border-right","6px solid black"):t(".box").css("border-right","6px solid black"),k(o,s)?c[o-1][0]===1&&t(".box").css("border-left","6px solid black"):t(".box").css("border-left","6px solid black"),p(o,s)?c[o-s][0]===1&&t(".box").css("border-top","6px solid black"):t(".box").css("border-top","6px solid black"),f(o,s,a)?c[o+s][0]===1&&t(".box").css("border-bottom","6px solid black"):t(".box").css("border-bottom","6px solid black"),m(r,b)},y=()=>{const s=[[0,"S"],[0,0],[0,0],[1,0],[0,0],[1,0],[0,0],[0,0],[0,0],[0,0],[1,0],[0,0],[0,0],[1,0],[0,"G"],[0,0]],a=[2,3];let r=0,b=[0,0];i(r,s,4,4,b,a),t(document).on("keyup",T=>{const{key:e}=T;if(!H(b,a)){const n={ArrowRight:{check:()=>I(r,s,4),action:()=>{r++,b[0]++}},ArrowLeft:{check:()=>D(r,s,4),action:()=>{r--,b[0]--}},ArrowUp:{check:()=>u(r,s,4),action:()=>{r-=4,b[1]--}},ArrowDown:{check:()=>x(r,s,4,4),action:()=>{r+=4,b[1]++}}};e in n&&n[e].check()&&(n[e].action(),i(r,s,4,4,b,a))}})};y();
//# sourceMappingURL=stage1-BM9K5-_E.js.map