          
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fsister.html&psig=AOvVaw2Af65NzBTnfL-FMHK2bfRC&ust=1650673952171000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjv4-a1pvcCFQAAAAAdAAAAABAE.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
var names = ["Family Book", "Partha Das", "Ishana Das", "Mihika Das", "Mahuya Mazumdar"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 4
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}