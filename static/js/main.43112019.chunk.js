(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{40:function(e,t,a){e.exports=a(56)},45:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},47:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(13),o=a.n(s),i=(a(45),a(46),a(47),a(16)),l=a(2),u=a(27),c=a(28),h=a(36),f=a(34);var m=function(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,r,n,s){if(a===r)return;var o=Math.floor((a+r)/2);e(n,a,o,t,s),e(n,o+1,r,t,s),function(e,t,a,r,n,s){var o=t,i=t,l=a+1;for(;o<=a&&l<=r;)s.push([o,l]),s.push([o,l]),n[o]<=n[l]?(s.push([i,n[o]]),e[i++]=n[o++]):(s.push([i,n[l]]),e[i++]=n[l++]);for(;o<=a;)s.push([o,o]),s.push([o,o]),s.push([i,n[o]]),e[i++]=n[o++];for(;l<=r;)s.push([l,l]),s.push([l,l]),s.push([i,n[l]]),e[i++]=n[l++]}(t,a,o,r,n,s)}(e,0,e.length-1,a,t),t};var v=function(e){var t=[];if(e.length<=1)return e;for(var a=0;a<e.length;++a)console.log(e[a]);!function e(t,a,r,n){if(a>=r)return;var s=function(e,t,a,r){for(var n=e[a],s=t-1,o=t;o<=a-1;o++)if(e[o]<n){s++,r.push([s,o,t,a]),r.push([s,o,t,a]);var i=[e[o],e[s]];e[s]=i[0],e[o]=i[1],r.push([s,e[s],o,e[o]])}else s>=0&&(r.push([s,o,t,a]),r.push([s,o,t,a]),r.push([s,e[s],o,e[o]]));s++,r.push([s,a,t,a]),r.push([s,a,t,a]);var l=[e[a],e[s]];return e[s]=l[0],e[a]=l[1],r.push([s,e[s],a,e[a]]),s}(t,a,r,n);e(t,a,s-1,n),e(t,s+1,r,n)}(e,0,e.length-1,t),console.log("Sorted");for(var r=0;r<e.length;++r)console.log(e[r]);return t};var p,g=function(e){var t=[];return e.length<=1?e:(function(e,t,a,r){for(var n=0;n<a;++n)for(var s=0;s<a-n;++s){if(r.push([s,s+1]),r.push([s,s+1]),e[s]>e[s+1]){var o=[e[s+1],e[s]];e[s]=o[0],e[s+1]=o[1]}r.push([s,e[s],s+1,e[s+1]])}}(e,0,e.length-1,t),t)};function d(e,t,a){var r=2*t+1,n=2*t+2,s=t;if(r<p&&e[r]>e[s]&&(s=r),n<p&&e[n]>e[s]&&(s=n),a.push([t,s]),a.push([t,s]),s!=t){var o=[e[s],e[t]];e[t]=o[0],e[s]=o[1],a.push([t,e[t],s,e[s]]),d(e,s,a)}else a.push([t,e[t],s,e[s]])}var y=function(e){var t=[];if(e.length<=1)return e;p=e.length;for(var a=Math.floor(p/2);a>=0;a-=1)d(e,a,t);for(var r=p-1;r>0;r--){t.push([0,r]),t.push([0,r]);var n=[e[r],e[0]];e[0]=n[0],e[r]=n[1],t.push([0,e[0],r,e[r]]),p--,d(e,0,t)}return t},b=a(35),S=a(29);var T=function(e){for(var t,a,r=[],n=function(e){var t,a=0,r=Object(S.a)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;a<n.toString().length&&(a=n.toString().length)}}catch(s){r.e(s)}finally{r.f()}return a}(e),s=0;s<n;s++){for(var o,i=Array.from({length:10},(function(){return[]})),l=0;l<e.length;l++)r.push([l]),r.push([l]),i[(t=e[l],a=s,Math.floor(Math.abs(t)/Math.pow(10,a))%10)].push(e[l]);e=(o=[]).concat.apply(o,Object(b.a)(i));for(var u=0;u<e.length;++u)r.push([u,e[u]])}return r};var k=function(e){for(var t=[],a=e.length,r=1;r<a;r++){for(var n=e[r],s=r-1;s>=0&&e[s]>n;)t.push([r,s]),t.push([r,s]),t.push([s+1,e[s]]),e[s+1]=e[s],s--;t.push([r,s+1]),t.push([r,s+1]),t.push([s+1,n]),e[s+1]=n}return t};var C=function(e){for(var t=[],a=e.length,r=0;r<a;r++){for(var n=r,s=r+1;s<a;s++)t.push([n,s]),t.push([n,s]),t.push([n,e[n],s,e[s]]),e[n]>e[s]&&(n=s);if(n!==r){var o=e[r];e[r]=e[n],e[n]=o}t.push([r,n]),t.push([r,n]),t.push([r,e[r],n,e[n]])}return t};var E=function(e){for(var t=[],a=Math.floor(e.length/2);a>0;){for(var r=a;r<e.length;r++){for(var n=r,s=e[r];n>=a&&e[n-a]>s&&n<e.length;)e[n]=e[n-a],t.push([n-a,n]),t.push([n-a,n]),t.push([n,e[n]]),n-=a;e[n]=s,t.push([r,n]),t.push([r,n]),t.push([n,e[n]])}a=2==a?1:parseInt(5*a/11)}return t};var j=function(e){var t=[];function a(e){for(var t=!0,a=0;a<e.length-1;a++)if(e[a]>e[a+1]){t=!1;break}return t}for(var r=0,n=e.length-2;!a(e);){r>0&&(n=1==n?n:Math.floor(n/1.25));for(var s=0,o=n;o<e.length;){if(e[s]>e[o]){var i=e[s];e[s]=e[o],e[o]=i}t.push([s,o]),t.push([s,o]),t.push([s,e[s],o,e[o]]),s+=1,o+=1}r+=1}return t};var O=function(e){for(var t=[],a=0;a<e.length-1;a++){for(var r=e[a],n=a,s=a+1;s<e.length;s++)e[s]<r&&n++;if(n!=a){for(;r==e[n];)n++;var o=e[n];for(e[n]=r,r=o,t.push([n,n]),t.push([n,n]),t.push([n,e[n],n,e[n]]);n!=a;){n=a;for(var i=a+1;i<e.length;i++)e[i]<r&&n++;for(;r==e[n];)n++;o=e[n],e[n]=r,r=o,t.push([a,n]),t.push([a,n]),t.push([a,e[a],n,e[n]])}}}return t};var M=function(e){var t=[],a=e[0];t.push([0]),t.push([0]);for(var r=1;r<e.length;r++)a<e[r]&&(a=e[r]),t.push([r]),t.push([r]);var n=[];for(r=0;r<=a;r++)n.push(0);for(r=0;r<e.length;r++)n[e[r]]++;var s=0;for(r=0;r<n.length;r++)for(;n[r];)e[s]=r,n[r]--,s++,t.push([s-1]),t.push([s-1]),t.push([s-1,e[s-1]]);return t};var D=function(e){var t=[];function a(a){for(;a>0&&e[a-1]>e[a];a--){var r=e[a];e[a]=e[a-1],e[a-1]=r,t.push([a,a-1]),t.push([a,a-1]),t.push([a,e[a],a-1,e[a-1]])}}for(var r=1;r<e.length;r++)e[r-1]>e[r]&&a(r);return t};var x=function(e){var t=[],a=function(e){for(var t=1;t<e.length;t++)if(e[t-1]>e[t])return!1;return!0};function r(e){for(var a,r,n=e.length;n>0;)r=Math.floor(Math.random()*n),a=e[--n],e[n]=e[r],e[r]=a,t.push([n,r]),t.push([n,r]),t.push([n,e[n],r,e[r]]);return e}return function(e){for(var n=!1;!n;)console.log(e),e=r(e),n=a(e);return t}(e)},L=a(70),H=a(71),A=(a(48),a(49),a(50),a(51),[{value:2,label:"Slow"},{value:5,label:"Medium"},{value:8,label:"Fast"}]),B=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={array:[],abar:"25",time:"1200",speed:"5",disabled:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"checkAll",value:function(){for(var e=this,t=document.getElementsByClassName("array-bar"),a=function(a){var r=t[a].style;setTimeout((function(){r.backgroundColor="#24C921",r.color="rgba(0,0,0,1)"}),a*e.state.time/e.state.speed)},r=0;r<t.length;++r)a(r);setTimeout((function(){e.setState({disabled:!1})}),this.state.time/this.state.speed*t.length)}},{key:"resetArray",value:function(){for(var e,t,a=[],r=0;r<this.state.abar;r++)a.push((e=40,t=580,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:a});for(var n=document.getElementsByClassName("array-bar"),s=0;s<a.length;s++){if(n[s])n[s].style.backgroundColor="#ffbf00"}document.getElementById("x").style.width=36*this.state.abar+80+"px"}},{key:"quickSort",value:function(){for(var e=this,t=v(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],4),s=n[0],o=n[1],i=(n[2],n[3]),u=r[s].style,c=r[o].style,h=(r[i].style,a%3===0?"#19D9FD":"#ffbf00");setTimeout((function(){u.backgroundColor=h,c.backgroundColor=h}),a*e.state.time/e.state.speed)}else{var f=Object(l.a)(t[a],4),m=f[0],v=f[1],p=f[2],g=f[3],d=r[m].style,y=r[p].style;setTimeout((function(){r[m].innerHTML=v,r[p].innerHTML=g,d.height="".concat(v,"px"),y.height="".concat(g,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"shellSort",value:function(){for(var e=this,t=E(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],2),f=h[0],m=h[1],v=r[f].style;setTimeout((function(){r[f].innerHTML=m,v.height="".concat(m,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"combSort",value:function(){for(var e=this,t=j(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r);console.log(t)}},{key:"cycleSort",value:function(){for(var e=this,t=O(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r);console.log(t)}},{key:"heapSort",value:function(){for(var e=this,t=y(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"radixSort",value:function(){for(var e=this,t=(this.state.array,T(this.state.array)),a=0,r=0,n=0,s=function(s){var o=document.getElementsByClassName("array-bar");if(s==t.length)setTimeout((function(){e.checkAll()}),s*e.state.time/e.state.speed);else if(a<2*e.state.array.length){var i=Object(l.a)(t[s],1)[0],u=o[i].style,c=s%2===n%2?"#19D9FD":"#ffbf00";setTimeout((function(){u.backgroundColor=c}),s*e.state.time/e.state.speed),a++}else if(r<e.state.array.length){var h=Object(l.a)(t[s],2),f=h[0],m=h[1],v=o[f].style;setTimeout((function(){o[f].innerHTML=m,v.height="".concat(m,"px")}),s*e.state.time/e.state.speed),r++,n++}else{a=1,r=0;var p=Object(l.a)(t[s],1)[0],g=o[p].style,d=s%2===n%2?"#19D9FD":"#ffbf00";setTimeout((function(){g.backgroundColor=d}),s*e.state.time/e.state.speed)}},o=0;o<=t.length;o++)s(o)}},{key:"selectionSort",value:function(){for(var e=this,t=C(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"mergeSort",value:function(){for(var e=this,t=m(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],2),f=h[0],m=h[1],v=r[f].style;setTimeout((function(){r[f].innerHTML=m,v.height="".concat(m,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"insertionSort",value:function(){for(var e=this,t=k(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],2),f=h[0],m=h[1],v=r[f].style;setTimeout((function(){r[f].innerHTML=m,v.height="".concat(m,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"gnomeSort",value:function(){for(var e=this,t=D(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"bogoSort",value:function(){for(var e=this,t=x(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r);console.log(t)}},{key:"bubbleSort",value:function(){for(var e=this,t=g(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a==t.length)setTimeout((function(){e.checkAll()}),a*e.state.time/e.state.speed);else if(a%3!==2){var n=Object(l.a)(t[a],2),s=n[0],o=n[1],i=r[s].style,u=r[o].style,c=a%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){i.backgroundColor=c,u.backgroundColor=c}),a*e.state.time/e.state.speed)}else{var h=Object(l.a)(t[a],4),f=h[0],m=h[1],v=h[2],p=h[3],g=r[f].style,d=r[v].style;setTimeout((function(){r[f].innerHTML=m,r[v].innerHTML=p,g.height="".concat(m,"px"),d.height="".concat(p,"px")}),a*e.state.time/e.state.speed)}},r=0;r<=t.length;r++)a(r)}},{key:"pigeonholeSort",value:function(){for(var e=this,t=M(this.state.array),a=this.state.array,r=function(a){var r=document.getElementsByClassName("array-bar")[Object(l.a)(t[a],1)[0]].style,n=a%2===0?"#19D9FD":"#ffbf00";setTimeout((function(){r.backgroundColor=n}),a*e.state.time/e.state.speed)},n=0;n<2*a.length;n++)r(n);for(var s=function(r){var n=document.getElementsByClassName("array-bar");if(r==t.length)setTimeout((function(){e.checkAll()}),r*e.state.time/e.state.speed);else if((r-2*a.length)%3!==2){var s=Object(l.a)(t[r],1)[0],o=n[s].style,i=(r-2*a.length)%3===0?"#19D9FD":"#ffbf00";setTimeout((function(){o.backgroundColor=i}),r*e.state.time/e.state.speed)}else{var u=Object(l.a)(t[r],2),c=u[0],h=u[1],f=n[c].style;setTimeout((function(){n[c].innerHTML=h,f.height="".concat(h,"px")}),r*e.state.time/e.state.speed)}},o=2*a.length;o<=t.length;o++)s(o)}},{key:"startSorting",value:function(){this.setState({disabled:!this.state.disabled}),"HeapSort"==this.refs.sortingType.value&&this.heapSort(),"BubbleSort"==this.refs.sortingType.value&&this.bubbleSort(),"MergeSort"==this.refs.sortingType.value&&this.mergeSort(),"QuickSort"==this.refs.sortingType.value&&this.quickSort(),"InsertionSort"==this.refs.sortingType.value&&this.insertionSort(),"SelectionSort"==this.refs.sortingType.value&&this.selectionSort(),"RadixSort"==this.refs.sortingType.value&&this.radixSort(),"ShellSort"==this.refs.sortingType.value&&this.shellSort(),"CombSort"==this.refs.sortingType.value&&this.combSort(),"CycleSort"==this.refs.sortingType.value&&this.cycleSort(),"PigeonholeSort"==this.refs.sortingType.value&&this.pigeonholeSort(),"GnomeSort"==this.refs.sortingType.value&&this.gnomeSort()}},{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.state.abar=e.target.value,this.setState(t),this.resetArray()}},{key:"speedChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.state.speed=e.target.value,this.setState(t)}},{key:"render",value:function(){var e,t,a=this,r=this.state.array;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(L.a,{onClick:function(){return a.resetArray()},disabled:this.state.disabled,id:"btn1"},"Generate a new array"),n.a.createElement("select",{className:"browser-default custom-select",ref:"sortingType",id:"btn5",disabled:this.state.disabled,onChange:function(){return a.resetArray()}},n.a.createElement("option",{value:"BubbleSort"},"Bubble Sort"),n.a.createElement("option",{value:"CombSort"},"Comb Sort"),n.a.createElement("option",{value:"CycleSort"},"Cycle Sort"),n.a.createElement("option",{value:"GnomeSort"},"Gnome Sort"),n.a.createElement("option",{value:"HeapSort"},"Heap Sort"),n.a.createElement("option",{value:"InsertionSort"},"Insertion Sort"),n.a.createElement("option",{value:"MergeSort"},"Merge Sort"),n.a.createElement("option",{value:"PigeonholeSort"},"Pigeonhole Sort"),n.a.createElement("option",{value:"QuickSort"},"Quick Sort"),n.a.createElement("option",{value:"RadixSort"},"Radix Sort"),n.a.createElement("option",{value:"SelectionSort"},"Selection Sort"),n.a.createElement("option",{value:"ShellSort"},"Shell Sort")),n.a.createElement("a",null,"Array Bar:"),n.a.createElement(H.a,(e={value:this.state.abar,onChange:function(e,t){console.log(e),a.state.abar=t,a.setState(),a.resetArray()},"aria-labelledby":"continuous-slider",valueLabelDisplay:"on",min:4,max:40,id:"slid1"},Object(i.a)(e,"valueLabelDisplay","auto"),Object(i.a)(e,"disabled",this.state.disabled),e)),n.a.createElement("a",null,"Speed:"),n.a.createElement(H.a,(t={value:this.state.speed,onChange:function(e,t){console.log(e);({})[e.target.name]=e.target.value,a.state.speed=t,a.setState(e)},"aria-labelledby":"continuous-slider",valueLabelDisplay:"on",min:1,max:10,id:"slid2"},Object(i.a)(t,"valueLabelDisplay","auto"),Object(i.a)(t,"marks",A),Object(i.a)(t,"disabled",this.state.disabled),t)),n.a.createElement(L.a,{disabled:this.state.disabled,onClick:function(){return a.startSorting()},id:"btn2"},"Run Sorting"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"array-container",id:"x"},n.a.createElement("div",{className:"tb"}),r.map((function(e,t){return n.a.createElement("div",{className:"array-bar",key:t,style:{height:"".concat(e,"px")}},n.a.createElement("p",null,e))}))),n.a.createElement("div",{className:"arrangement"},n.a.createElement("hr",null)))}}]),a}(n.a.Component);var N=function(){return document.title="Sorting Visualizer",n.a.createElement("div",{className:"App"},n.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.43112019.chunk.js.map