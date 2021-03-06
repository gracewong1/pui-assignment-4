function saveWish(name) {    
      
    sessionStorage.setItem(name, 1);
   }
   
function deleteWish(name) {
   
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
   if (sessionStorage.getItem("cranberryWished") && Number(sessionStorage.getItem("cranberryWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 3 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "><img src='Images/cranberry.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The \"Crank it\" Bun</span>';
      
       //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('cranberryWished')\">Delete</button>";
   
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("buttermilkWished") && Number(sessionStorage.getItem("buttermilkWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/buttermilk.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The Butter n Milk Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('buttermilkWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("originalWished") && Number(sessionStorage.getItem("originalWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/original.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The 100% Original Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('originalWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("veganWished") && Number(sessionStorage.getItem("veganWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/vegan.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  Only the Veganning Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('veganWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("baconWished") && Number(sessionStorage.getItem("baconWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/bacon.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The Baconator Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('baconWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("carrotcakeWished") && Number(sessionStorage.getItem("carrotcakeWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/carrotcake.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The Diamond Carrot Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('carrotcakeWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("bdaycakeWished") && Number(sessionStorage.getItem("bdaycakeWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/birthdaycake.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The Birthday Babe Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('bdaycakeWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("exgfWished") && Number(sessionStorage.getItem("exgfWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/glutenfree.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The B-unwanted Ex-GF</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('exgfWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("caramelWished") && Number(sessionStorage.getItem("caramelWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/caramelpecan.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The Nutty Hubby Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('caramelWished')\">Delete</button>";
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("rhubarbWished") && Number(sessionStorage.getItem("rhubarbWished")) > 0) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      var cellDeleteWishlist = row.insertCell(2);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<img src='Images/rhubarb.png' height=100 width=100 alt=\"\">";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">  The Nutty Hubby Bun</span>';
      
      //delete on click
	 cellDeleteWishlist.innerHTML = "<button type='button' onclick=\"deleteWish('rhubarbWished')\">Delete</button>";
   }
}
