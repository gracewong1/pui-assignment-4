function saveWish(name) {     
    sessionStorage.setItem(name, 1);
   }
   
   createProductTableWishlist();
}

function createProductTableWishlist(){
   var orderedProductsTblBodyWishlist=document.getElementById("orderedProductsTblBodyWishlist");
   
   //ensure we delete all previously added rows from ordered products table
   while(orderedProductsTblBodyWishlist.rows.length>0) {
      orderedProductsTblBodyWishlist.deleteRow(0);
   }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("cranberryWished")) && Number(sessionStorage.getItem("cranberryWished")) > 0{
      //add new row      
      var row=orderedProductsTblBodyWishlist.insertRow();
      
      //create 3 cells for product properties 
      var cellImgWishlist = row.insertCell(0);
      var cellDescriptionWishlist = row.insertCell(1);
      
      //fill cells with values
      cellImgWishlist.innerHTML = "<a href='productdetailcranberry.html'><img src='Images/cranberry.png' height=100 width=100>";
      cellDescriptionWishlist.innerHTML = '<span class="wishlistdescription">&nbsp&nbspThe \"Crank it\" Bun</span>';
    }
   
   //check the sessionStorage for each product
   if (sessionStorage.getItem("buttermilkWished")) && Number(sessionStorage.getItem("buttermilkWished")) > 0{
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
   if (sessionStorage.getItem("originalWished")) && Number(sessionStorage.getItem("originalWished")) > 0{
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
   if (sessionStorage.getItem("veganWished")) && Number(sessionStorage.getItem("veganWished")) > 0{
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
   if (sessionStorage.getItem("baconWished")) && Number(sessionStorage.getItem("baconWished")) > 0{
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
   if (sessionStorage.getItem("carrotcakeWished")) && Number(sessionStorage.getItem("carrotcakeWished")) > 0{
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
   if (sessionStorage.getItem("bdaycakeWished")) && Number(sessionStorage.getItem("bdaycakeWished")) > 0{
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
   if (sessionStorage.getItem("exgfWished")) && Number(sessionStorage.getItem("exgfWished")) > 0{
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
   if (sessionStorage.getItem("caramelWished")) && Number(sessionStorage.getItem("caramelWished")) > 0{
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
   if (sessionStorage.getItem("rhubarbWished")) && Number(sessionStorage.getItem("rhubarbWished")) > 0{
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
