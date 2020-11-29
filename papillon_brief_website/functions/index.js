// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const gmailEmail = 'adhisuabeba@gmail.com';
const gmailPassword = 'dohmhyyzppafkyqn';
//実際の機能
exports.sendMail = functions.https.onCall(async function(data, context) {
  let text = data.company + "\n" + data.first + " " + data.last + "様\n";
if(data.inquiry == "question"){
  text += 
    "ご質問ありがとうございます。"
}else if(data.inquiry == "idea"){
  text +=
    "ご意見ありがとうございます。"
}else{
  text +=
    "申し訳ございません、エラーが発生しました。\n"
    +"お問い合わせ内容を確認の上もう一度送信してください。"
}
  //SMTPサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
//送信元、送信先、題名、内容を１つの変数にまとめる
  let adminMail = {
    from: gmailEmail,
    to: data.email,
    subject: "ホームページお問い合わせ",
    text: text
  };

//nodemailerのsendMail機能で、メールを送信する。
//変数は送信元などをまとめたもの
  try {
    await mailTransport.sendMail(adminMail);
   } catch (e) {
    return e.message;
   }
});
