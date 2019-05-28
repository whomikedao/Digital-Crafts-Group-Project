$(function() {
    let url = "https://akabab.github.io/superhero-api/api/all.json"
 
    //all.json
    //id
    //powerstats
    //appearance
    //biography
    //connections
    //work
    //images/xs sm md lg/"slug"

    // $.get(url).done((response)=>{
    //     console.log(response[2]);
    // })

    
    let $page1 = $('#page1');
    let $box1 = $('#box1');
    let $cover = $('.cover');

    $page1.on('mouseover', function(){
        console.log('page1');
    })
    $box1.on('mouseover', function(){
        console.log('box1');
    })
    $cover.on('mouseover', function(){
        console.log('cover');
    })

    // $page1.on('onmouseover', function(){
    //     console.log('hello');
    //     $(this).toggleClass('hide');
    //     let $box1click = $('#box1');
    //     $box1click.on("click", function(){
    //         alert('you clicked on box1');
    //     })
    // })

    $cover.on('mouseenter', function(){
        $page1.attr({class: 'page1'});
    })

   

    
 })