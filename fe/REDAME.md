# Sử dụng phiên bản nhẹ của Node.js

FROM node:20-alpine

# Đặt thư mục làm việc

WORKDIR /app

# Sao chép package.json và yarn.lock trước để tận dụng Docker cache

COPY package.json yarn.lock ./

# Cài đặt dependencies

RUN yarn install --frozen-lockfile && yarn cache clean

# Sao chép toàn bộ mã nguồn

COPY . .

# Cài đặt PM2

RUN yarn global add pm2

# Mở cổng ứng dụng

EXPOSE 3000

# Lệnh khởi chạy ứng dụng bằng PM2

CMD ["pm2-runtime", "start", "npm", "--", "run", "start"]

# yarn global add http-server

## pm2 start http-server --name "my-react-app" -- -p 3000 ./dist

<!--
const createXmlDataBlock = (row, index) => `
  <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <ServiceSeq>4492</ServiceSeq>
    <MethodSeq>2</MethodSeq>
    <BizUnit>${row?.BizUnit}</BizUnit>
    <Date>${row?.DateIn}</Date>
    <DeptSeq>${row?.DeptSeq}</DeptSeq>
    <BizUnitOld>${row?.BizUnit}</BizUnitOld>
    <DateOld>${row?.DateIn}</DateOld>
    <DeptSeqOld>${row?.DeptSeq}</DeptSeqOld>
  </DataBlock2>
`;

const createXmlDataBlock2 = (row, index) => `
<DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <DataSeq>1</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <ItemName>${row?.ItemName}</ItemName>
    <ItemNo>${row?.ItemNo}</ItemNo>
    <Spec>${row?.Spec}</Spec>
    <MakerName />
    <MakerSeq>0</MakerSeq>
    <UnitName>${row?.UnitName}</UnitName>
    <Qty>${row?.Qty}</Qty>
    <Price>${row?.Price}</Price>
    <CurAmt>${row?.CurAmt}</CurAmt>
    <DomAmt>${row?.DomAmt}</DomAmt>
    <WHName>${row?.WHName}</WHName>
    <LotNo>${row?.LotNo}</LotNo>
    <FromSerlNo />
    <ToSerlNo />
    <ProdDate />
    <STDUnitName>${row?.STDUnitName}</STDUnitName>
    <STDQty>${row?.STDQty}</STDQty>
    <DelvSerl />
    <ItemSeq>${row?.ItemSeq}</ItemSeq>
    <UnitSeq>${row?.UnitSeq}</UnitSeq>
    <STDUnitSeq>${row?.STDUnitSeq}</STDUnitSeq>
    <AccName />
    <OppAccName />
    <WHSeq>${row?.WHSeq}</WHSeq>
    <IsQtyChange />
    <Remark />
    <Memo1 />
    <Memo2 />
    <Memo3 />
    <Memo4 />
    <Memo5 />
    <Memo6 />
    <Memo7>0</Memo7>
    <Memo8>0</Memo8>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <BizUnit>${row?.BizUnit}</BizUnit>
    <DelvDate>${row?.DelvDate}</DelvDate>
    <DelvSeq>${row?.DelvSeq}</DelvSeq>
  </DataBlock2>
`;
const callHandelSubmitSheet = useCallback(
  debounce(() => {
    if (scanHistory.length === 0) {
      message.warning('Không có dữ liệu nào');
      return;
    }

    const xmlData = scanHistory.map(createXmlDataBlock).join('\n');

    return SCOMCloseItemCheckWEB(xmlData)
      .then((req) => {
        if (req.success) {
          message.success(SUCCESS_MESSAGES.DELETE_DATA);
        } else {
          message.error(req.message);
        }
      })
      .catch(() => {
        message.error(ERROR_MESSAGES.ERROR_FE);
      });
  }, 300),
  [scanHistory]
);


const callSSLImpDelvSheetCheck = useCallback(
  debounce(() => {
    if (scanHistory.length === 0) {
      message.warning('Không có dữ liệu nào');
      return;
    }

    const xmlData = scanHistory.map(createXmlDataBlock2).join('\n');

    return SSLImpDelvSheetCheck(xmlData)
      .then((req) => {
        if (req.success) {
          message.success(SUCCESS_MESSAGES.DELETE_DATA);
        } else {
          message.error(req.message);
        }
      })
      .catch(() => {
        message.error(ERROR_MESSAGES.ERROR_FE);
      });
  }, 300),
  [scanHistory]
);


const callSCOMCloseCheckWEB = useCallback(() => {
  const formData = {
    workingTag: 'A',
    idx_no: '1',
    status: '0',
    dataSeq: '1',
    selected: '1',
    isChangedMst: '1',
    bizUnit: filteredData?.BizUnit,
    date: '20241126',
    deptSeq: filteredData?.DeptSeq,
    serviceSeq2: '4492',
    methodSeq: '2',
    dtlUnitSeq: '1',
  };

  return SCOMCloseCheckWEB(formData)
    .then((response) => {
      if (response.success) {
        message.success('SCOMCloseCheckWEB: Thành công!');
      } else {
        throw new Error(`SCOMCloseCheckWEB: ${response.message}`);
      }
    })
    .catch((error) => {
      throw error;
    });
}, [filteredData]);

const callSSLImpDelvMasterCheckWEB = useCallback(() => {
  const formData = {
    workingTag: 'A',
    idx_no: '1',
    status: '0',
    dataSeq: '1',
    selected: '1',
    isChangedMst: '1',

  };

  return SSLImpDelvMasterCheckWEB(formData)
    .then((response) => {
      if (response.success) {
        message.success('SSLImpDelvMasterCheckWEB: Thành công!');
      } else {
        throw new Error(`SSLImpDelvMasterCheckWEB: ${response.message}`);
      }
    })
    .catch((error) => {
      throw error;
    });
}, [filteredData]);



const handleSubmit = () => {
  Promise.all([callSCOMCloseCheckWEB(), callHandelSubmitSheet(), callSSLImpDelvMasterCheckWEB(), callSSLImpDelvSheetCheck()])
    .then(() => {
      message.success('Cả hai API đã được xử lý thành công!');
    })
    .catch((error) => {
      console.error('Lỗi khi xử lý các tác vụ song song:', error);
      message.error('Đã xảy ra lỗi trong quá trình xử lý các tác vụ.');
    });
};



 -->
