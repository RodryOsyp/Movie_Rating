import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
    

  // Initialize using your User ID saved in the .env file
  emailjs.init("IiqVgs6JnXonVN2sQ");

  emailjs
    .send(
      "service_4h341qq", // The service ID saved in the .env file
      "template_salvahs", // The template ID also saved in the .env file
      // Start of the variables defined in the template earlier
      {
        to_email: details.to_email,
        subject: details.subject,
        message: "Горит жопа сильно",
      }
      // End of the variables defined in the template earlier
    )
    .then((response) => {
      // Debug statement on the console to show the function has been executed successfully
      console.log(response);
    })
    .catch((error) => {
      // Debug statement on the console to show the error that occurred
      console.log(error);
    });
};

export { sendCustomEmail };