//[name, empNumber, annualSalary, reviewRating]


var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var Employee = function (array) {
	this.name = array[0];
	this.employeeNumber = array[1];
	this.annualSalary = array[2];
	this.reviewRating = array[3];
}

var EvaluatedEmployee = function (employee) {
	
	getSti = function(employee) {
		
		var kudos;
		switch (employee.reviewRating) {
			case 3:
				kudos = 4;
				break;
			case 4:
				kudos = 6;
				break;
			case 5:
				kudos = 10;
				break;
			default:
				kudos = 0;
		}
		
		if (employee.employeeNumber.length == 4) {kudos += 5;}
		if (parseInt(employee.Salary) > 65000) {kudos--;}
		if (kudos > 13) {kudos = 13;}

	return kudos;
	}
	
	this.name = employee.name;
	this.sti = getSti(employee);
	this.annualSalary = Math.round(employee.annualSalary * (1 + .01 * this.sti));
	this.bonus = this.annualSalary - employee.annualSalary;
}

var employees = [new Employee(atticus), new Employee(jem), new Employee(boo), new Employee(scout)];

var evaluate = function (employee) {
	return new EvaluatedEmployee(employee);
}

for (var i = 0; i < employees.length; i++) {
	console.log(evaluate(employees[i]));
}