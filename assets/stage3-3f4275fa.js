import"./normalize-dc93543e.js";import{$ as e}from"./haze-af645254.js";let u=()=>{e(".box").css("border","1px solid black"),a[l][0]==0?e(".box").css("background-color","white"):e(".box").css("background-color","black"),a[l][1]!=0?e(".box").text(a[l][1]):e(".box").text(""),H()?a[l+1][0]==1&&e(".box").css("border-right","3px solid black"):e(".box").css("border-right","3px solid black"),A()?a[l-1][0]==1&&e(".box").css("border-left","3px solid black"):e(".box").css("border-left","3px solid black"),C()?a[l-o][0]==1&&e(".box").css("border-top","3px solid black"):e(".box").css("border-top","3px solid black"),D()?a[l+o][0]==1&&e(".box").css("border-bottom","3px solid black"):e(".box").css("border-bottom","3px solid black"),R()},R=()=>{f[0]==t[0]&&f[1]==t[1]?e("#ue-img").css("display","none"):e("#ue-img").css("display","block"),d[0]==t[0]&&d[1]==t[1]?e("#ue-img2").css("display","none"):e("#ue-img2").css("display","block"),g[0]==t[0]&&g[1]==t[1]?e("#ue-img3").css("display","none"):e("#ue-img3").css("display","block"),b[0]==t[0]&&b[1]==t[1]?e("#ue-img4").css("display","none"):e("#ue-img4").css("display","block"),h[0]==t[0]&&h[1]==t[1]?e("#ue-img5").css("display","none"):e("#ue-img5").css("display","block"),p[0]==t[0]&&p[1]==t[1]?e("#ue-img6").css("display","none"):e("#ue-img6").css("display","block");let s=Math.atan((f[1]-t[1])/(f[0]-t[0]))*(180/Math.PI),c=Math.atan((d[1]-t[1])/(d[0]-t[0]))*(180/Math.PI),n=Math.atan((g[1]-t[1])/(g[0]-t[0]))*(180/Math.PI),i=Math.atan((b[1]-t[1])/(b[0]-t[0]))*(180/Math.PI),_=Math.atan((h[1]-t[1])/(h[0]-t[0]))*(180/Math.PI),I=Math.atan((p[1]-t[1])/(p[0]-t[0]))*(180/Math.PI),k,x,w,y,M,P;f[0]-t[0]>=0?k=90+s:k=s-90,d[0]-t[0]>=0?x=90+c:x=c-90,g[0]-t[0]>=0?w=90+n:w=n-90,b[0]-t[0]>=0?y=90+i:y=i-90,h[0]-t[0]>=0?M=90+_:M=_-90,p[0]-t[0]>=0?P=90+I:P=I-90,e("#ue-img").css("transform","rotate("+k+"deg)"),e("#ue-img2").css("transform","rotate("+x+"deg)"),e("#ue-img3").css("transform","rotate("+w+"deg)"),e("#ue-img4").css("transform","rotate("+y+"deg)"),e("#ue-img5").css("transform","rotate("+M+"deg)"),e("#ue-img6").css("transform","rotate("+P+"deg)")},H=()=>l%o!=o-1,A=()=>l%o!=0,C=()=>l>o-1,D=()=>l<o*(T-1),S=()=>{let s=!1;return H()&&a[l+1][0]==0&&(s=!0),s},U=()=>{let s=!1;return A()&&a[l-1][0]==0&&(s=!0),s},B=()=>{let s=!1;return C()&&a[l-o][0]==0&&(s=!0),s},G=()=>{let s=!1;return D()&&a[l+o][0]==0&&(s=!0),s},N=()=>{let s=window.innerWidth,c=window.innerHeight,n=e(".displayClear img").width(),i=e(".displayClear img").height();e(".share-btn").css({top:c/2+i/2+"px",right:s/2-n/2+"px"})};const o=6,T=5;let a=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,"G"],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,"S"],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1,0],[1,0],[1,0],[1,0]],W=s=>{let c=0,n=[83,81,85,65,82,69];r<6&&(m[r]=s,r++);for(let i=0;i<r;i++)e("#span-"+(i+1)).css("opacity",1);for(let i=0;i<6;i++)n[i]==m[i]&&c++;c==6&&(e(".displayClear").css("display","block"),L=!0,N(),setTimeout("alert('Number: 2')",500)),console.log(m)},$=()=>{1<=r<=6&&(e("#span-"+r).css("opacity",0),r--,m[r]=0,console.log(m))},l=18,t=[0,3],f=[0,3],d=[4,2],g=[2,3],b=[0,0],h=[5,2],p=[4,0],j=window.innerHeight,m=[0,0,0,0,0,0],r=0,L=!1;e(".img-arrow").css("left","calc(50% - "+j*.98*155*.5/909+"px)");u();e("html").keyup(s=>{if(!L)switch(s.which){case 8:$();break;case 13:W(l+65);break;case 39:S()&&(l++,t[0]++,u());break;case 37:U()&&(l--,t[0]--,u());break;case 38:B()&&(l-=o,t[1]--,u());break;case 40:G()&&(l+=o,t[1]++,u());break}});
//# sourceMappingURL=stage3-3f4275fa.js.map
