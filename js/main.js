    require(
	["dojo/parser", 
	"dijit/form/DropDownButton",
	"dijit/TooltipDialog", 
	"dijit/form/TextBox",
	"dijit/form/Button", 
	"dijit/layout/BorderContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane",
	"dojo/dom", 
	"dojo/on", 
	"dojo/request", 
	"dojo/dom-form",
	"dijit/layout/AccordionContainer",
	"dojo/domReady!"
	],
    function(parser){parser.parse();});
	function LoginForJquery()//???
	{
	 var user=document.getElementById('usernum').value;
	 var pass=document.getElementById('pass').value;
	   $.ajax({
	   type:"post",
	   contentType:"application/json;charset=UTF-8",
	   url:"http://localhost/StuManager/StuManWService.asmx/Logion",
	    data:"{admin:'"+user+"',pwd:'"+pass+"'}",
	   dataType:"json",
	   success:function(result)
	   {
	      if(result.d>0)
		  {
	        ChangeLogStatus(user)
			showfriendinfo()
		  }
		  else{alert("登陆失败")}
	   }
	   });
   };
     //???????
   function showfriendinfo()
   {	 
      $.ajax({
	   type:"post",
	   contentType:"application/json;charset=UTF-8",
	   url:"http://localhost/StuManager/StuManWService.asmx/GetStuAllInfo",
	   dataType:"json",
	   success:function(result)
	   {
            
			var persons = eval("("+result.d+")"); 
			showinfo(persons)
	   }
	   });
      function showinfo(datatable)
	  {
   require([
		"dojox/grid/DataGrid",
		"dojox/grid/cells",
		"dojo/store/Memory",
		"dojo/data/ObjectStore",
		"dojo/_base/array",
		"dojo/_base/lang",
		"dojox/grid/_CheckBoxSelector",
		"dojo/domReady!"
	], function(DataGrid, gridCells, Memory, ObjectStore, baseArray, lang, _CheckBoxSelector){
	var cells = [
				//{ name: "学号", field: "学号", width: "5%" },
				{ name: "姓名", field: "姓名", width: "2%" },
				//{ name: "密码", field: "密码", width: "5%" },
				{ name: "性别", field: "性别", width: "1%" },
				{ name: "星座", field: "星座", width: "2%" },
				{ name: "年龄", field: "年龄", width: "1%" },
				//{ name: "班级", field: "班级", width: "5%" },
                //{ name: "所在班级年份", field: "所在班级年份", width: "5%" },
				//{ name: "生日", field: "生日", width: "5%" },
				//{ name: "电话号码", field: "电话号码", width: "5%" },
				{ name: "家庭住址", field: "家庭住址", width: "8%" },
				//{ name: "QQ号码", field: "QQ号码", width: "5%" },
				{ name: "备注", field: "备注", width: "8%" }
		];
		var objectStore = new Memory({data:datatable});
		var test_store = new ObjectStore({objectStore: objectStore});
		// ???????
		var grid = new DataGrid({
			store: test_store,
			structure: cells,
			rowSelector: "20px",
			"class": "grid"
		}, "grid");
		grid.startup();
		});
   };
   }
   	  function ChangeLogStatus(user)
   {
        require([
    'dojo/dom',
    'dojo/domReady!'
	], function (dom) {
		var greeting = dom.byId('loginbut');
		greeting.innerHTML =user;
	});
   }
  on(dom.byId("logion"), "click", LoginForJquery);