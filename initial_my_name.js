function initializeNames_A(name) {

  let arrayNames = name.split(' ');
  let retValue = ""
  for (let i = 0; i < arrayNames.length; i++) {
    console.log(arrayNames[i]);

    retValue += (retValue.length > 0 ? " " : "");

    if (i == 0 || i == arrayNames.length - 1) {
      retValue += arrayNames[i];
    } else {
      retValue += arrayNames[i].slice(0, 1) + ".";
    }
  }

  return retValue;
}

function initializeNames_B(name) {
  var n = name.split(" ");
  if (n.length < 3) return name;
  for (i = 1; i < n.length - 1; i++) {
    n[i] = n[i][0] + ".";
  }

  console.log(n);
  return n.join(" ");
}



//assertEqual(initializeNames('Jack Ryan'), 'Jack Ryan', '');
// assertEquals(initializeNames('Lois Mary Lane'), 'Lois M. Lane', '');
// assertEquals(initializeNames('Dimitri'), 'Dimitri', '');
// assertEquals(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis', '');

let name = "Alice Betty Catherine Davis";

console.log(initializeNames_B(name));