import { createTransport } from "nodemailer";
const { EMAIL_PORT, EMAIL, EMAIL_PASS } = process.env;

const transporter = async () => {
  const respuesta = createTransport({
    host: "smtp.gmail.com",
    port: EMAIL_PORT,
    secure: true,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS,
    },
  });
  return respuesta;
};

export default { transporter };
