//JavaScript Document

$(document).ready(function () {
    let active;
    $('body').on('click', '.item_link', function (e) {
        e.preventDefault();
        let index=$(this).closest('.item').index();
        if($(this).hasClass('after')){
            if($('.item').eq(index).hasClass('active')){
                $('.item').eq(index).removeClass('active');
                return;
            }
        }
        if($(this).hasClass('profile')) {
            $('.pageContent').eq(index).addClass('active').siblings().removeClass('active');
            $('.item_2').filter('.active').removeClass('active');
        }
        $('.item').eq(index).addClass('active').siblings().removeClass('active');

    });


	$('body').on('click', '.item_link2', function (e) {
		e.preventDefault();
		let	indexList=$(this).closest('.item').index(),
			list=$('.pageContent').eq(indexList);
        list.addClass('active').siblings().removeClass('active');
        $('.item_2').filter('.active').removeClass('active');
        $(this).closest('.item_2').addClass('active');
    })
});


// $(document).ready(function(){
// 	var n, taskText;
// 	//переход по закладкам
// 	$('body').on('click', '.item-text', function(e){
// 		e.preventDefault();
// 		var index=$(this).closest('.item').index(),
// 			List=$('.TabsList').eq(index);
// 		$('.item').eq(index).add(List).addClass('active').siblings().removeClass('active');
//
// 	})
//
// 	//создание новой вкладки
// 	$('.btn').on('click', function(e){
// 		e.preventDefault();
// 		var newLi=$('.newName').val();
//
// 		$('.item-Wrap').append('<li class="item"><a href="#" class="item-text" >'+newLi+'</a></li>');
// 		$('.container-dairy').append('	<div class="TabsList"><div class="container-task"></div><div class="newTask-wrap"><input class="newTask" type="text" value="Новая запись"><input class="bth-Task" type="button" value="+"></div></div>');
//         $('.newName').val('новый раздел');
// 	});
//
// 	//создание новой записи
// 	 $('body').on('click', '.bth-Task', '.task',  function(){
// 		 var newTime=new Date(),
// 			 tik=newTime.getHours(),
// 			 tak=newTime.getMinutes(),
// 			 n=$('.TabsList').filter('.active'),
//              taskText=n.find('.newTask').val(),
// 			 tut=n.find('.task').length,
// 			 num=tut+1;
// 			n.find('.container-task').append('<p class="task"  href="javascript:return false;"><span class="number">'+num+'</span>'+taskText+'<span class="time">'+tik+":"+tak+'</span></p>');
//         $('.TabsList').filter('.active').find('.newTask').val('новая запись');
// 	 })
// 	 //перечеркивание выполненого задания
// 	 $('body').on('click', '.task', function(){
// 		 if($(this).hasClass('done')){
// 			$(this).removeClass('done')
// 		 }else{
// 			 $(this).addClass('done')
// 		 }
// 	 })
//
// })


























