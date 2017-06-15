const request = require("request");

const headers = {
  "User-Agent": "Super Agent/0.0.1",
  "Content-Type": "application/x-www-forum-urlencoded"
};

module.exports = (recaptchaResponse) => {
  return new Promise((resolve, reject) => {
    request({
      url: "https://www.google.com/recaptcha/api/siteverify",
      method: "POST",
      headers: headers,
      json: true,
      form: { 
        "secret": process.env.INVISIBLE_RECAPTCHA_SECRET_KEY,
        "response": recaptchaResponse
      }
    }, (error, response, body) => {
      if (body.success) {
        resolve();
      }

      else {
        /* eslint-disable no-console */
        console.log(error);
        reject(error);
      }
    });
  });
};
