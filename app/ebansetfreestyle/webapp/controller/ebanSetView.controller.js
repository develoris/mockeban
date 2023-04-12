sap.ui.define([
    "./Base.controller",
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var sServiceUrl;

        return Controller.extend("ebansetfreestyle.controller.ebanSetView", {
            onInit: function () {
                sServiceUrl = this.getOwnerComponent().getModel("PRApprovalCAP").sServiceUrl;
                console.log(sServiceUrl);
                this.getRouter().getRoute("ebanSetView").attachPatternMatched(this._onObjectMatched, this);
                
            },
            _onObjectMatched: function(){
                this._getPRList();
                //this._getPRFromCAPM();
            },
            _getPRList: function(){
                var that = this;
                var oLocalModel = that.getModel('LocalModel');
                var oDataModel = that.getModel();
                console.log('oDataModel', oDataModel);
                var aFinal = [];
                // that.loadBusyIndicator("page",true);
                var oList = oDataModel.bindList("/ebanSet");
                oList.requestContexts().then(function (aContexts) {
                    console.log(aContexts);
                    aContexts.forEach(function (oContext) {
                        console.log(oContext);
                        // As we have fetched the data already, we can access "Note" through getProperty
                        var sNote = oContext.getProperty("Eprofile"); 
                        if (sNote) {
                            // oContext.setProperty("Note", "No notes");
                            console.log('si');
                        }
                    });
                });
                // oDataModel.read("/ebanSet",{
                //     success: function(oData){
                //         that.loadBusyIndicator("page",false);
                //         if(oData.results.length > 0){
                //             var aUniquePRs = [...new Set(oData.results.map(function(el){
                //                 return el.Banfn;
                //             }))];
                //             for(var i=0; i<aUniquePRs.length; i++){
                //                 var aItems = oData.results.filter(function(el){
                //                     return el.Banfn === aUniquePRs[i];
                //                 });
                //                 if(aItems.length > 0){
                //                     var oHeader = aItems[0];
                //                     oHeader.Items = $.extend(true,[],aItems);
                //                     aFinal.push(oHeader);
                //                 }
                //             }
                //             oLocalModel.setProperty("/EbanResults", $.extend(true,[],aFinal));
                //             that._getPRFromCAPM();
                //         }
                //     }
                // });
            },
            _getPRFromCAPM: function(){
                var that = this;
                var oLocalModel = this.getModel('LocalModel');
                var sLoggedInUserID = oLocalModel.getProperty("/LoggedInUserID");
                var aResults = oLocalModel.getProperty("/EbanResults");
                var sUrl = sServiceUrl + "PurchaceReqSet";
                var aFinal = [];
                this.loadBusyIndicator("page", true);
                ReqHelper.sendGetReq(sUrl).then(function (oRes) {
                    that.loadBusyIndicator("page",false);
                    //if(oRes.value.length > 0){
                        for(var i=0; i<aResults.length; i++){
                            var iIdx = oRes.value.findIndex(function(el){
                                return el.pr === aResults[i].Banfn;
                            });
                            if(iIdx >= 0){
                                if(oRes.value[iIdx].nextApprover === sLoggedInUserID && oRes.value[iIdx].status === aResults[i]['Eprofile']){
                                    aResults[i]['IsRequestor'] = false;
                                    aResults[i]['IsApprover'] = true;
                                    aResults[i]['id'] = oRes.value[iIdx].id;
                                    aResults[i]['nextApprover'] = oRes.value[iIdx].nextApprover;
                                    aResults[i]['uistatus'] = 'Waiting for '+oRes.value[iIdx].status+' approval';
                                    aResults[i]['uistatusstate'] = 'Indication04';
                                    aResults[i]['status'] = oRes.value[iIdx].status;
                                    aFinal.push(aResults[i]);
                                } else if(oRes.value[iIdx].nextApprover !== sLoggedInUserID && oRes.value[iIdx].status !== aResults[i]['Eprofile']){
                                    aResults[i]['IsRequestor'] = false;
                                    aResults[i]['IsApprover'] = true;
                                    aResults[i]['id'] = oRes.value[iIdx].id;
                                    aResults[i]['nextApprover'] = sLoggedInUserID !== undefined ? sLoggedInUserID : oRes.value[iIdx].nextApprover;
                                    aResults[i]['uistatus'] = 'Waiting for '+aResults[i]['Eprofile']+' approval';
                                    aResults[i]['uistatusstate'] = 'Indication04';
                                    aResults[i]['status'] = aResults[i]['Eprofile'];
                                    aFinal.push(aResults[i]);
                                } else if(oRes.value[iIdx].requestor === sLoggedInUserID){
                                    aResults[i]['IsRequestor'] = true;
                                    aResults[i]['IsApprover'] = false;
                                    aResults[i]['id'] = oRes.value[iIdx].id;
                                    aResults[i]['nextApprover'] = oRes.value[iIdx].nextApprover;
                                    aResults[i]['uistatus'] = 'Waiting for '+oRes.value[iIdx].status+' approval';
                                    aResults[i]['uistatusstate'] = 'Warning';
                                    aResults[i]['status'] = oRes.value[iIdx].status;
                                    aFinal.push(aResults[i]);
                                } 
                            } else {
                                if(aResults[i]['Eprofile'] === 'N' || aResults[i]['Eprofile'] === 'L0'){
                                    aResults[i]['uistatus'] = aResults[i]['Eprofile'];
                                    aResults[i]['uistatusstate'] = 'Information';
                                } else {
                                    aResults[i]['uistatus'] = 'Waiting for '+aResults[i]['Eprofile']+' approval';
                                    aResults[i]['uistatusstate'] = 'Warning';
                                    aResults[i]['IsApprover'] = true;
                                    aResults[i]['IsRequestor'] = false;
                                }
                                aFinal.push(aResults[i]);
                            }
                        }
                        oLocalModel.setProperty("/Results", $.extend(true,[],aFinal));
                        //that._rebindTable();
                    //}
                }.bind(this))
                .catch(function (response) {
                    that.loadBusyIndicator("page",false);
                }.bind(this));
            },
        });
    });
