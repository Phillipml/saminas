function wppCaller(){
    window.open('https://api.whatsapp.com/send?phone==5537999038892&text=Olá, Saminas! Estou entrando em contato através do site!');
}
function instaCaller(){
    window.open('https://www.instagram.com/saminasprodutosparaceramicas/');
}
function faceCaller(){
    window.open('https://www.facebook.com/saminas.produtosceramicos');
}
function callPage(page){  
    const origin = window.location.origin; 
    const pagePath = new Array(2).fill(page).join("/");   
    const pageUrl =  origin + "/pages/"+ pagePath + ".html";
    window.location.href = page ? pageUrl : origin;    
  }
  $("#submit").submit(function(e){
    e.preventDefault();
    return false;
  })