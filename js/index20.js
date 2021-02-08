
var movbtn = $(".movie_title > ul > li");
var movcont = $(".movie_chart > div");
movcont.hide().eq(0).show();
movbtn.click(function(e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  movbtn.removeClass("active");
  target.addClass("active");
  movcont.css("display", "none");
  movcont.eq(index).css("display", "block");
});
//공지사항 텝 메뉴
var tabMenu = $(".notice");
//컨텐츠 내용 숨김
tabMenu.find("ul > li > ul").hide()
tabMenu.find("ul > li.active > ul").show();
function tabList(e){
  e.preventDefault();//샵 기능차단
  var target = $(this);
  target.next().show().parent("li").addClass("active").siblings("li").removeClass("avtive").find("ul").hide();
}
tabMenu.find("ul > li> a").click(tabList).focus(tabList);
// // 컨텐츠 내용 숨김
// //공지사항 텝 메뉴
