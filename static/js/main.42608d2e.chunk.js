(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={leaveFeedbackBtn:"FeedbackOptions_leaveFeedbackBtn__xTt5k"}},function(e,t,a){e.exports={title:"Section_title__1MUQM"}},function(e,t,a){e.exports={buttonsContainer:"App_buttonsContainer__1A_7A"}},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=a(3),u=a(4),i=a(5),s=a(10),d=a(9),b=(a(16),function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",a),c.a.createElement("p",null,"Bad: ",n),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Positive feedback: ",o,"% "))}),m=a(6),v=a.n(m),f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object.keys(t).map((function(e){var t=e[0].toLocaleUpperCase()+e.slice(1);return c.a.createElement("button",{className:v.a.leaveFeedbackBtn,key:e,onClick:function(){return a(e)}},t)}))},p=a(7),k=a.n(p),E=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:k.a.title},t),a)},g=function(){return c.a.createElement("h3",null,"No feedback given")},h=a(8),F=a.n(h),_=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=Object.values(e.state).reduce((function(e,t){return e+t}));return Math.round(100*e.state.good/t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),a=this.state,n=a.neutral,r=a.good,o=a.bad;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{title:"Please leave feedback"},c.a.createElement("div",{className:F.a.buttonsContainer},c.a.createElement(f,{options:this.state,onLeaveFeedback:this.leaveFeedback}))),c.a.createElement(E,{title:"Statistics"},e?c.a.createElement(b,{good:r,neutral:n,bad:o,total:e,positivePercentage:t}):c.a.createElement(g,null)))}}]),a}(n.Component);a(17);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.42608d2e.chunk.js.map