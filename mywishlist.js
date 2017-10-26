function saveWish(name) {    
   var name = name + "Wished"; 
      
    sessionStorage.setItem(name, 1);
   }
   
function deleteWish(name) {
   var dataName = name + "Wished";
   
    sessionStorage.setItem(name, 0); // use 0 to indicate deleted
   
   createProductTableWishlist();
}

function createProductTableWishlist(){
   var orderedProductsTblBodyWishlist=document.getElementById("orderedProductsTblBodyWishlist");
   
   //ensure we delete all previously added rows from ordered products table
   while(orderedProductsTblBodyWishlist.rows.length>0) {
      orderedProductsTblBodyWishlist.deleteRow(0);
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("cranberryWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 3 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcranberry.html'><img src='Images/cranberry.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe \"Crank it\" Bun</span>';
      
       //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('cranberryWished')\">Delete</button>";
   
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("buttermilkWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailbuttermilk.html'><img src='Images/buttermilk.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Butter n Milk Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('buttermilkWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("originalWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailorignial.html'><img src='Images/original.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe 100% Original Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('originalWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("veganWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailvegan.html'><img src='Images/vegan.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspOnly the Veganning Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('veganWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("baconWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailbacon.html'><img src='Images/bacon.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Baconator Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('baconWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("carrotcakeWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcarrotcake.html'><img src='Images/carrotcake.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Diamond Carrot Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('carrotcakeWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("bdaycakeWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailbdaycake.html'><img src='Images/birthdaycake.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Birthday Babe Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('bdaycakeWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("exgfWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailgf.html'><img src='Images/glutenfree.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe B-unwanted Ex-GF</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('exgfWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("caramelWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcaramel.html'><img src='Images/caramelpecan.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Nutty Hubby Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('caramelWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("rhubarbWished")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailrhubarb.html'><img src='Images/rhubarb.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Nutty Hubby Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('rhubarbWished')\">Delete</button>";
   }
}
