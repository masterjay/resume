$(function()
{
	var $fish;
	var $meat;
	$("#vegOn").click(function()
		{
			$fish = $(".fish").parent().parent().detach();
			$(".meat").after("<li class='Tofu'>豆腐</li>");
			$meat = $(".meat").detach();
			$(".Tofu").parent().parent().addClass("veg_leaf");
		}
	)

	$("#restoreMe").click(function()
		{
			$(".menu_entrees li").first().before($fish);
			$(".Tofu").parent().parent().removeClass("veg_leaf");	
			$(".Tofu").each(function(index){
				$(this).after($meat[index]);
			});

		}
	)
});