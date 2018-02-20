define(['ninejs/css/style', 'ninejs/config'], function(style, config) {
var result = {path:"Js/prodoctivity/node_modules/dojox/form/resources/ListInput.css",children:[]};
result.data = ".dojoxListInput {\n\tborder:1px solid #ccc;\n\tbackground-color:#efefef;\n\theight:auto !important;\n\tmax-height:60px;\n\tmin-height:20px;\n\toverflow:auto;\n\tposition:relative\n}\n.dojoxListInput u" + 
 "l {\n\tlist-style-type:none;\n\tmargin:0;\n\tpadding:0\n}\n.dijitDialogCloseIcon {\n\tdisplay:none;\n}\n.dojoxListInputClosable .dijitDialogCloseIcon{\n\tdisplay:inline \n}\n.dojoxListInputClosable {\n" + 
 "\tpadding-right:18px !important\n}\n.dojoxListInputItem {\n\tfloat:left;\n\tmargin:1px 5px 1px 1px;\n\tpadding:0\n}\n.dojoxListInputItem .closeText {\n\tdisplay:none;\n\tposition:absolute;\n}\n.dojoxL" + 
 "istInputItem .dijitDialogCloseIcon{\n\tright:auto !important;\n\tborder:0 !important;\n\tpadding:0!important;\n}\n.dojoxListInputMatch {\n\tborder :1px solid #5EB55E;\n\tbackground-color:#efffef\n}\n." + 
 "dojoxListInputMismatch {\n\tborder :1px solid #B55E5E;\n\tbackground-color:#ffefef\n}\n.dojoxListInput.dojoxListInputFocused {\n\tborder:1px solid #000;\n\tborder-right:1px solid #ccc;\n\tborder-botto" + 
 "m:1px solid #ccc;\n\tbackground-color:#fff\n}\n.dojoxListInputNode {\n\tcursor:text;\n}\n.dojoxListInput .dijitTextBox {\n\tbackground:#efefef !important;\n\n\tborder:0 !important;\n}\n.dojoxListInput" + 
 "Focused .dijitTextBox {\n\tbackground: #fff !important;\n\tborder:0 !important;\n}\n.dojoxListInputItem .dijitTextBox {\n\twidth:auto !important;\n\tborder:0 !important;\n}\n.dojoxListInputNode {\n\tf" + 
 "loat:none;\n}\n.dojoxListInputItemEdited{\n\tdisplay:none !important\n}\n.dojoxListInputItem .dijitInline{\n\tdisplay:inline !important\n}\n"; 
var appUrl = config.ninejs && config.ninejs.applicationUrl;
appUrl = appUrl || config['applicationUrl'];
if (appUrl) { result.path = appUrl + result.path; }

return style.buildStyleObject(result);
});