$(function(){
    $(".contact-message-order-support-form").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("We received your submission, thank you!");
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});



let e = document.getElementById('elem')
e.addEventListener( 'click' , function collapsElement() {
    let lastOpen = document.getElementById('mainMenu');
    if (lastOpen.style.display != 'none') {
        lastOpen.style.display = 'none';
    } else 
        lastOpen.style.display = 'block';
});

/*const openMenu = document.getElementById('elem');
openMenu.addEventListener('click', collapsElement());

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu.nextElementSibling.classList.toggle('main--show')
});*/