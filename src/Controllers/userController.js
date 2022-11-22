import { Integration } from "./integrationController";
import { useCookies } from 'react-cookie';

export async function LoginUser(email, externalid, name, externallogo) {
  let user = await Integration(
    "login",
    { email: email, name: name },
    {},
    "post"
  );
  return user;
}

export async function RegisterUser(email, password, passwordrepet) {
  let user = await Integration("register", {}, {}, "post");
}

export async  function  CheckPasswords(password,repetpassword){

}

export function ValidateFields(field) {
  if (field == "") return false;
  if (field != "") return true;
}

export async function MgPub(token, publicacionid) {
  let result = await Integration(
    "create/megusta",
    { Publicacione_id: publicacionid, megusta: 1 },
    { headers: { Authorization: "Bearer " + token } },
    "post"
  );
  return result;
}

export async function NewComentario(token, publicacionid, comentario) {
  let result = await Integration(
    "create/comentario",
    { Publicacione_id: publicacionid, comentario: comentario },
    { headers: { Authorization: "Bearer " + token } },
    "post"
  );
  return result;
}

export async function LogOutUser(token, publicacionid, comentario) {
    const [cookies, setCookie,removeCookie] = useCookies(['auth_user']);
    removeCookie('auth_user');
    return true;
}
