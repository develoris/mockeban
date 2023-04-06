sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ebanset',
            componentId: 'ebanSetObjectPage',
            entitySet: 'ebanSet'
        },
        CustomPageDefinitions
    );
});