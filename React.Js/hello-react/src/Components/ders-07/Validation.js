import { object, string,ref } from 'yup';

const Validation = object({
  email: string().email("Geçerli bir email giriniz.").required("Zorunlu alan"),
  password: string().min(5, "Şifre en az beş karakterli olmalı").required("Zorunlu alan"),
  passwordConfirm: string().oneOf([ref('password')], "Şifreler uyuşmuyor").required("Zorunlu alan")
});

export default Validation;