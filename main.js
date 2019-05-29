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
        let $images = $('#images');
        $.get(superheroUrl).done((result)=>{
            for(let i = 0; i < result.length; i++){ //LOOP FOR MATCHING NAME AND IF "GOOD"
                if(result[i].name.toLowerCase() === $heroInput.toLowerCase() && result[i].biography.alignment === 'good'){
                    $information(result[i]);
                } else {
                    let $displayFail = $('#information').html('not a hero');
                }
            }
        })
        $images.html('');
        $grabMovies($heroInput);
    })
    // SEARCH BUTTON 2
    let $search2 = $('#search-button2').click(()=>{
        let $clearDom = $('#information2').html('');
        let $villainInput = $('#villain-input').val();
        let $clear = $('#villain-input').val('');
        let $images2 = $('#images2');
        $.get(superheroUrl).done((result)=>{
            for(let i = 0; i < result.length; i++){ //LOOP FOR MATCHING NAME AND IF "GOOD"
                if(result[i].name.toLowerCase() === $villainInput.toLowerCase() && result[i].biography.alignment === 'bad'){
                    $information2(result[i]);
                } else {
                    let $displayFail = $('#information2').html('not a villain');
                }
            }
        })
        $images2.html('');
        $grabVillainMovies($villainInput);
    })
    //TEMPLATE FOR DISPLAY
    let $template = function(image, name, strength, intelligence, speed, durability, power, combat){
        let $displayInfo = $('#information');
        let $displayList = $('<div>');
        $displayInfo.append($displayList).html(`<img style="height: 475px; width: 350px;" class="boxShadow" src = "${image}"></img> <br>
        <div class="white">
        <h1 class="title"><b>${name}</b></h1>
        <b>Strength: </b> ${strength} <br> 
        <b>Speed: </b> ${speed} <br>
        <b>Durability: </b> ${durability} <br>
        <b>Power: </b> ${power} <br>`);
    }
    let $template2 = function(image, name, strength, intelligence, speed, durability, power, combat){
        let $displayInfo2 = $('#information2');
        let $displayList = $('<div>');
        $displayInfo2.append($displayList).html(`<img style="height: 475px; width: 350px;" class="boxShadow" src = "${image}"></img> <br>
        <div class="white">
        <h1 class="title"><b>${name}</b></h1>
        <b>Strength: </b> ${strength} <br> 
        <b>Speed: </b> ${speed} <br>
        <b>Durability: </b> ${durability} <br>
        <b>Power: </b> ${power} <br>`);
    }
    //GETTING ATTRIBUTES
    let $information = function(obj){
        let $name = obj.name;
        let $strength = obj.powerstats.strength;
        let $intelligence = obj.powerstats.intelligence;
        let $speed = obj.powerstats.speed;
        let $durability = obj.powerstats.speed;
        let $power = obj.powerstats.power;
        let $combat = obj.powerstats.combat;
        let $image = obj.images.lg;
        $.get(superheroUrl).done((result)=>{
            $template($image, $name, $strength, $intelligence, $speed, $durability, $power, $combat);
        })
    }
    let $information2 = function(obj){
        let $name = obj.name;
        let $strength = obj.powerstats.strength;
        let $intelligence = obj.powerstats.intelligence;
        let $speed = obj.powerstats.speed;
        let $durability = obj.powerstats.speed;
        let $power = obj.powerstats.power;
        let $combat = obj.powerstats.combat;
        let $image = obj.images.lg;
        $.get(superheroUrl).done((result)=>{
            $template2($image, $name, $strength, $intelligence, $speed, $durability, $power, $combat);
        })
    }
    //GRABS MOVIE RESULT BASED ON USER INPUT
    let $grabMovies = function(hero){
        let $displayImg = $('#images');
        $.get(movieUrl + hero + movieUrlSearch).done((result)=>{
            for(let i = 0; i < 5; i++){
                let $image = result.results[i].poster_path;
                if(i == 0){
                    $displayImg.append(
                        `<div class="carousel-item active">
                        <img class="d-block w-100" style="height: 600px;" src="http://image.tmdb.org/t/p/w500/${$image}"></img>`);
                } else {
                    $displayImg.append(
                        `<div class="carousel-item">
                        <img class="d-block w-100" style="height: 600px;" src="http://image.tmdb.org/t/p/w500/${$image}"></img>`);
                }
            }
        })
    }
    //GRAB VILLAIN MOVIES
    let $grabVillainMovies = function(villain){
        let $displayImg2 = $('#images2');
        $.get(movieUrl + villain + movieUrlSearch).done((result)=>{
            for(let i = 0; i < 5; i++){
                let $image = result.results[i].poster_path;
                console.log($image);
                if(i == 0){
                    $displayImg2.append(`<div class="carousel-item active">
                    <img class="d-block w-100" style="height: 600px;" src="http://image.tmdb.org/t/p/w500/${$image}"></img>`);
                } else {
                    $displayImg2.append(
                        `<div class="carousel-item">
                        <img class="d-block w-100" style="height: 600px;" src="http://image.tmdb.org/t/p/w500/${$image}"></img>`);
                }
            }
        })

    }
})
// var carouselExampleIndicators = document.querySelectorAll("#carouselExampleIndicators #carousel-indicators")
// var currentPic = 0;
// var slideInterval = setInterval(nextSlide, 2000);
// function nextSlide(){
//     carouselExampleIndicators[currentPic].className = "carousel-indicators";
//     currentPic = (currentPic + 1) % carouselExampleIndicators.length;
//     carouselExampleIndicators[currentPic].className = "active";
// }