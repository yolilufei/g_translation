import MD5 from "md5-es";
import account from "../config/accounts";

const sign = (content: string, salt: number | string) => {
  const append = `${account.appId}${content}${salt}vaCr2R2V2yrKZThH6rLO`;
  const summary = MD5.hash(append);
  return summary;
};

export default sign;
