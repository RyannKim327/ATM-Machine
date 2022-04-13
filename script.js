$n = ["Mikaella Aloa", "Jose Mari Chan", "Santa Claus"]
$p = ["AlphaNumeric1903", "Merry_X-Mas2000", "Gifts35"]
$i = [12345, 12346, 12347]
$b = [1000, 15000, 99999]
$u = -1
function go(){
	for(let i = 0; i < $i.length; i++){
		if(($("id").value == $i[i]) && ($("pass").value == $p[i]) && ($("name").value == $n[i])){
			$("login").style.display = "none"
			$("acc").style.display = "block"
			$u = i
			break
		}else{
			$("act").textContent = "Something went wrong"
			setTimeout(function(){$("act").textContent = "Account failed"}, 2000)
		}
	}
}
function donAName(){
	let xName
	for(i = 0; i < $i.length; i++){
		if($i[i] == parseInt($("donID").value)){
			setTimeout(function(){$("donName").value = $n[i]},1500)
			break
		}
	}
}
function donGo(){
	if($("donID").value == "" && $("donName").value == "" && $("donAmt").value == "" && $("donPass").value == ""){
		$("donCap").textContent = "Fill up all details first"
		setTimeout(function(){$("donCap").textContent = "Donation Details"},2000)
	}else{
		if($p[$u] == $("donPass").value){
			for(i = 0; i < $i.length; i++){
				if($i[i] == parseInt($("donID").value)){
					bankVal = parseInt($b[$u])
					donVal = parseInt($b[i])
					valBank = parseInt($("donAmt").value) 
					if(valBank < 0){
						valBank *= (-1)
					}
					bankVal -= valBank
					donVal += valBank
					$b[$u] = bankVal
					$b[i] = donVal
					$("don").style.display =  "none"
					$("acc").style.display = "block"
					$("donID").value =  ""
					$("donName").value = ""
					$("donAmt").value =  ""
					$("donPass").value = ""
					break
				}
			}
		}else{
			$("donCap").textContent =  "Something went wrong"
			setTimeout(function(){$("donCap").textContent = "Donation Details"},2000)
		}
	}
}
function donate(){
	$("don").style.display =  "block"
	$("acc").style.display = "none"
}
function deptConfig(){
	if($("amt").value > 0 && $("bank").value != "" && $("obID").value != "" && $("bankPass").value != ""){
		if(confirm("Are you sure you want to procceed this transaction?")){
			$b[$u] += parseInt($("amt").value)
			$("acc").style.display = "block"
			$("dept").style.display = "none"
		}else{
			$("acc").style.display = "block"
			$("dept").style.display = "none"
		}
		$("amt").value = ""
		$("bank").value = ""
		$("obID").value = ""
		$("bankPass").value = ""
	}else{
		$("deptNote").textContent = "Invalid Transaction"
		setTimeout(function(){$("deptNote").textContent = "Deposit to this account"}, 2000)
	}
}
function deposit(){
	$("acc").style.display = "none"
	$("dept").style.display = "block"
}
function balance(){
	alert("Balance: " + $b[$u])
}
function widraw(){
	$("widraw").style.display = "block"
	$("acc").style.display = "none"
}
function inp(){
	if(($("id").value == "")){
		$("act").textContent = "Invalid input"
		setTimeout(function(){$("act").textContent = "Account Details"}, 2000)
	}else{
		$("act").textContent = "Verifying account details"
		for(let j = 0; j < $n.length; j++){
			if($("id").value == $i[j]){
				setTimeout(function(){$("name").value = $n[j]}, 1200)
			}else{
				setTimeout(function(){$("act").textContent = "Account failed"}, 2000)
			}
			break;
		}
	}
}
function logout(){
	$("login").style.display = "block"
	$("acc").style.display = "none"
	$("name").value = ""
	$("pass").value = ""
	$("id").value = ""
	$("act").textContent = "Thank you for the transaction"
	setTimeout(function(){$("act").textContent = "Account Details"}, 2000)
	$u = -1
}
function $(a){
	return document.getElementById(a)
}
document.getElementById("date").textContent = new Date().getFullYear();