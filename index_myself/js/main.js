$(function () {
    $("#dowebok").responsiveSlides({
        speed:500,
        timeout:3000,
        pager:true,
        nav:true,
        pause:true,
        auto:true,
        namespace:'centered-btns',
    });
});
//vue功能块跳转指定位置
var vm=new Vue({
    el:'app',
    method:{
        mymethods1:function () {
            document.getElementById('myself_introduction').scrollIntoView();
        },
        // mymethods2:function () {
        //     document.getElementById('myself_introduction').scrollIntoView();
        // },
        // mymethods3:function () {
        //     document.getElementById('myself_introduction').scrollIntoView();
        // },
    },

});