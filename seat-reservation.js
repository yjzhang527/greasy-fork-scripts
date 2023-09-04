// ==UserScript==
// @name         seat-reservation
// @icon         https://cdn.icon-icons.com/icons2/547/PNG/512/1455554407_line-50_icon-icons.com_53299.png
// @namespace    https://github.com/zhangyongjian258/greasy-fork-scripts
// @version      1.0
// @match        https://docs.qq.com/form/page/DVXljVE10cHhyT214*
// @description  座位自动填写提交脚本
// @author       一笑倾城
// @grant       GM_addStyle
// @require http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @require https://greasyfork.org/scripts/434540-layerjs-gm-with-css/code/layerjs-gm-with-css.js?version=1065982
// @license Creative Commons
// ==/UserScript==
(() => {
    let $jq = $;
    unsafeWindow.$jq = $;
    unsafeWindow.layer = layer;

    const userInfo = {
        name: 'zhangsan',
        carNo: '12345',
        majorClass: '计算机科学',
        telephone: 'zhangsan'
    }

    /**
     * 设置每日定时任务
     * @param {*} hour 小时
     * @param {*} minute 分钟
     * @param {*} callTask 任务函数
     */
    function setScheduledTask(hour, minute, callTask) {
        let taskTime = new Date();
        taskTime.setHours(hour);
        taskTime.setMinutes(minute);
        let timeDiff = taskTime.getTime() - (new Date()).getTime(); // 获取时间差
        timeDiff = timeDiff > 0 ? timeDiff : (timeDiff + 24 * 60 * 60 * 1000);
        setTimeout(function() {
            callTask(); // 首次执行
            setInterval(callTask, 24 * 60 * 60 * 1000); // 24小时为循环周期
        }, timeDiff);
    }

    function doTask() {
        $('.form-ui-component-basic-text:eq(0)').val(userInfo.name)
        $('.form-ui-component-basic-text:eq(1)').val(userInfo.carNo)
        $('.form-ui-component-basic-text:eq(2)').val(userInfo.majorClass)
        $('.form-ui-component-basic-text:eq(3)').val(userInfo.telephone)
    }
    console.log('-----------------------')
    doTask()
    // setScheduledTask(17, 5, doTask);
})();

