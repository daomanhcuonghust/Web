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
## Code Convention
Tên biến đặt theo thisIsAvarible, tên class hoặc tên compennent theo ThisIsClass, tên hằng số theo THIS_IS_CONST.

Tên 1 object đơn: user, list object: users

Tên file: đặt theo thisIsAFile, ngoại trừ tên compenent là ThisIsFileCompent.

Các folder nên có file index.js để export tất cả hàm, biến, class cần thiết trong folder đấy. Khi cần import chỉ cần dẫn đường link import đến folder. 

## git convention
https://github.com/DSC-HUST/Web-1-todolist

### Response format
Sẽ gồm 2 phần chính là data và error, nếu data được trả về thành công không lỗi thì error sẽ null, nếu có lỗi phần data sẽ null

```
\\ response success
{
  data: {
    message: "This is a test"
  }
}

\\ response failed
{
  error: {
    message: "Ops... Something wrongs"
  }
}
```

### demo
bản demo tồn tại trong thời gian đầu để idol hiểu cấu trúc code, convention và test setup code

```
GET /api/v1/demos
```
Trả về danh sách demo

```
POST /api/v1/todos

{
  "name": "example"
}

```
tạo 1 demo mới có name = example.

Trong model demo chỉ có thuộc tính name chỉ chứa các kí tự latinh độ dài từ 1 đến 20, ko chứa kí tự cách.

Sau khi setup xong các idol có thể test bên server và bên client để kiểm tra.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## test
