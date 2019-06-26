var express = require('express');
var app = express();


var entityController=function(req, res){
console.log ("Calling Rest api")
var entity=[
			{empId: 1, empname :'Abc' ,empEmail: 'abc@gmail', empRole: 'Analytic',Salary: 45000},
			{empId: 2, empname :'Pqr' ,empEmail: 'pqr@gmail', empRole: 'System Engineer',Salary: 35000},
			{empId: 3, empname :'Xyz' ,empEmail: 'xyz@gmail', empRole: 'Consultant',Salary: 75000},
			{empId: 4, empname :'Lmno' ,empEmail: 'lmn@gmail', empRole: 'AssistantManager',Salary: 95000},
			];
  res.send(entity);
};

app.get ('/Entity',entityController);
var server = app.listen(8890, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server is running on http://localhost:8890 ",host, port)
  })