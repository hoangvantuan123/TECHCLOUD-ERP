
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateXmlService {

  /* _SSLImpDelvMasterSave_WEB */
  async generateXMLSSLImpDelvMasterSave(result: any[], SPDelvNo: any): Promise<string> {
    return `<ROOT>${result.map((item, index) => `
    <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Selected>1</Selected>
    <Status>0</Status>
    <DelvSeq>${item?.DelvSeq}</DelvSeq>
    <BizUnit>${item?.BizUnit}</BizUnit>
    <BizUnitName>${item?.BizUnitName}</BizUnitName>
    <DelvDate>${item?.DelvDate}</DelvDate>
    <CustSeq>${item?.CustSeq}</CustSeq>
    <CustName>${item?.CustName}</CustName>
    <DelvNo>${SPDelvNo}</DelvNo>
    <PermitNo>${item?.PermitNo}</PermitNo>
    <BLNo xml:space="preserve">            </BLNo>
    <EmpName>${item?.EmpName}</EmpName>
    <EmpSeq>${item?.EmpSeq}</EmpSeq>
    <DeptSeq>${item?.DeptSeq}</DeptSeq>
    <DeptName>${item?.DeptName}</DeptName>
    <CurrName>${item?.CurrName}</CurrName>
    <CurrSeq>${item?.CurrSeq}</CurrSeq>
    <ExRate>${item?.ExRate}</ExRate>
    <Remark>${item?.DelvSeq}</Remark>
    <SMImpKindName>${item?.SMImpKindName}</SMImpKindName>
    <SMImpKind>${item?.SMImpKind}</SMImpKind>
    <IsPJT>${item?.IsPJT}</IsPJT>
  </DataBlock1>`).join('')}</ROOT>`;
  }



  async generateXMLSSLImpDelvSheetSave(result: any[], SPDelvSeq: any): Promise<string> {
    return `<ROOT>${result.map((item, index) => `
      <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO> 
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <DelvSeq>${SPDelvSeq}</DelvSeq>
    <DelvSerl>${index + 1}</DelvSerl>
    <ItemSeq>${item?.ItemSeq}</ItemSeq>
    <UnitSeq>${item?.UnitSeq}</UnitSeq>
    <Qty>${item?.Qty}</Qty>
    <Price>${item?.Price}</Price>
    <CurAmt>${item?.CurAmt}</CurAmt>
    <DomAmt>${item?.DomAmt}</DomAmt>
    <WHSeq>${item?.WHSeq}</WHSeq>
    <LotNo>${item?.LotNoFull}</LotNo>
    <FromSerlNo />
    <ToSerlNo />
    <ProdDate xml:space="preserve"></ProdDate>
    <STDUnitSeq>${item?.StdUnitSeq}</STDUnitSeq>
    <STDUnitName>${item?.STDUnitName}</STDUnitName>
    <STDQty>${item?.Qty}</STDQty>
    <ItemName>${item?.ItemName}</ItemName>
    <ItemNo>${item?.ItemNo}</ItemNo>
    <UnitName>${item?.UnitName}</UnitName>
    <WHName>${item?.WHName}</WHName>
    <Spec>${item?.Spec}</Spec>
    <AccName />
    <OppAccName />
    <IsQtyChange xml:space="preserve"></IsQtyChange>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <MakerSeq>0</MakerSeq>
    <MakerName />
    <BizUnit>${item?.BizUnit}</BizUnit>
    <Remark />
    <Memo1 />
    <Memo2 />
    <Memo3 />
    <Memo4 />
    <Memo5 />
    <Memo6 />
    <Memo7>1</Memo7>
    <Memo8>0</Memo8>
  </DataBlock2>`).join('')}</ROOT>`;
  }



  async generateXMLSLGLotNoMasterSave(result: any[]): Promise<string> {
    return `<ROOT>${result.map(item => `
      <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <DataSeq>1</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <LotNo>${item.LotNo}</LotNo>
    <Spec>${item.Spec}</Spec>
    <ItemSeq>${item.ItemSeq}</ItemSeq>
    <UnitSeq>${item.UnitSeq}</UnitSeq>
    <Qty>${item.Qty}</Qty>
    <CreateDate xml:space="preserve">${item.CreateDate}</CreateDate>
    <RegDate>${item.RegDate}</RegDate>
    <CustSeq>${item.CustSeq}</CustSeq>
    <LotNoOLD />
    <ItemSeqOLD>${item.ItemSeqOLD}</ItemSeqOLD>
    <InNo>${item.InvoiceNo}</InNo>
    <SupplyCustSeq>${item.CustSeq}</SupplyCustSeq>
  </DataBlock1>`).join('')}</ROOT>`;
  }





  async generateXMLSCOMSourceDailySave(result: any[], SPDelvSeq: any): Promise<string> {
    return `<ROOT>${result.map((item, index) => `
      <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <FromTableSeq>48</FromTableSeq>
    <FromSeq>${item.PermitSeq}</FromSeq>
    <FromSerl>${item.PermitSerl}</FromSerl>
    <FromSubSerl>0</FromSubSerl>
    <ToTableSeq>49</ToTableSeq>
    <FromQty>${item.StdQty}</FromQty>
    <FromSTDQty>${item.StdQty}</FromSTDQty>
    <FromAmt>${item.FromAmt}</FromAmt>
    <FromVAT>${item.FromVAT}</FromVAT>
    <PrevFromTableSeq>43</PrevFromTableSeq>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <ToSeq>${SPDelvSeq}</ToSeq>
    <ToSerl>${index + 1}</ToSerl>
    <ToAmt>${item.CurAmt}</ToAmt>
    <DomAmt>${item.CurAmt}</DomAmt>
    <ToSTDQty>${item.Qty}</ToSTDQty>
    <ToQty>${item.Qty}</ToQty>
  </DataBlock1>`).join('')}</ROOT>`;
  }



  async generateXMLSLGInOutDailyBatch(result: any[], SPDelvSeq: any): Promise<string> {
    return `<ROOT> <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <Status>0</Status>
    <InOutSeq>${SPDelvSeq}</InOutSeq>
    <InOutType>240</InOutType>
  </DataBlock1></ROOT>`;
  }





  /* SAVE SOCK OUT FIFO
   */

  async generateXMLSPDMMOutProcSaveWEB(result: any[]): Promise<string> {
    return `<ROOT>${result.map(item => `
      <DataBlock1>
      <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <Status>0</Status>
    <MatOutSeq>${item.MatOutSeq}</MatOutSeq>
    <FactUnit>${item.FactUnit}</FactUnit>
    <MatOutNo>${item.MatOutNo}</MatOutNo>
    <MatOutDate>${item.MatOutDate}</MatOutDate>
    <UseType>6044001</UseType>
    <MatOutType>0</MatOutType>
    <IsOutSide>0</IsOutSide>
    <OutWHSeq>0</OutWHSeq>
    <InWHSeq>${item.InWHSeq}</InWHSeq>
    <EmpSeq>${item.EmpSeq}</EmpSeq>
    <Remark />
  </DataBlock1>`).join('')}</ROOT>`;
  }
  async generateXMSPDMMOutProcItemSave(result: any[], MatOutSeq: any): Promise<string> {
    return `<ROOT>${result.map((item, index) => `
      <DataBlock3>
       <WorkingTag>A</WorkingTag>
     <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock3</TABLE_NAME>
    <MatOutSeq>${MatOutSeq}</MatOutSeq>
    <OutItemSerl>${index + 1}</OutItemSerl>
    <ItemSeq>${item.ItemSeq}</ItemSeq>
    <OutWHSeq>${item.OutWHSeq}</OutWHSeq>
    <InWHSeq>${item.InWHSeq}</InWHSeq>
    <UnitSeq>${item.UnitSeq}</UnitSeq>
    <Qty>${item.Qty}</Qty>
    <StdUnitQty>0.00000</StdUnitQty>
    <ItemLotNo>${item.ItemLotNo}</ItemLotNo>
    <SerialNoFrom />
    <WorkOrderSeq>${item.WorkOrderSeq}</WorkOrderSeq>
    <ConsgnmtCustSeq>0</ConsgnmtCustSeq>
    <Remark />
    <ReqQty>${item.ReqQty}</ReqQty> 
    <OutReqSeq>${item.OutReqSeq}</OutReqSeq>
    <OutReqItemSerl>${item.OutReqItemSerl}</OutReqItemSerl>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <WorkOrderSerl>${item.WorkOrderSerl}</WorkOrderSerl>
    <AlterRate>0.00000</AlterRate>
  </DataBlock3>`).join('')}</ROOT>`;
  }


  async generateXMLSLGInOutDailyBatchStockoutFiFo(result: any[], MatOutSeq: any, FactUnit: any, MatOutNo: any): Promise<string> {
    return `<ROOT>${result.map(item => `
      <DataBlock1>
       <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <Status>0</Status>
    <InOutSeq>${MatOutSeq}</InOutSeq>
    <FactUnit>${FactUnit}</FactUnit>
    <InOutNo>${MatOutNo}</InOutNo>
    <InOutType>180</InOutType>
  </DataBlock1>`).join('')}</ROOT>`;
  }


  async generateXMLSCOMSourceDailySaveStockoutFiFo(result: any[]): Promise<string> {
    return `<ROOT>${result.map((item, index) => `
      <DataBlock1>
      <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <FromTableSeq>24</FromTableSeq>
    <FromSeq>${item.OutReqSeq}</FromSeq>
    <FromSerl>${item.OutReqSerl}</FromSerl>
    <FromSubSerl>0</FromSubSerl>
    <ToTableSeq>25</ToTableSeq>
    <FromQty>${item.ReqQty}</FromQty>
    <FromSTDQty>${item.ReqQty}</FromSTDQty>
    <FromAmt>0</FromAmt>
    <FromVAT>0</FromVAT>
    <PrevFromTableSeq>0</PrevFromTableSeq>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <ToSeq>${item.MatOutSeq}</ToSeq>
    <ToSerl>${index + 1}</ToSerl>
    <ToQty>${item.Qty}</ToQty> 
    <ToSTDQty>${item.Qty}</ToSTDQty>
  </DataBlock1>`).join('')}</ROOT>`;
  }
  async generateXMLSCOMSourceDailySaveFiFo(result: any[]): Promise<string> {
    return `<ROOT>${result.map((item, index) => `
      <DataBlock1>
    <WorkingTag>A</WorkingTag>
     <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <FromTableSeq>24</FromTableSeq>
    <FromSeq>${item.OutReqSeq}</FromSeq>
    <FromSerl>${item.OutReqItemSerl}</FromSerl>
    <FromSubSerl>0</FromSubSerl>
    <ToTableSeq>25</ToTableSeq>
    <FromQty>${item.ReqQty}</FromQty>
    <FromSTDQty>${item.ReqQty}</FromSTDQty>
    <FromAmt>0</FromAmt>
    <FromVAT>0</FromVAT>
    <PrevFromTableSeq>0</PrevFromTableSeq>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <ToSeq>${item.MatOutSeq}</ToSeq>
    <ToSerl>${index + 1}</ToSerl>
    <ToQty>${item.Qty}</ToQty>
    <ToSTDQty>${item.Qty}</ToSTDQty>
  </DataBlock1>`).join('')}</ROOT>`;
  }

}
