function saveClickWishlist(name) {    
   if (sessionStorage.getItem(name)) { 
      sessionStorage.setItem(name);
   }
}

function createProductTableWishlist(){
   var orderedProductsTblBodyWishlist=document.getElementById("orderedProductsTblBodyWishlist");
   
   //ensure we delete all previously added rows from ordered products table
   while(orderedProductsTblBodyWishlist.rows.length>0) {
      orderedProductsTblBodyWishlist.deleteRow(0);
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("caramel")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcaramel.html'><img src='Images/caramelpecan.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Nutty Hubby Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("buttermilk")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailbuttermilk.html'><img src='Images/buttermilk.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Butter n Milk Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("original")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailorignial.html'><img src='Images/original.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe 100% Original Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("vegan")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailvegan.html'><img src='Images/vegan.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspOnly the Veganning Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("bacon")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailbacon.html'><img src='Images/bacon.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Baconator Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("carrotcake")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcarrotcake.html'><img src='Images/carrotcake.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Diamond Carrot Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("caramel")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetaillemon.html'><img src='Images/lemonlavendar.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Sweet n Sour Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("bdaycake")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailbdaycake.html'><img src='Images/birthdaycake.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Birthday Babe Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("exgf")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailgf.html'><img src='Images/glutenfree.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe B-unwanted Ex-GF</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("caramel")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcaramel.html'><img src='Images/caramelpecan.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Nutty Hubby Bun</span>';
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("rhubarb")) {
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 2 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailrhubarb.html'><img src='Images/rhubarb.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe Nutty Hubby Bun</span>';
   }
}
      