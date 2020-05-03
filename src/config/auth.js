class Auth {
    constructor() {
        this.auth = false;
    }
    login(cb){
        cb();
    }
    logout(cb){
        localStorage.clear();
    }
    isauth()
    {
         if(localStorage.getItem('admin') === null)
         {
             return false;
         }
         else
         {
            return true;
         }
    }

}
export default new Auth();