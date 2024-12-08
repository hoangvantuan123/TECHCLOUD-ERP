qr-code-microservice/
├── src/
│   ├── app.module.ts               # Module chính, import các module khác
│   ├── main.ts                      # Điểm khởi đầu của ứng dụng NestJS
│   ├── config/                      # Cấu hình hệ thống (CORS, rate-limiting, logger)
│   │   ├── database.config.ts       # Cấu hình kết nối DB Oracle
│   │   ├── security.config.ts       # Cấu hình bảo mật (JWT, rate limiting, etc.)
│   │   └── app.config.ts            # Các cấu hình chung của ứng dụng (port, prefix, etc.)
│   ├── common/                      # Thư mục chứa các thành phần tái sử dụng
│   │   ├── decorators/              # Các custom decorators
│   │   ├── interceptors/            # Các interceptors cho logging, error handling
│   │   ├── guards/                  # Các guards cho bảo mật
│   │   ├── filters/                 # Các exception filters
│   │   └── utils/
|    |    |   database/                # Module tái sử dụng các hàm database
│   │   │   ├── database.module.ts   # Module của Database
│   │   │   ├── database.service.ts  # Service xử lý truy vấn DB
│   │   │   ├── find.service.ts      # Xử lý logic tìm kiếm dữ liệu
│   │   │   ├── create.service.ts    # Xử lý logic thêm dữ liệu
│   │   │   ├── update.service.ts    # Xử lý logic cập nhật dữ liệu
│   │   │   └── delete.service.ts                     # Các tiện ích chung (helpers)
│   ├── qr-code/                     # Module QR Code
│   │   ├── qr-code.module.ts        # Định nghĩa module
│   │   ├── qr-code.controller.ts    # Controller cho QR Code
│   │   ├── qr-code.service.ts       # Service xử lý logic cho QR Code
│   │   ├── entities/
│   │   │   └── qr-code.entity.ts    # Định nghĩa entity QR Code
│   │   └── dto/                     # Định nghĩa các DTO (Data Transfer Object)
│   │       └── create-qr-code.dto.ts
├── .env                             # Các biến môi trường
├── .env.example                     # Mẫu file .env cho môi trường dev
├── package.json
└── yarn.lock



# get image
$ docker pull gvenzl/oracle-xe:21-full

# build oracle image and detached (it gonna take while)
$ docker run -d -p 1521:1521 --name ora21cFull -e ORACLE_PASSWORD=SysPassword1 -v oracle-volume:/opt/oracle/XEORA21CFull/oradata gvenzl/oracle-xe



<!-- Ban 11 -->

docker pull gvenzl/oracle-xe:11

docker run -d -p 1521:1521 --name ora11gFull -e ORACLE_PASSWORD=SysPassword1 -v oracle-volume:/opt/oracle/XEORA11GFull/oradata gvenzl/oracle-xe:11



  EXEC _SMaterialQRCheck_WEB
        @xmlDocument = N'<ROOT>
    <ROOT>
        <DataBlock1>
            <WorkingTag>A</WorkingTag>
            <IDX_NO>1</IDX_NO>
            <Status>0</Status>
            <DataSeq>1</DataSeq>
            <Selected>1</Selected>
            <TABLE_NAME>DataBlock1</TABLE_NAME>

            <BizUnit></BizUnit>
            <BizUnitName></BizUnitName>
                <SMImpKind>8008004</SMImpKind>
            <SMImpKindName></SMImpKindName>
            <ItemNo>undefined</ItemNo>
            <LotNo>JY2408230040102</LotNo>
            <Qty>7000</Qty>
            <DateCode>2439</DateCode>
            <ReelNo>0736</ReelNo>
            <Barcode>NIK0998/JY2408230040102/7000/2439/0736</Barcode>
        </DataBlock1>
    </ROOT> </ROOT>',
        @xmlFlags = 2,
        @ServiceSeq = 1613,
        @WorkingTag = N'A',
        @CompanySeq = 1,
        @LanguageSeq = 6,
        @UserSeq = 18770,
        @PgmSeq = 1791;
