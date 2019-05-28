$(function(){

    var superheroUrl = "https://akabab.github.io/superhero-api/api/all.json";
    var movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=d0fa4897188fdcc700abf1c8e58ff015&language=en-US&query=";
    var movieUrlSearch = "&page=1&include_adult=false";
    var apiKey = "d0fa4897188fdcc700abf1c8e58ff015";
    var $movieImageUrl = "http://image.tmdb.org/t/p/w200/";

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
        $grabMovies($heroInput);
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
      
    //GRABS MOVIE RESULT BASED ON USER INPUT
    let $grabMovies = function(hero){
        let $displayImg = $('#images');
        $.get(movieUrl + hero + movieUrlSearch).done((result)=>{
            for(let i = 0; i <= result.results.length; i++){
                // http://image.tmdb.org/t/p/w200//j3SFJqZPeeB9g5JMU7UFLgEqj2T.jpg
                let $image = result.results[i].poster_path;
                $displayImg.append(`<img src="http://image.tmdb.org/t/p/w200/${$image}"></img><br>`);
                console.log($image);
            }
        })
    }

})