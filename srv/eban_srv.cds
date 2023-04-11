using com.cnhi.btp.ebansrvs from '../db/eban';

// @requires: 'authenticated-user'
service EbanService {

 entity ebanSet
    as projection on ebansrvs.ebanSet;

 entity ApproverSet
    as projection on  ebansrvs.ApproverSet;

}
