import Vue from 'vue'

class InstallClass {

}
InstallClass.install = function () {

    // 全局定义 组件 、 指令 、 总线
    Vue.prototype.$eventBus = new Vue;


}

Vue.use(InstallClass)