import Axios from "axios"

module.exports = class ApiCalls {

  constructor(url){
    this.API_BASE_URL=url;
  }

  AxiosCall = (method,url=null,data=null)=>{

    return new Promise((resolve, revoke)=>{
        Axios({
            method: method,
            url: `${this.API_BASE_URL}${url}`,
            data: data
        })
    	  .then((response) =>{
          resolve(response.data)
    	  })
    	  .catch(function (error) {
          revoke(error)
    	  });
    });

  }

   SignInUser = async (data)=>{
      return(await this.AxiosCall("post",'users/sign-in',data))
  }

}
