function travel(r, zipcode) {
    let arr = r.split(",").map(add =>{
      let num = add.match(/^\d+/)[0];
      let zip = add.match(/[A-Z]{2}\s\d{5}$/)[0];
      let str = add.replace(num,"").replace(zip,"").trim();
      return [num, zip, str];
      });
   let addresses = [];
   let numbers = [];
  arr.forEach( set => {
    if(set[1] === zipcode){
      console.log(set);
      addresses.push(set[2]);
      numbers.push(set[0]);
      }
    });
  let res = zipcode + ":" + 
     addresses.join(",") + "/" +
     numbers.join(",");
  return res;
}
