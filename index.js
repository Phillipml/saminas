$(function () {
    function mouseenter(i) {
      $(".hl-" + i + "-img").css({ backgroundSize: "115%" });
      $(".hl-" + i + "-h2").css({ fontSize: "22px" });
    }
    function mouseleave(i) {
      $(".hl-" + i + "-img").css({ backgroundSize: "100%" });
      $(".hl-" + i + "-h2").css({ fontSize: "20px" });
    }
    $(".hl-1").mouseenter(function () {
      mouseenter(1);
    });
    $(".hl-1").mouseleave(function () {
      mouseleave(1);
    });
    $(".hl-2").mouseenter(function () {
      mouseenter(2);
    });
    $(".hl-2").mouseleave(function () {
      mouseleave(2);
    });
    $(".hl-3").mouseenter(function () {
      mouseenter(3);
    });
    $(".hl-3").mouseleave(function () {
      mouseleave(3);
    });

    $('.hl-1').click(function(){
      window.open("pages/products_single/esteira_transportadora/esteira_transportadora.html","_self")
    });
    $('.hl-2').click(function(){
      window.open("pages/products_single/galpao_secagem/galpao_secagem.html","_self")
    });
    $('.hl-3').click(function(){
      window.open("pages/products_single/arame_corte/arame_corte.html","_self")
    });

    $('#contactUsForm').load('src/form/form.html');
    $('#importHeader').load('src/header/header.html'); 
    $('#importFooter').load('src/footer/footer.html');  
    
   });
   