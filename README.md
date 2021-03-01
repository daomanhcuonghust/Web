# Todo list

## Installation

Cài đặt node version 14.16.00 LTS ở trang chủ hoặc thông qua nvm.

Cài đặt mongodb server hoặc mongodb cloud.

Cài đặt mongodb compass.

Setup server
```bash
cd server
npm install server
npm run dev
```
Setup client
```bash
cd client
npm install client
npm start
```

Server sẽ được chạy ở cổng 8888, client chạy ở cổng 3000.

Mình đã cài sẵn 1 cái db mongodb ở trên cloud. Các idol nên tạo riêng 1 cái server mongodb và chỉnh sửa MONGODB_URI trong file .env đến server đã cài 

## Folder structure

```
\server
--\src
  --\configs         
  --\controllers      
  --\loaders
  --\middlewares
  --\models
  --\routes
  --\services
  --\utils
  --\validators
  --index.js
--.env
--package.json

\client
--\public
--\src
  --\actions
  --\api
  --\components
  --\reducers
  --\constants 
  --index.js
--package.json
```
## Convention
Tên biến đặt theo thisIsAvarible, tên class hoặc tên compennent theo ThisIsClass, tên hằng số theo THIS_IS_CONST.

Tên 1 object đơn: user, list object: users

Tên file: đặt theo thisIsAFile, ngoại trừ tên compenent là ThisIsFileCompent.

Các folder nên có file index.js để export tất cả hàm, biến, class cần thiết trong folder đấy. Khi cần import chỉ cần dẫn đường link import đến folder. 



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
