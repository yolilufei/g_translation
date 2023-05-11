declare module "md5-es";
declare module "node_modules/md5-es/build/md5-es.min.js";

declare type Message_Type = {
  namespace: string;
  data: {
    from: string;
    to: string;
    trans_result: Array<{ src: string; dst: string }>;
  };
};
