var clickFlag = false
    //页面滚动到哪,对应的nav里的li就高亮
$(window).on('scroll', function() {

    //获取页面滚动高度
    var pageScrollTop = $('html,body').scrollTop();
    //获取遍历a标签找到hash值
    $('.header-content li a').each(function(index, ele) {
        // 页面最后一个a不是高亮的内容,所以直接跳出函数
        // if (index == $('.header-content li a').length - 1) {
        //     return;
        // }
        // 获取hash值

        var target = $(this).prop('hash');
        var windowH = $(window).height()

        // console.log('clickFlag', $(target).get(0).id, clickFlag)
        if ($(target).get(0).id === 'publications') {
            console.log('$(target).offset().top - pageScrollTop', $(target).offset().top - pageScrollTop)
        }
        // 判断section距离页面的高度与页面滚动高度比较
        // if ($(target).offset().top - pageScrollTop < 0) {
        if ($(target).offset().top - pageScrollTop < 80) {
            if (!clickFlag) {
                // 给对应的li高亮操作
                $(this).parent().parent().siblings().removeClass('active');
                $(this).parent().parent().addClass('active');
            }
        } else {
            clickFlag = false
        }
    });
});

function scrollHighLight() {

    // 点击对应的nav里的li标签,页面就滚动到哪里
    $('.header-content li').click(function(event) {

        //li标签里面有a标签,可以阻止到a标签的默认行为
        event.preventDefault();
        //这里找到的是target #后面的内容
        var target = $(this).find('a').prop('hash');

        //将页面动画滚动到指定位置
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 0);
        // setTimeout(() => {
        clickFlag = true
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        // }, 500)
        // console.log('2')

    });
}

scrollHighLight()