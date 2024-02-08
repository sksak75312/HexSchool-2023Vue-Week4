import{s as m}from"./sweetalert2.all-HcawA3vp.js";import{_ as v,o as l,c as r,a as t,t as h,b as p,v as u,d as w,n as b,w as g,F as D,r as x,p as U,e as V,f as k,g as M,h as y}from"./index-Q1zUJtak.js";const S={props:["currentProduct"],data(){return{tempData:{}}},watch:{currentProduct(){this.tempData={...this.currentProduct}}},methods:{sendData(){this.$emit("seed-data",this.tempData)}}},I={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},L={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},E={id:"productModalLabel",class:"modal-title"},A={key:0},N={key:1},H=t("button",{type:"button",class:"btn-close text-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},W={class:"row"},j={class:"col-sm-4"},z={class:"mb-2"},F={class:"mb-3"},O=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),q=["src"],G=t("div",null,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")],-1),J={class:"col-sm-8"},K={class:"mb-3"},Q=t("label",{for:"title",class:"form-label"},"標題",-1),X={class:"row"},Y={class:"mb-3 col-md-6"},Z=t("label",{for:"category",class:"form-label"},"分類",-1),tt={class:"mb-3 col-md-6"},et=t("label",{for:"unit",class:"form-label"},"單位",-1),ot={class:"row"},st={class:"mb-3 col-md-6"},nt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),at={class:"mb-3 col-md-6"},it=t("label",{for:"price",class:"form-label"},"售價",-1),lt=t("hr",null,null,-1),rt={class:"mb-3"},ct=t("label",{for:"description",class:"form-label"},"產品描述",-1),dt={class:"mb-3"},pt=t("label",{for:"content",class:"form-label"},"說明內容",-1),ut={class:"mb-3"},mt={class:"form-check"},ht=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),_t={class:"modal-footer"},bt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function gt(s,e,a,c,o,i){return l(),r("div",I,[t("div",T,[t("div",L,[t("div",B,[t("h5",E,[o.tempData.id?(l(),r("span",N,"編輯: "+h(a.currentProduct.title),1)):(l(),r("span",A,"新增產品"))]),H]),t("div",R,[t("div",W,[t("div",j,[t("div",z,[t("div",F,[O,p(t("input",{type:"text",class:"form-control",id:"imageUrl",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=n=>o.tempData.imageUrl=n)},null,512),[[u,o.tempData.imageUrl]])]),t("img",{class:"img-fluid",src:o.tempData.imageUrl,alt:""},null,8,q)]),G,t("div",null,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[1]||(e[1]=n=>o.tempData.imageUrl="")}," 刪除圖片 ")])]),t("div",J,[t("div",K,[Q,p(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=n=>o.tempData.title=n)},null,512),[[u,o.tempData.title]])]),t("div",X,[t("div",Y,[Z,p(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=n=>o.tempData.category=n)},null,512),[[u,o.tempData.category]])]),t("div",tt,[et,p(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=n=>o.tempData.unit=n)},null,512),[[u,o.tempData.unit]])])]),t("div",ot,[t("div",st,[nt,p(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[5]||(e[5]=n=>o.tempData.origin_price=n)},null,512),[[u,o.tempData.origin_price,void 0,{number:!0}]])]),t("div",at,[it,p(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[6]||(e[6]=n=>o.tempData.price=n)},null,512),[[u,o.tempData.price,void 0,{number:!0}]])])]),lt,t("div",rt,[ct,p(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=n=>o.tempData.description=n)},`
                `,512),[[u,o.tempData.description]])]),t("div",dt,[pt,p(t("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[8]||(e[8]=n=>o.tempData.content=n)},`
                `,512),[[u,o.tempData.content]])]),t("div",ut,[t("div",mt,[p(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[9]||(e[9]=n=>o.tempData.is_enabled=n)},null,512),[[w,o.tempData.is_enabled]]),ht])])])])]),t("div",_t,[bt,t("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=(...n)=>i.sendData&&i.sendData(...n))}," 確認 ")])])])],512)}const ft=v(S,[["render",gt]]),vt={props:["paginationData"],data(){return{pagination:{},currentPageStyle:["active","disabledLink"]}},methods:{clickPage(s){let e=s;s==="next"?e=this.pagination.current_page+1:s==="pre"&&(e=this.pagination.current_page-1),this.$emit("change-page",e)}},watch:{paginationData(s){this.pagination=s}}},C=s=>(U("data-v-d7df7d3f"),s=s(),V(),s),Pt={"aria-label":"Page navigation"},kt={class:"pagination justify-content-center"},yt={class:"page-item"},Dt=C(()=>t("span",{"aria-hidden":"true"},"«",-1)),xt=[Dt],Ct=["onClick"],$t={class:"page-item"},wt=C(()=>t("span",{"aria-hidden":"true"},"»",-1)),Ut=[wt];function Vt(s,e,a,c,o,i){return l(),r("nav",Pt,[t("ul",kt,[t("li",yt,[t("a",{class:b(["page-link",{disabled:!o.pagination.has_pre}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=g(n=>i.clickPage("pre"),["prevent"]))},xt,2)]),(l(!0),r(D,null,x(o.pagination.total_pages,n=>(l(),r("li",{class:"page-item",key:n},[t("a",{class:b(["page-link",n===o.pagination.current_page?o.currentPageStyle:""]),href:"#",onClick:g(P=>i.clickPage(n),["prevent"])},h(n),11,Ct)]))),128)),t("li",$t,[t("a",{class:b(["page-link",{disabled:!o.pagination.has_next}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=g(n=>i.clickPage("next"),["prevent"]))},Ut,2)])])])}const Mt=v(vt,[["render",Vt],["__scopeId","data-v-d7df7d3f"]]);var St={VITE_API:"https://ec-course-api.hexschool.io/",VITE_PATH:"eerovuelive",BASE_URL:"/HexSchool-2023Vue-Week4/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const It={title:"是否要刪除產品",icon:"warning",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消",reverseButtons:!0},{VITE_API:_,VITE_PATH:f}=St,Tt={data(){return{productsList:[],paginationData:{},currentProduct:null,currentPage:1,state:null,modal:null}},methods:{postCheckUser(){var e;const s=(e=document.cookie.split("; ").find(a=>a.startsWith("homeWork")))==null?void 0:e.split("=")[1];this.$http.defaults.headers.common.Authorization=s,this.$http.post(`${_}v2/api/user/check`,null).then(()=>{this.getProducts()}).catch(a=>{const{message:c}=a.response.data;m.fire({title:c,icon:"error"}),this.$router.push("/")})},getProducts(){this.$http.get(`${_}v2/api/${f}/admin/products/?page=${this.currentPage}`).then(s=>{this.paginationData=s.data.pagination,this.productsList=s.data.products}).catch(s=>{const{message:e}=s.response.data;m.fire({title:e,icon:"error"}),this.$router.go(-1)})},updateProduct(s){const e=`v2/api/${f}/admin/product/${s.id?s.id:""}`;this.$http[this.state](`${_}${e}`,{data:s}).then(a=>{const{message:c}=a.data;this.getProducts(),m.fire({title:c,icon:"success"}),this.modal.hide()}).catch(()=>{m.fire({title:"請確實輸入資料",icon:"error"})})},deleteProduct(s){m.fire(It).then(e=>{e.isConfirmed&&this.$http.delete(`${_}v2/api/${f}/admin/product/${s}`).then(a=>{const{message:c}=a.data;this.getProducts(),m.fire({title:c,icon:"success"})}).catch(a=>{const{message:c}=a.response.data;m.fire({title:c,icon:"error"})})})},openModal(s){s?(this.currentProduct={...s},this.state="put"):(this.currentProduct={},this.state="post"),this.modal.show()},changePage(s){this.currentPage=s,this.getProducts()}},mounted(){this.postCheckUser(),this.modal=new this.$bs.Modal(this.$refs.modal.$el)},components:{ProductModal:ft,PaginationComponent:Mt}},Lt={class:"container mt-5"},Bt={class:"d-flex justify-content-between"},Et={class:"table table-bordered text-center align-middle"},At=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"產品名稱"),t("th",{scope:"col"},"產品類別"),t("th",{scope:"col"},"原價"),t("th",{scope:"col"},"售價"),t("th",{scope:"col"},"是否啟用"),t("th",{scope:"col"},"編輯")])],-1),Nt={key:0,class:"text-primary"},Ht={key:1,class:"text-danger"},Rt=["onClick"],Wt=["onClick"];function jt(s,e,a,c,o,i){const n=k("PaginationComponent"),P=k("ProductModal");return l(),r("div",Lt,[t("h2",Bt,[M(" 產品列表 "),t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=d=>i.openModal(null))}," 建立新的產品 ")]),t("table",Et,[At,t("tbody",null,[(l(!0),r(D,null,x(o.productsList,d=>(l(),r("tr",{key:d.id},[t("th",null,h(d.title),1),t("td",null,h(d.category),1),t("td",null,h(d.origin_price),1),t("td",null,h(d.price),1),t("td",null,[d.is_enabled?(l(),r("span",Nt,"啟用")):(l(),r("span",Ht,"未啟用"))]),t("td",null,[t("button",{type:"button",class:"btn btn-primary me-3",onClick:$=>i.openModal(d)}," 編輯 ",8,Rt),t("button",{type:"button",class:"btn btn-danger",onClick:$=>i.deleteProduct(d.id)}," 刪除 ",8,Wt)])]))),128))])]),y(n,{"pagination-data":o.paginationData,onChangePage:i.changePage},null,8,["pagination-data","onChangePage"]),y(P,{"current-product":o.currentProduct,ref:"modal",onSeedData:i.updateProduct},null,8,["current-product","onSeedData"])])}const Ot=v(Tt,[["render",jt]]);export{Ot as default};
