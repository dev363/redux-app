let EmailModel = require('./models/email')
const db = require('./config/database')

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

function savvve(msg){
	return msg.save()
	.then(doc => doc)
	.catch(err =>err)
}


const msgd= savvve();
console.log(msgd)

//https://thecodebarbarian.com/how-find-works-in-mongoose