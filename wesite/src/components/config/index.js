import Api from "/var/www/html/node/Redux/redux-app/wesite/src/components/actions/apiCalls/index.js"

module.exports = {
	ApiCalls: new Api('http://localhost:6002/'),
	API_BASE_URL : 'http://localhost:6002/',
	GET:"get",
	POST:'post',
  SIGN_UP : 'SIGN_UP',
  SIGN_IN : 'SIGN_IN',
  Check_Server : "Check_Server",
  SET_LOADING : "SET_LOADING"
}
