(this["webpackJsonpinitiative-tracker"]=this["webpackJsonpinitiative-tracker"]||[]).push([[0],{24:function(e,t,a){},30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),c=a.n(r),s=(a(35),a(36),a(21),a(29)),l=a(16),o=a(7),d=a(13),u=a(14),m=a(17),v=a(15),g=a(6),h=a(18),E=(a(24),a(9)),b=a(10),k=a(12),f=a(19),L=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).state={isLocked:!1,init:0},e.setLocked=e.setLocked.bind(Object(g.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setLocked",value:function(){var e=!this.state.isLocked;this.setState({isLocked:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(E.a.Row,null,i.a.createElement(k.a,{className:"mb-3"},i.a.createElement(k.a.Prepend,null,i.a.createElement(k.a.Text,{className:"drag-icon",draggable:!0,onDragStart:function(t){return e.props.onDragStart(t,e.props.index)},onDragEnd:this.props.onDragEnd},i.a.createElement(f.a,{icon:"bars"}))),i.a.createElement(E.a.Control,{disabled:this.state.isLocked,placeholder:"Character"}),i.a.createElement(E.a.Control,{disabled:this.state.isLocked,placeholder:"Initiative"}),i.a.createElement(k.a.Append,null,i.a.createElement(b.a,{onClick:this.setLocked},this.state.isLocked?i.a.createElement(f.a,{icon:"unlock"}):i.a.createElement(f.a,{icon:"lock"})))))}}]),t}(i.a.Component),p=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).onDragOver=function(t){var a=e.state.initList[t];if(e.draggedItem!==a){var n=e.state.initList.filter((function(t){return t!==e.draggedItem}));n.splice(t,0,e.draggedItem),e.setState({initList:n})}},e.onDragStart=function(t,a){e.draggedItem=e.state.initList[a],t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.target.closest(".tracker-single")),t.dataTransfer.setDragImage(t.target.closest(".tracker-single"),20,20)},e.onDragEnd=function(){e.draggedIdx=null},e.nextPlayer=function(){e.initiativeList=e.state.initList;var t=e.initiativeList.shift();e.initiativeList.push(t),e.setState({initList:e.initiativeList})},e.initiativeList=[-1],e.count=0,e.state={initList:e.initiativeList},e.addNewInitiative=e.addNewInitiative.bind(Object(g.a)(e)),e.clearAll=e.clearAll.bind(Object(g.a)(e)),e.onDragStart=e.onDragStart.bind(Object(g.a)(e)),e.onDragEnd=e.onDragEnd.bind(Object(g.a)(e)),e.nextPlayer=e.nextPlayer.bind(Object(g.a)(e)),e.onDragOver=e.onDragOver.bind(Object(g.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"addNewInitiative",value:function(){this.initiativeList.push(this.count++),this.setState({initList:this.initiativeList})}},{key:"clearAll",value:function(){this.initiativeList=[],this.setState({initList:this.initiativeList})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"tracker"},i.a.createElement(l.a,null,i.a.createElement(o.a,null,i.a.createElement(E.a,{className:"tracker-form"},i.a.createElement("ul",{class:"initiative-list"},this.state.initList.map((function(t,a){return i.a.createElement("li",{key:t,className:"tracker-single",onDragOver:function(){return e.onDragOver(a)}},i.a.createElement(L,{index:a,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd}))}))),i.a.createElement("div",{class:"utility-buttons"},i.a.createElement(b.a,{variant:"secondary",className:"add-new",onClick:this.addNewInitiative},"Add New Initiative"),i.a.createElement(b.a,{variant:"danger",className:"clear-all",onClick:this.clearAll},"Clear All"),i.a.createElement(b.a,{variant:"success",className:"next-player",onClick:this.nextPlayer},"Next Player"))))))}}]),t}(i.a.Component),O=a(11),D=a(20);O.b.add(D.a,D.b,D.c);var j=function(){return i.a.createElement("div",{className:"App-header"},i.a.createElement(s.a,null,i.a.createElement(l.a,null,i.a.createElement(o.a,null,"Initiative Tracker",i.a.createElement("hr",null),i.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7b2373f2.chunk.js.map