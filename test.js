$(function(){

    var superheroUrl = "https://akabab.github.io/superhero-api/api/all.json";
    var movieUrl = "https://api.themoviedb.org/3/movie/550?api_key=d0fa4897188fdcc700abf1c8e58ff015";

    //SEARCH BUTTON
    let $search = $('#search-button').click(()=>{
        let $clearDom = $('#information').html('');
        let $heroInput = $('#hero-input').val();
        let $clear = $('#hero-input').val('');
        $.get(superheroUrl).done((result)=>{
            for(let i = 0; i <= result.length; i++){ //LOOP FOR MATCHING NAME AND IF "GOOD"
                if(result[i].name.toLowerCase() === $heroInput.toLowerCase() && result[i].biography.alignment === 'good'){
                    $information(result[i]);
                } else {
                    let $displayFail = $('#information').html('not a hero');
                }
            }
        })
    })

    //TEMPLATE FOR DISPLAY
    let $template = function(image, name, strength){
        let $displayInfo = $('#information');
        let $displayList = $('<div>');
        $displayInfo.append($displayList).html(`<img src = "${image}"></img> <br>
        <b>Name:</b> ${name} <br>
        <b>strengths:</b> ${strength}<br>`);
    }

    //GETTING ATTRIBUTES
    let $information = function(obj){
        let $name = obj.name;
        let $strength = obj.powerstats.strength;
        let $image = obj.images.md;
        $.get(superheroUrl).done((result)=>{
            $template($image, $name, $strength);
        })
    }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/keyword?page=1&api_key=d0fa4897188fdcc700abf1c8e58ff015",
        "method": "GET",
        "headers": {},
        "data": "{}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

})