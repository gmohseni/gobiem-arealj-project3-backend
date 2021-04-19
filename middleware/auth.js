import jwt from "jsonwebtoken";

// const secret = 'test';

const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    //token at the first position of the array
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, 'test');

      // req.userId = decodedData?.id;
      req.userId = decodedData.id;
      
    } else {
      //google oa
      decodedData = jwt.decode(token);

      // req.userId = decodedData?.sub;
      req.userId = decodedData.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;