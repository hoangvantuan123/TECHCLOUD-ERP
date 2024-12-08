import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { CodeHelpComboQueryService } from '../service/codeHelpComboQuery.service';
import { CodeHelpQueryController } from '../controller/codeHelpQuery.controller';
import { CodeHelpComboQueryController } from '../controller/codeHelpComboQuery.controller';
import { CodeHelpQueryService } from '../service/codeHelpQuery.service';
@Module({
  imports: [],
  providers: [
    DatabaseService,
    CodeHelpComboQueryService,
    CodeHelpQueryService
  ],
  controllers: [CodeHelpComboQueryController, CodeHelpQueryController],
  exports: [],
})
export class CodeHelpComboQueryModule { }
