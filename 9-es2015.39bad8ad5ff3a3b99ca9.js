(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{E1sD:function(n,e,t){"use strict";t.r(e);var o=t("aceb"),g=t("vTDv"),r=t("tyNb"),c=t("fXoL");let l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Mb({type:n,selectors:[["ngx-components"]],decls:1,vars:0,template:function(n,e){1&n&&c.Tb(0,"router-outlet")},directives:[r.h],encapsulation:2}),n})();var d=t("Xa2L"),a=t("ofXK");function i(n,e){if(1&n&&(c.Wb(0),c.Jc(1),c.Vb()),2&n){const n=c.kc();c.Eb(1),c.Lc(" ",n.whichProgress(n.progress),"% ")}}function p(n,e){if(1&n&&(c.Wb(0),c.Jc(1),c.Vb()),2&n){const n=c.kc();c.Eb(1),c.Lc(" ",n.whichProgress(n.progress)," ")}}let s=(()=>{class n{constructor(){this.color="#488aff",this.disabledP=!1}whichColor(n){let e=Object.keys(this.degraded);e.forEach((n,t)=>e[t]=+n),e=e.sort((n,e)=>n-e);let t=+n,o=e[0];for(let g of e)if(g<t)o=g;else if(g>=t-1)return this.degraded[o];return this.degraded[o]}whichProgress(n){try{return Math.round(100*+n)/100}catch(e){return n}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Mb({type:n,selectors:[["progress-bar"]],inputs:{color:"color",disabledP:["disable-percentage","disabledP"],progress:"progress",degraded:["color-degraded","degraded"]},decls:4,vars:6,consts:[[1,"progress-outer"],[1,"progress-inner"],[4,"ngIf"]],template:function(n,e){1&n&&(c.Yb(0,"div",0),c.Yb(1,"div",1),c.Hc(2,i,2,1,"ng-container",2),c.Hc(3,p,2,1,"ng-container",2),c.Xb(),c.Xb()),2&n&&(c.Eb(1),c.Gc("width",e.whichProgress(e.progress)+"%")("background-color",null==e.degraded?e.color:e.whichColor(e.progress)),c.Eb(1),c.qc("ngIf",!e.disabledP),c.Eb(1),c.qc("ngIf",e.disabledP))},directives:[a.m],styles:[".progress-outer[_ngcontent-%COMP%] {\n          width: 96%;\n          margin: 10px 2%;\n          padding: 3px;\n          background-color: #f4f4f4;\n          border: 1px solid #dcdcdc;\n          color: #fff;\n          border-radius: 20px;\n          text-align: center;\n        }\n        .progress-inner[_ngcontent-%COMP%] {\n          min-width: 15%;\n          min-height:18px;\n          white-space: nowrap;\n          overflow: hidden;\n          padding: 0px;\n          border-radius: 20px;"]}),n})(),b=(()=>{class n{}return n.\u0275mod=c.Qb({type:n}),n.\u0275inj=c.Pb({factory:function(e){return new(e||n)},imports:[[a.c]]}),n})();const P=[{path:"",component:l,children:[{path:"progress-bar",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Mb({type:n,selectors:[["ngx-progress-bar"]],decls:47,vars:4,consts:[[1,"row"],[1,"col-lg-4","col-md-4"],["mode","indeterminate","diameter","16","strokeWidth","2",1,"progress-spinner"],["mode","determinate","diameter","16","value","75","strokeWidth","2",1,"progress-spinner"],[3,"progress","color"],[3,"progress","disable-percentage"]],template:function(n,e){1&n&&(c.Yb(0,"div",0),c.Yb(1,"div",1),c.Yb(2,"nb-card"),c.Yb(3,"nb-card-header"),c.Jc(4,"Spinner indeterminate Example"),c.Xb(),c.Yb(5,"nb-card-body"),c.Yb(6,"code"),c.Jc(7,' mat-progress-spinner mode="indeterminate" diameter="16" strokeWidth="2" /mat-progress-spinner '),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(8,"div",1),c.Yb(9,"nb-card"),c.Yb(10,"nb-card-header"),c.Jc(11,"Spinner determinate Example"),c.Xb(),c.Yb(12,"nb-card-body"),c.Yb(13,"code"),c.Yb(14,"code"),c.Jc(15,' mat-progress-spinner mode="determinate" diameter="16" value="75" strokeWidth="2" /mat-progress-spinner '),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(16,"div",1),c.Yb(17,"nb-card"),c.Yb(18,"nb-card-header"),c.Jc(19,"Progress bas Example"),c.Xb(),c.Yb(20,"nb-card-body"),c.Yb(21,"code"),c.Jc(22,' progress-bar [progress]="100" [color]="\'#1EAAF1\'" /progress-bar '),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(23,"div",0),c.Yb(24,"div",1),c.Yb(25,"nb-card"),c.Yb(26,"nb-card-header"),c.Jc(27,"Spinner indeterminate"),c.Xb(),c.Yb(28,"nb-card-body"),c.Yb(29,"div"),c.Tb(30,"mat-progress-spinner",2),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(31,"div",1),c.Yb(32,"nb-card"),c.Yb(33,"nb-card-header"),c.Jc(34,"Spinner determinate value 75"),c.Xb(),c.Yb(35,"nb-card-body"),c.Yb(36,"div"),c.Tb(37,"mat-progress-spinner",3),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Yb(38,"div",1),c.Yb(39,"nb-card"),c.Yb(40,"nb-card-header"),c.Jc(41,"Progress bars"),c.Xb(),c.Yb(42,"nb-card-body"),c.Yb(43,"div"),c.Tb(44,"progress-bar",4),c.Xb(),c.Yb(45,"div"),c.Tb(46,"progress-bar",5),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()),2&n&&(c.Eb(44),c.qc("progress",100)("color","#1EAAF1"),c.Eb(2),c.qc("progress",80)("disable-percentage",!0))},directives:[o.j,o.k,o.i,d.a,s],styles:[".ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;padding-left:10px}[dir=rtl][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#d0021b}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=rtl][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=rtl][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=rtl][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}.nb-theme-corporate   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%]{margin-top:1rem}  .progress-outer{border:none!important;background:transparent!important}  .progress-inner{border-radius:0!important;min-height:4px!important}"]}),n})()}]}];let M=(()=>{class n{}return n.\u0275mod=c.Qb({type:n}),n.\u0275inj=c.Pb({factory:function(e){return new(e||n)},imports:[[r.g.forChild(P)],r.g]}),n})();t.d(e,"ExtraComponentsModule",(function(){return O}));const C=[o.d,o.l,o.T,g.a,M,d.b,b];let O=(()=>{class n{}return n.\u0275mod=c.Qb({type:n}),n.\u0275inj=c.Pb({factory:function(e){return new(e||n)},imports:[[...C]]}),n})()}}]);