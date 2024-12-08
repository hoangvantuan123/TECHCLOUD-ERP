import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { StockInService } from '../service/stockIn.service';
import { GenerateXmlService } from '../generate-xml/generate-xml.service';
import { EmployeeController } from '../controller/stockIn.controller';
import { DeliveryListService } from '../service/deliveryList.service';
import { DeliveryListController } from '../controller/deliveryList.controller';
import { StockOutController } from '../controller/stockOut.controller';
import { StockOutService } from '../service/stockOut.service';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    StockInService,
    GenerateXmlService,
    DeliveryListService,
    StockOutService
  ],
  controllers: [EmployeeController, DeliveryListController, StockOutController],
  exports: [],
})
export class MaterialModule { }
