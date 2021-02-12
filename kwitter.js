function add_User(){
    get_user=document.getElementById("username").value;
    localStorage.setItem("user_name",get_user);
    window.location="kwitter_room.html";
}