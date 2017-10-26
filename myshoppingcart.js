var Price = {caramel:"4.25", cranberry:"4.25", rhubarb:"4.25", carrotcake:"4.25", exgf:"4.25", vegan:"4.25", buttermilk:"4.25", lemon:"4.25", walnut:"4.25", bacon:"4.25", pumpkinspice:"4.25", bdaycake:"4.25", original:"4.25"};

function saveClick(name) {    
   if (sessionStorage.getItem(name)) { 
      var productQuantity = Number(sessionStorage.getItem(name)) + 1;
      sessionStorage.setItem(name, productQuantity);
   }
   else {
      sessionStorage.setItem(name, 1);
   }
}

function deleteOrder(name) {
   // reset sessionStorage
   sessionStorage.setItem(name, 0);
   
   // create table again
   createProductTable();
}

function createProductTable(){
   var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
   
   //ensure we delete all previously added rows from ordered products table
   while(orderedProductsTblBody.rows.length>0) {
      orderedProductsTblBody.deleteRow(0);
   }

   //variavle for counting total for cart
   var cart_total_price=0;

   //check the sessionStorage for each product
   if (sessionStorage.getItem("caramel") && Number(sessionStorage.getItem("caramel")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);

      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailcaramel.html'><img src='Images/caramelpecan.png' height=100 width=100 alt=\"\">";
      cellDescription.innerHTML = '<span class="cartdescription">&nbspThe Nutty Hubby Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='caramel-increase' onclick=\"increase('caramel')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='caramel-quantity' size=3 value=" + sessionStorage.getItem("caramel") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='caramel-decrease' onclick=\"decrease('caramel')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("caramel")) * parseFloat(Price["caramel"]);
      cellSubTotal.innerHTML = "<input type='text', id='caramel-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('caramel')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }

   if (sessionStorage.getItem("cranberry") && Number(sessionStorage.getItem("cranberry")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailcranberry.html'><img src='Images/cranberry.png' height=100 width=100>";
      cellDescription.innerHTML = '<span class="cartdescription">&nbspThe \"Crank It\" Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='cranberry-increase' onclick=\"increase('cranberry')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='cranberry-quantity' size=3 value=" + sessionStorage.getItem("cranberry") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='cranberry-decrease' onclick=\"decrease('cranberry')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("cranberry")) * parseFloat(Price["cranberry"]);
      cellSubTotal.innerHTML = "<input type='text', id='cranberry-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('cranberry')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("rhubarb") && Number(sessionStorage.getItem("rhubarb")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailrhubarb.html'><img src='Images/strawberryrhubarb.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Berry Bland Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='rhubarb-increase' onclick=\"increase('rhubarb')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='rhubarb-quantity' size=3 value=" + sessionStorage.getItem("rhubarb") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='rhubarb-decrease' onclick=\"decrease('rhubarb')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("rhubarb")) * parseFloat(Price["rhubarb"]);
      cellSubTotal.innerHTML = "<input type='text', id='rhubarb-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('rhubarb')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("carrotcake") && Number(sessionStorage.getItem("carrotcake")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailcarrotcake.html'><img src='Images/carrotcake.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Diamond Carrot Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='carrotcake-increase' onclick=\"increase('carrotcake')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='carrotcake-quantity' size=3 value=" + sessionStorage.getItem("carrotcake") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='carrotcake-decrease' onclick=\"decrease('carrotcake')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("carrotcake")) * parseFloat(Price["carrotcake"]);
      cellSubTotal.innerHTML = "<input type='text', id='carrotcake-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('carrotcake')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("exgf") && Number(sessionStorage.getItem("exgf")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailgf.html'><img src='Images/glutenfree.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe B-unwanted Ex-GF</span>';
      cellIncrease.innerHTML = "<button type='button' id='exgf-increase' onclick=\"increase('exgf')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='exgf-quantity' size=3 value=" + sessionStorage.getItem("exgf") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='exgf-decrease' onclick=\"decrease('exgf')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("exgf")) * parseFloat(Price["exgf"]);
      cellSubTotal.innerHTML = "<input type='text', id='exgf-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('exgf')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("vegan") && Number(sessionStorage.getItem("vegan")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailvegan.html'><img src='Images/vegan.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspOnly The Veganning Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='vegan-increase' onclick=\"increase('vegan')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='vegan-quantity' size=3 value=" + sessionStorage.getItem("vegan") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='vegan-decrease' onclick=\"decrease('vegan')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("vegan")) * parseFloat(Price["vegan"]);
      cellSubTotal.innerHTML = "<input type='text', id='vegan-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('vegan')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("buttermilk") && Number(sessionStorage.getItem("buttermilk")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailbuttermilk.html'><img src='Images/buttermilk.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Butter n Milk Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='buttermilk-increase' onclick=\"increase('buttermilk')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='buttermilk-quantity' size=3 value=" + sessionStorage.getItem("buttermilk") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='buttermilk-decrease' onclick=\"decrease('buttermilk')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("buttermilk")) * parseFloat(Price["buttermilk"]);
      cellSubTotal.innerHTML = "<input type='text', id='buttermilk-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('buttermilk')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("lemon") && Number(sessionStorage.getItem("lemon")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetaillemon.html'><img src='Images/lemonlavendar.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Sweet n Sour Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='lemon-increase' onclick=\"increase('lemon')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='lemon-quantity' size=3 value=" + sessionStorage.getItem("lemon") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='lemon-decrease' onclick=\"decrease('lemon')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("lemon")) * parseFloat(Price["lemon"]);
      cellSubTotal.innerHTML = "<input type='text', id='lemon-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('lemon')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("walnut") && Number(sessionStorage.getItem("walnut")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailwalnut.html'><img src='Images/walnut.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Nutty Hunny Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='walnut-increase' onclick=\"increase('walnut')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='walnut-quantity' size=3 value=" + sessionStorage.getItem("walnut") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='walnut-decrease' onclick=\"decrease('walnut')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("walnut")) * parseFloat(Price["walnut"]);
      cellSubTotal.innerHTML = "<input type='text', id='walnut-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('walnut')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }


   if (sessionStorage.getItem("bacon") && Number(sessionStorage.getItem("bacon")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailbacon.html'><img src='Images/bacon.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Baconator Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='bacon-increase' onclick=\"increase('bacon')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='bacon-quantity' size=3 value=" + sessionStorage.getItem("bacon") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='bacon-decrease' onclick=\"decrease('bacon')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("bacon")) * parseFloat(Price["bacon"]);
      cellSubTotal.innerHTML = "<input type='text', id='bacon-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('bacon')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }

   if (sessionStorage.getItem("pumpkinspice") && Number(sessionStorage.getItem("pumpkinspice")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailpumpkinspice.html'><img src='Images/pumpkinspice.png' height=100 width=100>";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe Pumpkin Spice Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='pumpkinspice-increase' onclick=\"increase('pumpkinspice')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='pumpkinspice-quantity' size=3 value=" + sessionStorage.getItem("pumpkinspice") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='pumpkinspice-decrease' onclick=\"decrease('pumpkinspice')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("pumpkinspice")) * parseFloat(Price["pumpkinspice"]);
      cellSubTotal.innerHTML = "<input type='text', id='pumpkinspice-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('pumpkinspice')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }
 
  if (sessionStorage.getItem("bdaycake") && Number(sessionStorage.getItem("bdaycake")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailbdaycake.html'><img src='Images/birthdaycake.png' height=100 width=100>";
      cellDescription.innerHTML = '<span class="cartdescription">&nbspThe Birthday Babe Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='bdaycake-increase' onclick=\"increase('bdaycake')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='bdaycake-quantity' size=3 value=" + sessionStorage.getItem("bdaycake") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='bdaycake-decrease' onclick=\"decrease('bdaycake')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("bdaycake")) * parseFloat(Price["bdaycake"]);
      cellSubTotal.innerHTML = "<input type='text', id='bdaycake-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('bdaycake')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }

   if (sessionStorage.getItem("original") && Number(sessionStorage.getItem("original")) > 0) {
      //add new row      
      var row=orderedProductsTblBody.insertRow();
      
      //create 6 cells for product properties 
      var cellImg = row.insertCell(0);
      var cellDescription = row.insertCell(1);
      var cellIncrease = row.insertCell(2);
      var cellQuantity = row.insertCell(3);
      var cellDecrease = row.insertCell(4);
      var cellSubTotal = row.insertCell(5);
      var cellDelete = row.insertCell(6);
      
      //fill cells with values
      cellImg.innerHTML = "<a href='productdetailoriginal.html'><img src='Images/original.png' height=100 width=100 alt=\"\">";
      cellDescription.innerHTML ='<span class="cartdescription">&nbspThe 100% Original Bun</span>';
      cellIncrease.innerHTML = "<button type='button' id='original-increase' onclick=\"increase('original')\">+</button>";

      //get quantity from sessionStorage
      cellQuantity.innerHTML = "<input type='text' id='original-quantity' size=3 value=" + sessionStorage.getItem("original") + " readonly>";

      cellDecrease.innerHTML = "<button type='button' id='original-decrease' onclick=\"decrease('original')\">-</button>";

      //calculate subtotal for a product
      var subtotal = Number(sessionStorage.getItem("original")) * parseFloat(Price["original"]);
      cellSubTotal.innerHTML = "<input type='text', id='original-total' size=10 value=" + subtotal.toFixed(2) + " readonly>";

      cellDelete.innerHTML = "<button type='button' onclick=\"deleteOrder('original')\">Delete</button>";

      // add to cart_total_price
      cart_total_price = parseFloat(cart_total_price) + parseFloat(subtotal);
   }

   // update total for cart
   document.getElementById("grand-total").value = cart_total_price.toFixed(2);
}


function increase(name) { 
   var quantityId = name + "-quantity";
   var totalId = name + "-total";
   var unitPrice = Price[name];

   // increase quantity by 1, also update sessionStorage
   document.getElementById(quantityId).value = Number(document.getElementById(quantityId).value) + 1;
   sessionStorage.setItem(name, document.getElementById(quantityId).value);
   
   // increase subtotal by unit price
   var subtotal = parseFloat(document.getElementById(totalId).value) + parseFloat(unitPrice);
   document.getElementById(totalId).value = subtotal.toFixed(2);

   // increase cart total by unit price
   var cart_total_price = parseFloat(document.getElementById("grand-total").value) + parseFloat(unitPrice);
   document.getElementById("grand-total").value = cart_total_price.toFixed(2);
}

function decrease(name) {
   var quantityId = name + "-quantity";
   var totalId = name + "-total";
   var unitPrice = Price[name];

   if (Number(document.getElementById(quantityId).value) > 0)
   {
      // decrease quantity by 1, also update sessionStorage
      document.getElementById(quantityId).value = Number(document.getElementById(quantityId).value) - 1;
      sessionStorage.setItem(name, document.getElementById(quantityId).value);
      
      // decrease total by unit price
      var subtotal = parseFloat(document.getElementById(totalId).value) - parseFloat(unitPrice);
      document.getElementById(totalId).value = subtotal.toFixed(2);
      
      // decrease cart total by unit price
      var cart_total_price = parseFloat(document.getElementById("grand-total").value) - parseFloat(unitPrice);
      document.getElementById("grand-total").value = cart_total_price.toFixed(2);
   }
}
