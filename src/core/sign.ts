import md5 from "md5";
import account from "../config/accounts";

const sign = (content: string) => {
  const salt = Date.now();
  const append = `${account.appId}${content}${salt}vaCr2R2V2yrKZThH6rLO`;
  const summary = md5(append);
  return summary;
};

export default sign;
