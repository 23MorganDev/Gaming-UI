let game_box_1 = document.getElementById('game_box_1');
let game_box_1_left_btn = document.getElementById("game_box_1_left_btn");
let game_box_1_right_btn = document.getElementById("game_box_1_right_btn");

game_box_1_left_btn.addEventListener('click', ()=>{
    game_box_1.scrollLeft -= 250;
});

game_box_1_right_btn.addEventListener('click', ()=>{
    game_box_1.scrollLeft += 250;
});