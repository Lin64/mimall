/**
 * 封装sessionStorage
 * key      value
 * mall     {"user":{"userName":"jack","age":30,"sex":1}}
 */
const STORAGE_KEY = "mall";
export default {
    //  存储值（不限类型）
    /**
     * 
     * @param {*} key 键名
     * @param {*} value 键值
     * @param {*} module_name 模块名
     */
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    //  获取某一个模块下面的属性user下面的userName值
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) {
                return val[key];
            }
            return ;
        }
        return this.getStorage()[key];
    },
    // 获取整个storage
    getStorage() {
        return JSON.parse(
            window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    // 清除
    clear(key, module_name) {
        let val = this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}
