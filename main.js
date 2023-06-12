// Filter the students from the class 6th 'A' section from the below array of objects.,

myArr = [
{
studenName: "jack",
studenClass: 6,
studenSection: "a"
},
{
studenName: "tom",
studenClass: 6,
studenSection: "a"
},
{
studenName: "ricky",
studenClass: 6,
studenSection: "b"
},{
studenName: "john",
studenClass: 6,
studenSection: "b"
},{
studenName: "jerry",
studenClass: 6,
studenSection: "a"
},{
studenName: "henry",
studenClass: 6,
studenSection: "b"
},{
studenName: "stephen",
studenClass: 6,
studenSection: "a"
}
]


myArr.filter(function(e){
	console.log(e)
	for(sec in e){
	console.log(`${e[sec]}`)
		if(e.studenSection === "a"){
		document.write(`${sec} ==> ${e[sec]} `)
			document.write("<br>")
			document.write("<br>")
		}
	}
});
