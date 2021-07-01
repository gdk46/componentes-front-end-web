let sidebarListItem = document.querySelectorAll(".sidebar-list-item")
let sizeSidebarListItem = sidebarListItem.length;
      
for(let i = 0; i < sizeSidebarListItem; i++) {
  sidebarListItem[i].onclick = function(){
    let j = 0;
    
    while(j < sizeSidebarListItem){
      sidebarListItem[j++].className = "sidebar-list-item";
    }
    
    sidebarListItem[i].className = "sidebar-list-item item-active";
  }
}

let menuToggle = document.querySelector(".toggle")
let sidebar = document.querySelector(".sidebar")

menuToggle.onclick = function() {
  menuToggle.classList.toggle("toggle-active");
  sidebar.classList.toggle("sidebar-active");
}