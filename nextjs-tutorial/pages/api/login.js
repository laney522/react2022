import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';

export default (req, res) => {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' });
  if(req.method == 'POST'){
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message:  "ok" });
  }
};

