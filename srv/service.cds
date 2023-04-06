//using { com.cnhi.btp.eban } as schema from '../db/data-model';
using { com.cnhi.btp.ebansrvs as schema } from '../db/data-model';


@path: '/sap/opu/odata/sap/ZBTP_POC1_GTW_SRV'
service ZBTP_POC1_GTW_SRV {
    entity ebanSet as projection on schema.ebanSet;
    entity ApproverSet as projection on schema.ApproverSet;
}