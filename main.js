$(function() {
    let superherourl = "https://akabab.github.io/superhero-api/api/all.json"
    let movieAPI = "d0fa4897188fdcc700abf1c8e58ff015"
//     //example https://api.themoviedb.org/3/movie/550?api_key=d0fa4897188fdcc700abf1c8e58ff015
 
//     //all.json
//     //id
//     //powerstats
//     //appearance
//     //biography
//     //connections
//     //work
//     //images/xs sm md lg/"slug"



$.get(superherourl).done(function(response){
    let count = 1
    response.forEach(function(stats){
        if (stats.id != "" && count <= 9){
            if(stats.biography.alignment == "good"){
                if(count <= 3){
                    $(`#row1`).append(
                        '<div class = "card" style="border: 2px solid green">' +
                        '<img src = "' + stats.images.md + '" class = "card-img-top box"></img>' +
                        '<div class = "card-body">' +
                        '<h5 class = "card-title text-center">' + stats.name + '</h5>' +
                        '<b> Publisher: </b> <br>' + stats.biography.publisher + '<br>'
                    )
                } else if (count <=6){
                    $(`#row2`).append(
                        '<div class = "card mt-2" style="border: 2px solid green">' +
                        '<img src = "' + stats.images.md + '" class = "card-img-top box"></img>' +
                        '<div class = "card-body">' +
                        '<h5 class = "card-title text-center">' + stats.name + '</h5>' +
                        '<b> Publisher: </b> <br>' + stats.biography.publisher + '<br>'
                    )
                } else {
                    $(`#row3`).append(
                        '<div class = "card mt-2" style="border: 2px solid green">' +
                        '<img src = "' + stats.images.md + '" class = "card-img-top box"></img>' +
                        '<div class = "card-body">' +
                        '<h5 class = "card-title text-center">' + stats.name + '</h5>' +
                        '<b> Publisher: </b> <br>' + stats.biography.publisher + '<br>'
                    )
                }
            } else {
                if(count <= 3){
                    $(`#row1`).append(
                        '<div class = "card" style="border: 2px solid red">' +
                        '<img src = "' + stats.images.md + '" class = "card-img-top box"></img>' +
                        '<div class = "card-body">' +
                        '<h5 class = "card-title text-center">' + stats.name + '</h5>' +
                        '<b> Publisher: </b> <br>' + stats.biography.publisher + '<br>'
                    )
                } else if (count <=6){
                    $(`#row2`).append(
                        '<div class = "card mt-2" style="border: 2px solid red">' +
                        '<img src = "' + stats.images.md + '" class = "card-img-top box"></img>' +
                        '<div class = "card-body">' +
                        '<h5 class = "card-title text-center">' + stats.name + '</h5>' +
                        '<b> Publisher: </b> <br>' + stats.biography.publisher + '<br>'
                    )
                } else {
                    $(`#row3`).append(
                        '<div class = "card mt-2" style="border: 2px solid red">' +
                        '<img src = "' + stats.images.md + '" class = "card-img-top box"></img>' +
                        '<div class = "card-body">' +
                        '<h5 class = "card-title text-center">' + stats.name + '</h5>' +
                        '<b> Publisher: </b> <br>' + stats.biography.publisher + '<br>'
                    )
                }
            }
            count += 1;
        }
    })
})


    
    let $page1 = $('#page1');
    let $boxes = [ $('#box1'), $('#box2'), $('#box3'), $('#box4'), $('#box5'), $('#box6'), $('#box7'), $('#box8'), $('#box9')];
    // let $box2 = $('#box2');
    // let $box3 = $('#box3');
    // let $box4 = $('#box4');
    // let $box5 = $('#box5');
    // let $box6 = $('#box6');
    // let $box7 = $('#box7');
    // let $box8 = $('#box8');
    // let $box9 = $('#box9');
    let $cover = $('.cover');

    // var getInfo = function(hero){
    //     $.get(superherourl).done(response){
    //         console.log(response);
    //     }
    // }

    $(document).on("click", function(event) {
        console.log($(event.target).closest("div"));
        let $x = $(event.target).closest('h5').textContent;
        $.get(superherourl).done(function(response){
            console.log(response.name);
        })
      });

//     function classAtr(){
//         $page1.attr({class: 'page1'});
//     }
//    $cover.on('mouseover', setTimeout(classAtr, 4000));

    
 })