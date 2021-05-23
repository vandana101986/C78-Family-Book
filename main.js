var images = ["family.png","me.jpg","father.jpg", "mother.jpg" , "sister.jpg", "brother.png"];
var names = ["My Family Book","Me..!!", "My Father", "My Mother ", "My sister", "My Brother"];
var i = 0;

function next()
{
    i++;
    
    if(i > 5)
    {
        i = 0;
    }
    
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML =  names[i];
}
