$(function () {
  prodSingle();
  prodH5();
  function prodSingle() {
    var products = [
      {
        id: "esteira_transportadora",
        image: "esteira_transportadora1",
        description: "esteiras transportadoras",
      },
      {
        id: "galpao_secagem",
        image: "glp_plast1",
        description: "galpões de secagem",
      },
      {
        id: "tela_sombreamento",
        image: "tela_sombreamento1",
        description: "tela sombreamento",
      },
      {
        id: "correia_pvc",
        image: "correia_pvc1",
        description: "correias de arraste de pvc",
      },
      {
        id: "pneus_rodas",
        image: "pneus_rodas1",
        description: "pneus, câmaras de ar, rodas e carrinhos industriais",
      },
      {
        id: "correia_v",
        image: "correia_v1",
        description: "correias industriais",
      },
      {
        id: "arame_corte",
        image: "arame_corte1",
        description: "arames para corte",
      },
      {
        id: "carimbos_marcacao",
        image: "carimbos_marcacao1",
        description: "carimbos para marcações",
      },

      {
        id: "feltro_cortador",
        image: "feltro_cortador1",
        description: "feltros para roletes",
      },
      {
        id: "pecas_cortadores",
        image: "pecas_cortadores1",
        description: "peças para cortadores",
      },
      {
        id: "termopares",
        image: "termopares1",
        description: "termopares e indicadores de temperatura",
      },
      {
        id: "correia_nylon",
        image: "correia_nylon1",
        description: "correias em nylon",
      },
      {
        id: "acessorios_paletizacao",
        image: "acessorios_paletizacao1",
        description: "acessórios para paletização",
      },
      {
        id: "caracol_turbinado",
        image: "caracol_turbinado1",
        description: "caracol turbinado",
      },
      {
        id: "perfil_mola",
        image: "perfil_mola1",
        description: "perfil mola",
      },
      {
        id: "correia_taliscada",
        image: "correia_taliscada1",
        description: "correias transportadoras taliscadas",
      },
    ];

    products.forEach((product) => {
      var productSingle = $(
        "<div class='product-single' id=" + product.id + "></div>"
      );
      var itemBox = $("<div class='item-box' id=" + product.id + "></div>");
      var itemImg = $("<div class='item-img' id=" + product.id + "></div>");
      var description = $(
        "<h5 class='prod-h5' id=" +
          product.id +
          " style='text-transform: uppercase;'>" +
          product.description +
          "</h5>"
      );

      itemImg.css(
        "background-image",
        "url('../products_single/" +
          product.id +
          "/images/" +
          product.image +
          ".png')"
      );
      itemImg.appendTo(itemBox);
      description.appendTo(itemBox);
      itemBox.appendTo(productSingle);
      $(".products-wraper").append(productSingle);
    });
  }
  function prodH5() {
    $(".item-box").mouseenter(function () {
      $(this).find(".prod-h5").css({ textDecoration: "underline" });
    });
    $(".item-box").mouseleave(function () {
      $(this).find(".prod-h5").css({ textDecoration: "none" });
    });
  }

  $(".product-single").click(function () {
    var idPage = $(this).attr("id");
    var idWay = idPage + "/" + idPage + ".html";
    window.open("../products_single/" + idWay, "_self");
  });

  $("#importForm").load("../../src/form/form.html");
  $("#importHeader").load("../../src/header/header.html");
  $("#importFooter").load("../../src/footer/footer.html");
});
