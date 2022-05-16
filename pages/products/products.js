$(function(){  
    prodSingle();
    prodH5();
    function prodSingle(){
    var products = [ 
        {
            id: 'galpao_secagem',
            image: 'glp_plast1',
            description: 'galpões de secagem'

        },
        {
            id: 'esteira_transportadora',
            image: 'esteira_transportadora1',
            description: 'esteiras transportadoras'

        },
        {
            id: 'correia_cortador',
            image: 'correia_cortador1',
            description: 'Correias Especiais para Cortadores e Automatismo'

        },
        {
            id: 'arame_corte',
            image: 'arame_corte1',
            description: 'arames para corte'

        },
        {
            id: 'carimbos_marcacao',
            image: 'carimbos_marcacao1',
            description: 'carimbos para marcações'

        },
        {
            id: 'pneus_rodas',
            image: 'pneus_rodas1',
            description: 'pneus industriais, câmaras de ar e rodas'

        },
        {
            id: 'correia_v',
            image: 'correia_v1',
            description: 'Correias industriais'

        },
        {
            id: 'feltro_cortador',
            image: 'feltro_cortador1',
            description: 'feltros para cortadores'

        },
        {
            id: 'pecas_cortadores',
            image: 'pecas_cortadores1',
            description: 'peças para cortadores'

        },
        {
            id: 'caracol_turbinado',
            image: 'caracol_turbinado1',
            description: 'caracol turbinado'

        },
        {
            id: 'lona_preta_branca',
            image: 'lona_preta_branca1',
            description: 'lona para silo'

        },
        {
            id: 'fita',
            image: 'fita1',
            description: 'fita de amarrações'
        },
        {
            id: 'termopares',
            image: 'termopares1',
            description: 'termopares e indicadores de temperatura'

        },
        {
            id: 'tela_sombreamento',
            image: 'tela_sombreamento1',
            description: 'sombrites'
        },
        {
            id: 'carrinho_industrial',
            image: 'carrinho_industrial1',
            description: 'carrinho industrial'
        },
        {
            id: 'embalagem_industrial',
            image: 'embalagem1',
            description: 'solução em embalagem industrial'
        },
        {
            id: 'resfriador_forno',
            image: 'resfriador_forno1',
            description: 'resfriador de forno'
        }

    ];

    products.forEach(product => {
        var productSingle = $("<div class='product-single' id="+product.id+"></div>");
        var itemBox = $("<div class='item-box' id="+product.id+"></div>");
        var itemImg = $("<div class='item-img' id="+product.id+"></div>")
        var description = $("<h5 class='prod-h5' id="+product.id+" style='text-transform: uppercase;'>"+product.description+"</h5>")
        
        itemImg.css('background-image', "url('../products_single/"+product.id+"/images/"+product.image+".png')");
        itemImg.appendTo(itemBox);
        description.appendTo(itemBox);
        itemBox.appendTo(productSingle);
        $('.products-wraper').append(productSingle);
    });
}
    function prodH5(){
        $('.item-box').mouseenter(function(){
            $(this).find('.prod-h5').css({  textDecoration: "underline" });
        })
        $('.item-box').mouseleave(function(){
            $(this).find('.prod-h5').css({  textDecoration: "none" });
        })
    }; 
        
    $('.product-single').click(function(){
        var idPage = $(this).attr("id");
        var idWay = idPage+'/'+idPage+'.html';
        window.open('../products_single/'+idWay, "_self");
    })


    $('#importForm').load('../../src/form/form.html');
    $('#importHeader').load('../../src/header/header.html'); 
    $('#importFooter').load('../../src/footer/footer.html');
    
})
