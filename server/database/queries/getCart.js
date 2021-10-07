const connection = require('../connection');

const getCart = (USER_ID) => connection.query('SELECT P.ID, P.TITLE, P.CATEGORY, P.PRICE, P.IMAGE1 FROM USERS U JOIN CART C ON(U.USER_ID = C.USERID) JOIN PRODUCTS P ON(C.PRODUCTID = P.ID) WHERE USER_ID = $1;', [USER_ID]);
module.exports = getCart;
