// let EmailModel = require('./models/email')
// const db = require('./config/_database')
import emailModel from './models/email'
import db from './config/_database'

let msg = new EmailModel({
  email: 'LOVELACE@GMAIL.COM'
})

// function savvve(){
// 	return msg.save()
// 	.then(doc => doc)
// 	.catch(err => err)
// }


// function savvve(){
// 	msg.save(function (err, ss) {
//       if (err) return (err);
//       return (ss)
//     })
	
// }

function savvve(){
	return msg.save()
	.then(doc => doc)
	.catch(err =>err)
}

var save2 = (msg,res,next) => { 

	return new Promise((resolve, reject) => {
		msg.save()
		.then(doc => doc)
		.catch(err =>err)
	    // setTimeout(() => {
	    //   if (!firstName) reject(new Error('no first name passed in!'))

	    //   const fullName = `${firstName} Doe`  

	    //   resolve(fullName)
	    // }, 2000)
	  })
 }; 


const msgd= save2(msg);
console.log(msgd)

//https://thecodebarbarian.com/how-find-works-in-mongoose