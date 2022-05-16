    $(function(){
        eventsSingle();
        
        function eventsSingle(){
            var events = [
                {
                    id:'12-convencao',
                    image:'12-convencao',
                    description:'12ª Convenção de Nordeste da Ceramica Vermelha 2017 - Fortaleza'
                },
                {
                    id:'anfamec',
                    image:'anfamec',
                    description:'12ª Convenção de Nordeste da Cerâmica Vermelha 2015 - Anfamec'
                },
                {
                    id:'ii-expocever',
                    image:'ii-expocever',
                    description:'II Expocever Santa Catarina - Rio do Sul - Santa Catarina'
                },
                {
                    id:'41-encontro',
                    image:'41-encontro',
                    description:'41° Encontro Nacional da Indústria de Cerâmica Vermelha Campo Grande - Mato Grosso do'
                },
                {
                    id:'42-encontro',
                    image:'42-encontro',
                    description:'42º Encontro Nacional da Indústria de Cerâmica Vermelha - Recife - Pernambuco'
                },
                {
                    id:'43-encontro',
                    image:'43-encontro',
                    description:'43º Encontro Nacional da Indústria de Cerâmica Vermelha Belém - Pará'
                }
                
            ];
            
            events.forEach( events => {
                var eventsSingle = $("<div class='events-single' id="+events.id+"></div>");
                var eventsImg = $("<div class='events-img'></div>");
                var eventsDescription = $("<h3 class='events-description'>"+events.description+"</h3>");
                
                eventsImg.css('background-image', "url('images/"+events.image+".jpg')");
                
                $(eventsImg).appendTo(eventsSingle);  
                $(eventsDescription).appendTo(eventsSingle);   
                $('.events-wraper').append(eventsSingle)
            })
           
            

        }
        $('.events-single').click(function(){
            var idPage = $(this).attr("id");
            var idWay = idPage+'/'+idPage+'.html';
            window.open('../events_single/'+idWay, "_self");
        })
        $('#importForm').load('../../src/form/form.html');
        $('#importHeader').load('../../src/header/header.html'); 
        $('#importFooter').load('../../src/footer/footer.html');
    })