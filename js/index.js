// $(document).ready(function(){})

$(function(){
    //购物车
  (function(){
    let $h_m_r_buy = $(".h_m_r_buy"),
      $hide = $h_m_r_buy.find(".hide");


    $h_m_r_buy.hover(function(){
      $hide.stop().slideDown(500);
    },function(){
      $hide.stop().slideUp(500);
    });
  })();

  //nav菜单
  (function(){
    let $nav_hide = $(".nav_hide");
    let $nav_hide_main_ul = $nav_hide.find(".n_h_main ul");
    let $nav_main_product = $(".n_main ul li.product");

    //导航移入显示下拉
    $nav_main_product.hover(function(){
      $nav_hide.stop().slideDown(500);

      //获取当前移入的li的序号
      let index = $(this).index();
      //让对应序号的ul显示
      $nav_hide_main_ul.eq(index).show().siblings().hide();

    },function(){
      $nav_hide.stop().slideUp(500);
    });

    //确保移入到下拉的时候，它自己也能保持显示
    $nav_hide.hover(function(){
      $nav_hide.stop().slideDown(500);
    },function(){
      $nav_hide.stop().slideUp(500);
    });

  })();

  















})